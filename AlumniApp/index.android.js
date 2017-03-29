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
import Database from './core/repo/Database';

//const realmdb = require('Database');
const Realm = require('realm');

class AlumniApp extends Component {
  //this.state = {text: ''};

  render() {
      Database.createDatabase();
      Database.add({"name":"User", "properties": {
          "id":1,
          "username": "blah",
          "password": "secret",
          "email": "abc1234@rit.edu" }});

    return (
      <View style={styles.container}>
               <Text>{Database.query("User")}
               </Text>

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
