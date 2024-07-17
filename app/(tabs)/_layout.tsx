import React from 'react'
import {Stack, Tabs} from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"
        options={{
        tabBarLabel: 'Page',
        tabBarIcon: blue => <FontAwesome name="ellipsis-h" size={24} color="#000" />
      }}/>      
      <Tabs.Screen name="login" options={{
        tabBarLabel: 'Login',
        tabBarIcon: red => <FontAwesome name="user" size={24} color="#000" />
      }}/>      
      <Tabs.Screen name="sign_up"  options={{
        tabBarLabel: 'Sign Up',
        tabBarIcon: red => <FontAwesome name="sign-out" size={24} color="#000" />
      }}/>      
      <Tabs.Screen name="home" options={{
        tabBarLabel: 'Home',
        tabBarIcon: red => <FontAwesome name="home" size={24} color="#000" />
      }}/>      
      <Tabs.Screen name="product" options={{
        tabBarLabel: 'Product',
        tabBarIcon: red => <FontAwesome name="database" size={24} color="#000" />
      }}/>     
    </Tabs>
  )
}
