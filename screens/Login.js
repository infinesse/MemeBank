import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Login extends Component {
    render(){
        return (
            <View 
                style={{
                    height: 100 + "%", 
                    width: 100 + "%", 
                    flex: 1,
                    justifyContent: "center" }}>
            <Text>LOGIN PAGE</Text></View>
        );
    }
} 
export default Login;