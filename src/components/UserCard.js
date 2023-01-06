import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function UserCard({user}) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.name}</Text>
      <Text style={styles.text}>
        {user.username} ({user.email})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 6,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});
