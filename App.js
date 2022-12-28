import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const App = () => {
  const sayHello = text => {
    console.log('Hello, world!', text);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 6,
  },
});

export default App;
