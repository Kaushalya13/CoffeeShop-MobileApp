import React from 'react'
import { View, Text ,StyleSheet,SafeAreaView,TextInput} from 'react-native'

export default function home() {
  return (
    <View style={style.main}>
      <Text style={style.login}>Welcome to Home Page!</Text>

    <SafeAreaView>
        <TextInput
            style={style.input}
            placeholder='hiiiiiiiiiiiii'
        />

        <TextInput
            style={style.input}
            placeholder='hiiiiiiiiiiiii'
        />
        <TextInput
            style={style.input}
            placeholder='hiiiiiiiiiiiii'
        />
        <TextInput
            style={style.input}
            placeholder='hiiiiiiiiiiiii'
        />
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
    main: {
        backgroundColor:'#A8E0B7',
        height:'100%',
    },
    login: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40,
        marginLeft: 70 
    },
    input:{
        height: 100,
        width:300,
        margin: 20,
        marginLeft:70,
        padding: 10,
        top:30,
        backgroundColor:'white',
        fontSize:30,
    },
    
})
