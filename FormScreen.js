import { ToastAndroid, Alert, View, Text, FlatList, TouchableOpacity, TextInput, Button, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from './styles';
import { useState, React } from 'react';
import HomeScreen from './HomeScreen';

const FormScreen = ({navigation, route}) => {
    const {slotItem, updateSlots} = route.params;
    console.log("slotItem "+ slotItem.id);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [preferredTimeSlot, setPreferredTimeSlot] = useState({
        id: 0,
        date: '0000-00-00',
        time: '00:00 AM',
        available: false
    });

    const validateInputs = () => {
        if (name.length < 3) {
            Alert.alert(`Invalid input in name field`);
            return false;
        }
        else if (!emailRegex.test(email)) {
            Alert.alert(`Invalid email`);
            return false;
        } else if (slotItem.id == 0) {
            Alert.alert(`Invalid slot. Please select slot again`);
            navigation.navigate('Book My Glam');
        }
        return true;
    }
    
    const bookASlot = () => {
        console.log("inside the book a slot")
        if (validateInputs()) {
            updateSlots(slotItem)
            Alert.alert(
                'Booking Confirmation',
                `Booked slot is : ${slotItem.time}`,
                [
                    { text: 'OK', onPress: () => navigation.navigate('Book My Glam') }
                ]
            )
        }
    };
    
    return (
        <SafeAreaView>
            <ScrollView> 
                <Text style={styles.sectionHeaderStyle}> Fill the form to book a slot. </Text>
                
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        />

                    <Text style={styles.label}>
                        Selected date: {slotItem.date} {'\n'}Selected time : {slotItem.time}
                    </Text>
                    
                    <TouchableOpacity style={styles.buttonStyle} onPress={bookASlot}>
                        <Text>
                            Book the slot
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        
        );
};


export default FormScreen;