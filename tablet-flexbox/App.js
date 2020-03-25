import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Post from './Post';
import data from './data.json';

class App extends React.Component {
  state = {
    dataSource: data,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Latest posts</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Post item={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          style={styles.list}
          contentContainerStyle={styles.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    backgroundColor: '#34495e',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
