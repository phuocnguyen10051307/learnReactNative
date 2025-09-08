import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  let [check, SetCheck] = useState<boolean>(false)
  let [num, setNum] = useState<number>(0)
  let a: string = "không muốn bị scam thì chuyển khoản cho tao";
  const hanleOnclick = () => {
    SetCheck(!check)
    num < 10 ? setNum(num + 1) : setNum(0)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.hello1}>{`${num}`}</Text>
      {/* <Text style={styles.bt1} onPress={hanleOnclick}>Click me 
      </Text> */}
      <Button title='Increase ' onPress={()=>setNum(num+1)}/>
      <Button title='Descrease'onPress={()=>setNum(num-1)}/>
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
    color: `greenlight`,
    fontSize: 50,
    height: 500,

  },
  bt1: {
    width: 200,
    textAlign: `center`,
    marginVertical: 8,
    backgroundColor: `yellow`,
    color: 'red',
    fontSize: 20,
  }
});
