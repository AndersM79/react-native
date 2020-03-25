import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = '01 - Blue Behind Green Bloches';

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} />
      <Text style={styles.title}>
        <Text style={styles.subTitle}>Playing: </Text>{name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: '#e67e22',
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: '#d35400',
    height: 50,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 50,
    left: 10,
  },
  subTitle: {
    fontWeight: 'bold',
  }
});
