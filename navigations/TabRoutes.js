import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import Settings from '../screens/Settings';


const Tab = createBottomTabNavigator();



const TabRoutes = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default TabRoutes;
