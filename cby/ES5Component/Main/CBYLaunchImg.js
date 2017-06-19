/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

var win = require('Dimensions').get('window');
var Main = require('../Main/CBYMain');
var Login = require('../Main/CBYLogin');

var LaunchImg = React.createClass({
    render() {
        return (
            <Image source={require('../Images/bg_main.png')}
                   style={{flex:1,width:win.width,height:win.height}}/>
        );
    },

    // 定时器\网络请求
    componentDidMount(){
        //定时:2s切换到Main
        setTimeout(()=>{
            //页面切换
            this.props.navigator.replace({
                component:Login,
            });
        },2000);
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

module.exports = LaunchImg;
