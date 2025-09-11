import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  let [students, setStudents] = useState([
    { id: 1, name: "Phuoc ", age: 21 },
    { id: 2, name: "Tam ", age: 21 },
    { id: 3, name: "Thy ", age: 21 },
    { id: 4, name: "Thu ", age: 21 },
    { id: 5, name: "Suong ", age: 21 },
    { id: 6, name: "Thao ", age: 21 },
    { id: 7, name: "Phuc ", age: 21 },
    { id: 8, name: "Nam ", age: 21 },
    { id: 9, name: "Han ", age: 21 },
    { id: 10, name: "Phu ", age: 21 }])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Hello world</Text>
      <FlatList data={students} 
      keyExtractor={item=> item.id+""}
      numColumns={2}
      renderItem={({item})=>{
        return (
          <View>
            <Text style={styles.bt1}>{`${item.name}`}</Text>
          </View>
        )
      }}/>
      {/* <ScrollView>
              {students.map((stu) => {
        return (

          <View key={`${stu.id}`}>
            <Text style={styles.bt1}>{`${stu.name}`}</Text>
          </View>
        )
      })}</ScrollView> */}

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
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  hello1: {

  },
  bt1: {
    borderRadius: 0,
    borderWidth: 1,
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "pink",
    width:50,
    height:50
  }
});
