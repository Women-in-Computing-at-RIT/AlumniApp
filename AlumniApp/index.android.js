/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// for testing
import CreateEvent from './core/CreateEvent';     //Import CreateAccount
//<CreateAccount />

const Realm = require('realm');

class AlumniApp extends Component {
  //this.state = {text: ''};
  render() {
    let realm = new Realm({
      schema: [{ name: 'Test', properties: { name: 'string' } }]
    });

    realm.write(() => {
      realm.create('Test', { name: 'Testy' });
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Should say a number: {realm.objects('Test').length}{'\n'}
          Should say Testy: {realm.objects('Test').filtered('name ="Testy"')[0].name}
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <CreateEvent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AlumniApp', () => AlumniApp);
