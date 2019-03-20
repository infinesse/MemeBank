import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainFeed from './MainFeed.js';
import Login from './Login';


class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };


  render() {
  
    return <Login />
  

  };
} 

export default HomeScreen;



