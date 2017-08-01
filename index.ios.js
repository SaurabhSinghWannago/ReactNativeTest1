/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';

import InitComponent from './app/components/InitComponent'

export default class ReactNativeTest1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InitComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('ReactNativeTest1', () => ReactNativeTest1);
