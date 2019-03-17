import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
// import { WebBrowser } from 'expo';


// import { MonoText } from '../components/StyledText';

import config from '../config';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(){
    super();
      this.state = {
        screenWidth: Dimensions.get("window").width
      };
    
  }
    // componentDidMount(){
    //   // alert(Dimensions.get("window").width);
    //   this.setState({
    //     screenWidth: Dimensions.get("window").width
    //   });

    // }
  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri = "https://lh3.googleusercontent.com/pbOssoRAzE9SfloBwvhbequjTksF8wrg1OarGPLSXqnmlj3q9ojGwwHClKZ7Qru7PayUHO5zcnaag3_gB7hYbAyX" + "=s" + imageHeight + "-c";

    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
      <View style={styles.tempNav}>
        <Text>Meme Cache</Text>

      </View>
      <View style={styles.userBar}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.userPic} source={{ uri: "https://lh3.googleusercontent.com/diiH2srEew6oT63PI_v1OjCFsczx8gjJIwJZde3p7dyajg1K74oY3exNIOGdzvkhL2fGHTPiRVuMNmManwYaaAQ9" }}/>
        <Text style={{ marginLeft: 10 }}>Meowterspace</Text>

      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>...</Text>
      </View>

      </View>
      <Image
      style={{ width: this.state.screenWidth, height: 400 }}
      source={{
        uri: imageUri
      }}
      />
      <View style={styles.iconBar}>
        <Image style={[styles.icon, { height: 40, width: 40 }]}source={config.images.heartIcon}/>
        <Image style={[styles.icon, { height: 40, width: 40 }]}source={config.images.messageIcon}/>
        <Image style={[styles.icon, { height: 40, width: 40 }]}source={config.images.returnIcon}/>
      </View>
      </View>
    );


  };
} 


const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%", 
    height: 56,
    marginTop: 20, 
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(102,102,102)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"

  },

  userBar: { 
    width: 100 + "%",
    height: config.styleConstants.rowHeight, 
    backgroundColor:"rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"

  },

  userPic: {
    height: 40, 
    width: 40,
    borderRadius:20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100+"%",
    borderColor: "rgb(102,102,102)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row"

  },

  icon: {
    paddingHorizontal: 10,
  
  }
});



//1h23mins video 