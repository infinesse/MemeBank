import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainFeed from './MainFeed.js';
import Login from './Login';
import Camera from './Camera';
import Profile from './Profile';


import { SwitchNavigator, TabNavigator } from 'react-navigation';

const Tabs = TabNavigator ({
  feed: MainFeed, 
  camera: Camera,
  profile: Profile
});

const MainStack = SwitchNavigator({
  login: Login,
  main: Tabs
});
class HomeScreen extends Component {
  render(){
    return <MainStack />;
  }
}
export default HomeScreen;



// import { createAppContainer, createSwitchNavigator, createTabNavigator } from 'react-navigation'; 

// const Tabs = createTabNavigator ({
//   feed: MainFeed,
//   camera: Camera,
//   profile: Profile
// }) 

// const MainStack = createSwitchNavigator({
//   login: Login,
//   main: Tabs,
// });
// const AppContainer2 = createAppContainer(SecondaryStack);
// const AppContainer = createAppContainer(MainStack);
 
// class HomeScreen extends Component {

//   render() {

//     return <AppContainer />;
   

//   }
// } 

// export default HomeScreen;



