import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class UserList extends Component {
  capitalize(value) {
    return value[0].toUpperCase() + value.substring(1);
  }

  renderContact = ({ item }) => {
    return (
      <TouchableOpacity style={styles.row}>
        <Image source={{ uri: `${item.picture.large}` }} style=
          {styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>
            {this.capitalize(item.name.first)}
            {this.capitalize(item.name.last)}
          </Text>
          <Text style={styles.phone}>{item.phone}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { contacts } = this.props;
    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>
          My contacts!
      </Text>
        <FlatList
          data={contacts}
          renderItem={this.renderContact}
          keyExtractor={item => item.id}
          style={styles.main}
        />
      </View>);
  }
}