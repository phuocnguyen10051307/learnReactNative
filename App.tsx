import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  let [check, SetCheck] = useState(false)
  let a: string = "không muốn bị scam thì chuyển khoản cho tao";
  const hanleOnclick = () => {
    SetCheck(!check)
    Alert.alert(`${a}`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.bt1}>
        <Button title='click' onPress={hanleOnclick} />
      </Text>

    </View>
  );
}


// react native không có css 
// View = div
// Texxt = p 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: `red`,
    fontSize: 50,
    height:500,

  },
  bt1:{
    width:200,
    textAlign:`center`,
    marginVertical:8,
    backgroundColor:`yellow`,
    color:'red',
    fontSize:20,
  }
});
