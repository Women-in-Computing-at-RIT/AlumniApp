/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// for testing
import CreateEvent from './core/CreateEvent';
import CreateAccount from './core/CreateAccount';
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

        <CreateEvent />
        <CreateAccount />
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
