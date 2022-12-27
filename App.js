import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

const App = () => {
  const sayHello = text => {
    console.log('Hello, world!', text);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'stretch',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            marginBottom: 10,
            padding: 10,
            backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 36,
            }}>
            Mehmet Konukçu
          </Text>
        </View>
        <Button
          title="Press Me!"
          color="red"
          onPress={e => {
            sayHello('deneme');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
