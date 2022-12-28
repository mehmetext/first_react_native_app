import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const Card = ({title, text}) => {
  console.log(title);
  return (
    <View style={styles.card}>
      <View style={styles.card_container}>
        <Text style={styles.card_title}>{title}</Text>
        <Text style={styles.card_text}>{text}</Text>
      </View>
      <TouchableOpacity
        style={styles.card_button}
        onPress={() => {
          Alert.alert(title, 'is liked');
        }}>
        <Text style={styles.card_button_text}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  card: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    margin: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  card_container: {
    margin: 10,
  },
  card_title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  card_button: {
    backgroundColor: '#00C2FF',
    padding: 10,
    alignItems: 'center',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  card_button_text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
