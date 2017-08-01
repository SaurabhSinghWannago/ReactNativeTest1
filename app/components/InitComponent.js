/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Dimensions,
  View
} from 'react-native';

export default class InitComponent extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width
    var icon = require('../images/Default.png')
    if (screenWidth >= 414.0) {
      icon = require('../images/Default-736h.png')
    } else if (screenWidth >= 375.0) {
      icon = require('../images/Default-667h.png')
    } else if (screenWidth >= 320.0) {
      icon = require('../images/Default-568h.png')
    } else {
      icon = require('../images/Default.png')
    }

    return (
      <View>
        <Image source={icon} resizeMode='center'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('InitComponent', () => InitComponent);
