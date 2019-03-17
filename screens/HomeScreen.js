import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
      <View style={styles.tempNav}>
        <Text>Meme Cache</Text>

      </View>
      <View style={styles.userBar}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.userPic} source={{ uri: "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg" }}/>
        <Text style={{ marginLeft: 10 }}>Meowterspace</Text>

      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>...</Text>
      </View>

      </View>
      <Image
      style={{width: 100+ "%", height: 100 }}
      source={{
        uri:
        "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
      }}
      />
      </View>
    )


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
    height: 50, 
    backgroundColor:"rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"

  },

  userPic: {
    height: 40, 
    width: 40,
    borderRadius:20
  }
});