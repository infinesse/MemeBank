import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainFeed from './MainFeed.js';
import Login from './Login';
import { SwitchNavigator, TabNavigator } from 'react-navigation'; 

const MainStack = SwitchNavigator({
  main: MainFeed,
  login: Login 
});

 
class HomeScreen extends Component {
  // static navigationOptions = {
  //   header: null,
  // };

  render() {

    return <MainStack />;
   

  }
} 

export default HomeScreen;



