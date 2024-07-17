import React from 'react'
import { View,Text,StyleSheet,SafeAreaView,TextInput,ScrollView} from 'react-native'


export default function product() {
  return (
    <View style={style.main}>
      <Text style={style.text}>Products</Text>
      <ScrollView style={style.scrollview}>
        <SafeAreaView>
          <TextInput
              style={style.input}
              placeholder='Products Details'
          />

          <TextInput
              style={style.input}
              placeholder='Products Details'
          />
          <TextInput
              style={style.input}
              placeholder='Products Details'
          />
          <TextInput
              style={style.input}
              placeholder='Products Details'
          />
          <TextInput
              style={style.input}
              placeholder='Products Details'
          />
          <TextInput
              style={style.input}
              placeholder='Products Details'
          />
          <TextInput
              style={style.input}
              placeholder='Products Details'
          />
          <TextInput
              style={style.input}
              placeholder='Products Details'
          />
        </SafeAreaView>
      </ScrollView>
      

    </View>
  )
}


const style = StyleSheet.create({
  main:{
    backgroundColor:'#A8E0B7',
    height:'100%',
  },
  text:{
    fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40,
        marginLeft: 140 
  },
  input:{
    height: 100,
    width:300,
    margin: 20,
    marginLeft:60,
    padding: 10,
    top:10,
    backgroundColor:'white',
    fontSize:30,
  },
  scrollview:{
    width:'100%',
    height:'100%'
  }
})