import React from 'react';

import Menu from './Menu';

import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends React.Component {
  state = {
    orientation: '',
  }

  handleLayoutChange = () => {
    this.getOrientation();
  }

  getOrientation = () => {
    const { width, height } = Dimensions.get('window');
    const orientation = height > width ? 'Portrait' : 'Landscape';
    this.setState({
      orientation
    });
  }

  render() {
    return (
      <View
        onLayout={this.handleLayoutChange}
        style={styles.container}
      >
        <Menu orientation={this.state.orientation} />
        <View style={styles.main}>
          <Text>Main Content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
