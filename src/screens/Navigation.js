import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

const stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Welcome">
        <stack.Screen name="Welcome" component={WelcomeScreen} />
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Signup" component={SignupScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
