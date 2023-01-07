import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack'
import AuthStack from './AuthStack'


const Stack = createNativeStackNavigator();


const Routes = () => {
      const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:!isLoggedIn}}>
            {isLoggedIn ? MainStack(Stack) : AuthStack(Stack)}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
