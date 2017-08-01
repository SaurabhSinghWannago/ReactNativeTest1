/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import InitComponent from './app/components/InitComponent'

export default class ReactNativeTest1 extends Component {
  render() {
    return (
      <View>
        <InitComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTest1', () => ReactNativeTest1);
