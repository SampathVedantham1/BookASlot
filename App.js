import { userState} from 'react';
import {view, SafeAreaView, StyleSheet} from 'react-native';
import { useRouter} from 'expo-router';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from './FormScreen';

const Stack = createNativeStackNavigator();

const Home = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Book My Glam" component={HomeScreen} backgroundColor='grey'/>
        <Stack.Screen name="Booking Page" component={FormScreen} backgroundColor='grey'/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 20
  }
});

export default Home;