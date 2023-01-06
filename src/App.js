import {Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function App() {
  async function fetchData() {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('fetchData axios:', res);
    } catch (error) {
      console.error('fetchData axios:', error);
    }
  }

  return (
    <SafeAreaView>
      <Text>Hello API!</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </SafeAreaView>
  );
}
