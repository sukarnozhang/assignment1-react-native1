import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import monkeyPng from "./assets/monkey.png";
import React, { useState } from "react"; // the import



export default function App() {
  const [text, setText] = useState(null); // within functional component
  return (
    <ScrollView>
      
      <Text style={{fontSize:50, marginTop: 50}}>Hello, smile!</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
      ></TextInput>
      <Image source={monkeyPng}></Image>
      <Image
      style={styles.image}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
      }}
    ></Image>
    </ScrollView>
  //   <View
  //   style={[
  //     styles.container,
  //     {
  //       // Try setting `flexDirection` to `"row"`.
  //       flexDirection: "column",
  //     },
  //   ]}
  // >
  //   <View style={{ flex: 1, backgroundColor: "red" }} />
  //   <View style={{ flex: 2, backgroundColor: "darkorange" }} />
  //   <View style={{ flex: 4, backgroundColor: "green" }} />
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 500,
    width: 500,
  },

  input: {
    height: 40,
    margin:12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
