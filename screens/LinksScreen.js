// import React from 'react';
// import { FlatList, StyleSheet, View, Text } from 'react-native';

// export default class LinksScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Public',
//   };

//   render() {
//     return (
//       <FlatList style={styles.container}>
//         <View> <Text>My Instagram Clone</Text></View>
        
//       </FlatList>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });



import React, { Component } from 'react';
import { View, Text, Stylesheet, Image } from 'react-native';


export default class InstaClone extends React.Component {
static navigationOptions = {
  title: 'Public',
};

    render() {
        return(
            <View>

            <Text>My Instagram Clone</Text>
            <InstaClone />
            </View>

        )
    }
}
