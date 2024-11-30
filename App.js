import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
