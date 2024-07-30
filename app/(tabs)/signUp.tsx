import React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet,Image,TextInput} from 'react-native'
import { router,Link } from 'expo-router';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type SignUpProps = {
  navigation: NavigationProp<ParamListBase>;
};

export default function signUp({navigation}:SignUpProps) {
  return (
    <View style={style.main}>
        <Text style={style.text}>SIGN UP</Text>
        {/* <View style={style.contain}>
          <Image
            source={require('../../assets/images/cup.png')}
            style={style.image}
          />
        </View> */}

      <Text style={style.username}>Username</Text>
        <TextInput
          style={style.input}
          placeholder='Enter username'
        />

      <Text style={style.username}>Email</Text>
        <TextInput
          style={style.input}
          placeholder='Enter Valid Email'
        />

      <Text style={style.username}>Password</Text>
        <TextInput
          style={style.input}
          placeholder='Enter password'
        />

        <View style={style.container}>
          <TouchableOpacity
            style={style.button}
            onPress={() => router.push('/login')}
          >
          <Text style={style.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>

    </View>

    
  )
}

const style = StyleSheet.create({
  main:{
    backgroundColor:'#f4d499',
    height:'100%',
  },
  container: {
    width: 100,
    marginLeft:270,
    marginTop:250
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5, // Adjust the value for desired border radius
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  contain: {
    width: 150,
    marginLeft:135,
    marginTop:130
  },
  image:{
    marginTop:-50,
    width: 400,
    height: 300,
    marginLeft:-130
  },
  text: {
    fontSize: 60,
    alignItems:'center',
    color: 'black',
    marginLeft:110,
    fontWeight:'bold',
    fontFamily:'serif'
  },
  input:{
    height: 50,
    width:330,
    margin: 20,
    marginLeft:40,
    padding: 10,
    top:100,
    backgroundColor:'white',
    fontSize:30,
    borderRadius:10,
  },
  username:{
    top:100,
    fontSize: 30,
    alignItems:'center',
    color: 'black',
    marginLeft:45,
  },
  password:{
    top:60,
    fontSize: 30,
    alignItems:'center',
    color: 'black',
    marginLeft:45,
  },
});