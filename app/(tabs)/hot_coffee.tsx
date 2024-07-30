import React from 'react'
import { View , Text,StyleSheet,Image} from 'react-native'
import PagerView from 'react-native-pager-view';


export default function hot_coffee() {
  return (
    <View>
      <View style={styles.con}>
        <Image
          source={require('../assets/images/cup.png')}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  con: {
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
});