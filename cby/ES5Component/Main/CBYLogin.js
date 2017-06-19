/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var win = require('Dimensions').get('window');

var Message = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>
                    <Text style={{color:'rgba(88,81,98,1.0)',fontSize:18,}}>车保赢欢迎您</Text>
                </View>
                <Image source={require('../Images/login_banner.png')} style={{width:win.width,height:232}}/>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    topViewStyle: {
        paddingTop: 20,
        height: 66,
        width: win.width,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = Message;
