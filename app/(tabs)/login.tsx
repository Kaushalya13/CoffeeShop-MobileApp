import React from 'react'
import { View, Text ,StyleSheet,TextInput,Button, ImageBackground} from 'react-native'
import { router,Link } from 'expo-router';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import bgImage from '../assets/images/Coffee wallpaper.jpeg';

type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
};

export default function login({navigation}:LoginProps) {
  return (
    <View>
        <ImageBackground source={bgImage}style={style.container}>
            <Text style={style.text}>Coffee Enyong</Text>
            <Text style={style.login}>Login...</Text>

            <Text style={style.username}>username</Text>
            <TextInput
              style={style.input}
              placeholder='Enter username'
            />

            <Text style={style.password}>password</Text>
            <TextInput
              style={style.input}
              placeholder='Enter password'
              secureTextEntry={true}
            />

            <View style={{ width: 150, marginTop: 120, marginLeft: 130 }}>
              <Button
                onPress={() => navigation.navigate('Page')}
                title='Login' color="black" />
            </View>

            <Text style={style.signup}>Do you have an account?
              
              <Link style={style.link}
          onPress={() => navigation.navigate('signUp')} href={''}>Sign Up</Link>
            </Text>

        </ImageBackground>
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 35,
    alignItems:'center',
    color: 'black',
    marginLeft:115,
    fontWeight:'bold',
    marginTop:25
  },
  login:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginLeft: 40,
    fontFamily:'sans-serif'
  },
  input:{
    height: 50,
    width:330,
    margin: 20,
    marginLeft:40,
    padding: 10,
    top:50,
    backgroundColor:'white',
    fontSize:30,
    borderRadius:20,
  },
  username:{
    top:60,
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
  signup:{
    top:60,
    fontSize: 25,
    alignItems:'center',
    color: 'black',
    marginLeft:40,
  },
  link:{
    fontSize:38,
    fontWeight:'bold',
  },
  container: {
    height: 850,
    width: 650,
    marginTop:0,
    opacity:0.8
  }
})
