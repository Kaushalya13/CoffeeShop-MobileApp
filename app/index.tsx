import{View,Text,StyleSheet} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View>
      <Text style={style.name}>Hiiii</Text>
    </View>
  )
}



const style=StyleSheet.create({
  name:{
    color:'red'
  }
})