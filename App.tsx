import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  let [name, setName] = useState<string>("phuoc nguyen")
  let [age, setAge] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.hello1}> Name: {`${name}`} </Text>
      <TextInput
        value={name}
        onChangeText={(value) => { setName(value) }}
        style={styles.bt1} />
      <Text style={styles.hello1}>Age  : {`${age}`} </Text>
      <TextInput
        keyboardType='number-pad'
        maxLength={2}
        onChangeText={(value) => { setAge(+value) }}
        style={styles.bt1} />
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
    fontSize: 20,

  },
  bt1: {
    width: 200,
    marginVertical: 8,
    borderBlockColor: "black",
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 20,
    textAlign: "center"
  }
});
