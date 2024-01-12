import { ToastAndroid, Alert, View, Text, FlatList, TouchableOpacity, TextInput, Button, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { useState, React } from 'react';
import styles from '../styles/styles';

const HomeScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [preferredTimeSlot, setPreferredTimeSlot] = useState({
        id: 0,
        date: '0000-00-00',
        time: '00:00 AM',
        available: false
    });
    
    // Your state and sample time slots data here
    const timeSlots = [
        { id: 1, date: '2024-01-15', time: '10:00 AM', available: true},
        { id: 2, date: '2024-01-15', time: '02:30 PM', available: false },
        { id: 3, date: '2024-01-15', time: '09:15 AM', available: false },
        { id: 4, date: '2024-01-15', time: '01:00 PM', available: true },
        { id: 11, date: '2024-01-16', time: '10:00 AM', available: true },
        { id: 21, date: '2024-01-16', time: '02:30 PM', available: false },
        { id: 31, date: '2024-01-16', time: '09:15 AM', available: false },
        { id: 41, date: '2024-01-16', time: '01:00 PM', available: true },
    ];
    
    const [slots, setSlots] = useState(timeSlots);
    const updateSlots = (item) => {
        setSlots((slots) => slots.map((slot) =>
            slot.id == item.id ? { ...slot, available: !slot.available } : slot
        ));
    }
    const handleTimeSlotSelection = ({item}) => {
        console.log("inside handle time slot selection " + item.id)
        setPreferredTimeSlot("Selcted Date : " + item.date + "\n Selected Time : " + item.time);
        setSlots((slots) => slots.map((slot) =>
        slot.id == item.id ? { ...slot, available: !slot.available } : slot
        ));
    };
    
    const bookASlot = () => {
        console.log("inside the book a slot")
        if(name.length > 1 && email.includes('@') && preferredTimeSlot.id != 0){
            setSlots((slots) => slots.map((slot) =>
            slot.id == preferredTimeSlot.id ? { ...slot, available: !slot.available } : slot));
            Alert.alert(`Booked slot is : ${preferredTimeSlot.time}`);
        } else {
            Alert.alert(`Please fill all the fields.`);
        }
    };
    
    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'This slot is already booked !!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
            );
        };
        
        const renderItem = ({ item }) => {
            const handlePress = () => {
                if (item.available) {
                        setPreferredTimeSlot({
                        id: item.id,
                        date: item.date,
                        time: item.time,
                        available: item.available
                    })
                    navigation.navigate('Booking Page',{slotItem: item, updateSlots })
                }
                else{
                    showToast()
                }
            };
            
            return (
                <View style={styles.container}>
                    <View style={styles.rowStyle}>
                        <Text style={{ margin: 10, fontWeight: 'bold' }}>{item.date}</Text>
                        <Text style={{ margin: 10, fontWeight: 'bold' }}>{item.time}</Text>
                    </View>
                    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: (item.available ? 'lightgreen' : 'lightgrey') }]} onPress={handlePress}>
                        <Text style = {{fontWeight: 'bold'}}>
                            {item.available ? 'Available' : 'Booked'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        };
        
        return (
            <SafeAreaView>
        
            <Text style={styles.sectionHeaderStyle}> Select a slot </Text>
            
            {/* List of Time Slots */}
            <FlatList
                data={slots}
                keyExtractor={(item) => item.id}
                renderItem={(item) => renderItem(item)}
                style= {styles.listStyle}
            />
            </SafeAreaView>
            
            );
        };

export default HomeScreen;