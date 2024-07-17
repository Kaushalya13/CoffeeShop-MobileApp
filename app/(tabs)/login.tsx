import React from 'react'
import { View, Text ,StyleSheet,TextInput,Button,Image} from 'react-native'
import { router,Link } from 'expo-router';

export default function login() {
  return (
    <View style={style.main}>
      <Text style={style.text}>Coffee Enyong</Text>

      {/* <View style={style.container}>
        <Image
          source={require('../../assets/images/cup.png')}
          style={style.image}
        />
      </View> */}
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
      />

      <View style={{ width: 150, marginTop: 120, marginLeft: 130 }}>
        <Button
          onPress={() => router.push('/home')}
          
          title='Login' color="black" />
      </View>

      <Text style={style.signup}>Do you have an account?
        <Link style={style.link} 
          href="/sign_up">Sign Up</Link>
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  main:{
    backgroundColor:'#f4d499',
    height:'100%',
  },
  text: {
    fontSize: 30,
    alignItems:'center',
    color: 'black',
    marginLeft:130,
    fontWeight:'bold'
  },
  login:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 120,
    marginLeft: 40,
    fontFamily:'serif'
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
})
