/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    AppRegistry
}from 'react-native';

import Navigator from 'react-native-deprecated-custom-components';

var LaunchImg = require('./ES5Component/Main/CBYLaunchImg');

var cby = React.createClass({
    render() {
        return (
            <Navigator.Navigator
                initialRoute={{name:'启动',component:LaunchImg}}
                configureScene={()=>{
                    return Navigator.Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>
                }}
            />
        );
    }
});

AppRegistry.registerComponent('cby', () => cby);
