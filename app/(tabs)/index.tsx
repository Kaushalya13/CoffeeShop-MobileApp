import{View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';



export default function index() {
  return (
    <View style={style.main}>
      <Text style={style.test}>Welcome to ,</Text>
      <Text style={style.header}>Relax with Coffee House!</Text>


      <View style={style.container}>
        <Image
          source={require('../../assets/images/coffee.png')}
          style={style.image}
        />
      </View>

      <Text style={style.test01}>Each coffee bean reflects our commitment to Peruvian coffee products.</Text>
      

      <View style={style.container}>
        <TouchableOpacity
            style={style.button}
            onPress={() => router.push('/login')}
          >
          <Text style={style.buttonText}>Get Start</Text>
          
          {/* <Image source={require('../../assets/images/arrow.png')} style={style.logo} /> */}
          
        </TouchableOpacity>
        
      </View>
      
    </View>
  )
}



const style=StyleSheet.create({
  main:{
    backgroundColor:'#f4d499',
    height:'100%',
  },
  
  image:{
    marginTop:-50,
    width: 400,
    height: 300,
    marginLeft:-130
  },
  test:{
    fontSize:20,
    marginLeft:30,
    fontWeight:'bold',
    alignItems:'center',
    top:20,
    color:'black',
  },
  test01:{
    fontSize:20,
    marginLeft:30,
    fontWeight:'bold',
    alignItems:'center',
    top:70,
    color:'black',
  },
  header:{
    fontSize:40,
    top:30,
    marginLeft:30,
    fontWeight:'bold',
    alignItems:'center',
    color:'#7b3a28',
    fontFamily:'serif'
  },
  logo:{
    width:20,
    height:20
  },
  container: {
    width: 150,
    marginLeft:135,
    marginTop:130
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})