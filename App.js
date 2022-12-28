import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const App = () => {
  const sayHello = text => {
    console.log('Hello, world!', text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_container}>
        <Text>Hello, world!</Text>
      </View>
      <View style={styles.footer_container}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_container: {
    flex: 1,
    backgroundColor: 'red',
  },
  footer_container: {
    flex: 2,
    backgroundColor: 'blue',
  },
});

export default App;
