import {
  SafeAreaView,
  Button,
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('fetchData axios:', res.data);
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error('fetchData axios:', error);
    }
  }

  function renderItem({item}) {
    return <UserCard user={item} />;
  }

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={<View style={styles.separator} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 5,
  },
  separator: {height: 5},
});
