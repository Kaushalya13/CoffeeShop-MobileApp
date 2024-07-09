import{View,Text,StyleSheet,Image,SafeAreaView,TextInput,Button} from 'react-native'
import React from 'react'

export default function login() {
  return (
    <View style={style.main}>
      <Text style={style.login}>Welcome in the app!</Text>
    

      <View style={{ width: 150, marginTop: 550, marginLeft: 130, borderRadius: 90 }}>
        <Button title='Login' color="black" />
      </View>


      {/* <SafeAreaView>
        <TextInput
          style={style.input}
          placeholder='Enter your name'
        />
      </SafeAreaView> */}

    </View>
  )
}



const style=StyleSheet.create({
  main:{
    backgroundColor:'#A8E0B7',
    height:'100%',
  },

  login:{
    fontSize:50,
    marginLeft:30,
    fontWeight:'bold',
    alignItems:'center',
    top:50,
    color:'black',
    
  },

  logo:{
    width:20
  },

  input:{
    height: 40,
    margin: 50,
    borderWidth: 0.5,
    padding: 10,
    top:400,
    backgroundColor:'yellow',
  }
})