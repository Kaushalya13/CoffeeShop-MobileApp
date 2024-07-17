import React from 'react'
import { View, Text ,StyleSheet,SafeAreaView,TextInput,ScrollView,FlatList} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Link,router } from 'expo-router';


export default function home() {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'All to know...',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d73',
          title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d74',
            title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d75',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d76',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d77',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d78',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d79',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d71',
          title: 'Third Item',
        },
    ];

  return (
    <View style={style.main}>
      <Text style={style.login}>Welcome to Home Page!</Text>

      <View style={style.searchContainer}>
            <AntDesign name="search1" size={24} color='black' />
            <TextInput placeholder="Choose Your drink..." style={style.searchInput} />
      </View>

      <Link style={style.link} 
          href="/hot_coffee">Hot Coffee
      </Link>

      <Link style={style.link01} 
          href="/hot_coffee">Cold Coffee
      </Link>

      <Link style={style.link02} 
          href="/hot_coffee">Others
      </Link>

      <ScrollView style={style.scrollview}>
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({item}) =><Text style={style.nametext}>{item.title} </Text>}
                keyExtractor={item => item.id}
            />
            {/* <TextInput
                style={style.input}
                placeholder='All to know...'
            />

            <TextInput
                style={style.input}
                placeholder='Tranding Products'
            />
            <TextInput
                style={style.input}
                placeholder='Show Items'
            />
            <TextInput
                style={style.input}
                placeholder='Seles Products'
            />
             <TextInput
                style={style.input}
                placeholder='Seles '
            />
             <TextInput
                style={style.input}
                placeholder='Seles Products'
            />
             <TextInput
                style={style.input}
                placeholder='Seles Products'
            />
             <TextInput
                style={style.input}
                placeholder='Seles Products'
            />
             <TextInput
                style={style.input}
                placeholder='Seles Products'
            />
             <TextInput
                style={style.input}
                placeholder='Seles Products'
            />
             <TextInput
                style={style.input}
                placeholder='Seles Products'
            />
             <TextInput
                style={style.input}
                placeholder='Seles Products'
            /> */}
        </SafeAreaView>
      </ScrollView>
    
    </View>
  )
}

const style = StyleSheet.create({
    main: {
        backgroundColor:'#f4d499',
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
    scrollview:{
        width:'100%',
        height:'100%'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        width: 300,
        height: 40,
        marginLeft:60,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 10,
        margin: 10
    },
    searchInput: {
        flex: 1,
        marginLeft: 10
    },
    link:{
        fontSize:22,
        marginLeft:40,
        top:25
    },
    link01:{
        fontSize:22,
        marginLeft:170,
        
    },
    link02:{
        fontSize:22,
        marginLeft:320,
        top:-25
        
    },
    nametext: {
        fontSize: 20,
        height:100,
        width:300,
        alignItems: "center",
        marginLeft: 50,
        fontFamily: "serif",
        fontWeight: "bold",
        marginTop: 20,
        backgroundColor:"white",
      }
})
