import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index'; 
import login from './login';
import signUp from './signUp';
import home from './home';
import { Tabs } from 'expo-router';



const Stack = createNativeStackNavigator();

export default function _layout() {
  return (
    //  <Tabs>
    //   <Tabs.Screen name="index"
    //     options={{
    //     tabBarLabel: 'Page',
    //     tabBarIcon: blue => <FontAwesome name="ellipsis-h" size={24} color="#000" />
    //   }}/>     
      
    //   <Tabs.Screen name="login" options={{
    //     tabBarLabel: 'Login',
    //     tabBarIcon: red => <FontAwesome name="user" size={24} color="#000" />
    //   }}/>      
    //   <Tabs.Screen name="sign_up"  options={{
    //     tabBarLabel: 'Sign Up',
    //     tabBarIcon: red => <FontAwesome name="sign-out" size={24} color="#000" />
    //   }}/>      
    //   <Tabs.Screen name="home" options={{
    //     tabBarLabel: 'Home',
    //     tabBarIcon: red => <FontAwesome name="home" size={24} color="#000" />
    //   }}/>      
    //   <Tabs.Screen name="product" options={{
    //     tabBarLabel: 'Product',
    //     tabBarIcon: red => <FontAwesome name="database" size={24} color="#000" />
    //   }}/>     
    // </Tabs> 
    <Stack.Navigator>
        <Stack.Screen name="Home"  component={Index}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Login"  component={login}
          // options={{
          //   headerShown: false
          // }}
        />
        <Stack.Screen name='SignUp' component={signUp} />
        <Stack.Screen name='Page' component={home} 
          options={{
            headerShown: false
          }}
        
        />

        {/* <Tabs>
          <Tabs.Screen name='Home' options={{
            tabBarLabel: 'Home',
            tabBarIcon: red => <FontAwesome name="home" size={24} color="#000" />
          }} />
        </Tabs> */}
     </Stack.Navigator>

  );
}
