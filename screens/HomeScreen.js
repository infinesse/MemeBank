import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { MainFeed } from './MainFeed.js';


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
  
    return <MainFeed />;


  };
} 

export default HomeScreen;



