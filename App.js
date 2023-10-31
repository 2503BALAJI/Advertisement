import 'react-native-gesture-handler';
import * as React from 'react';
import Login from './Screen/Login';
import Sign_up from './Screen/Sign_up';
import ForgotPass from './Screen/ForgotPass';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={'false'}>
        <Stack.Screen name="Login" component={Login}   options={{headerShown: false}}  />
        <Stack.Screen name="Sign_up" component={Sign_up}   options={{headerShown: false}} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
