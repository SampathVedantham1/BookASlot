import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from './components/FormScreen';

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

export default Home;