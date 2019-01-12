import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World!!</Text>
        <Text style={styles.hello}>Hello World!!</Text>
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaf255',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello:{
    color:"red",
  }
});
