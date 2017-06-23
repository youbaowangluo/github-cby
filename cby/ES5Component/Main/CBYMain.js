/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform //判断运行系统

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Navigator from 'react-native-deprecated-custom-components';

var Baojia = require('../BaoJia/CBYBaoJia');
var Message = require('../Message/CBYMessage');
var Mine = require('../Mine/CBYMine');

var Main = React.createClass({
    // 初始化变量、状态机
    getInitialState(){
        return{
            selectedTab:'baojia', //默认第一个
            tabBarHeight: 52
        }
    },

    handleTabBar(state){
        this.setState({
            tabBarHeight: state ? 52 : 0
        });
    },

    render() {
        return (
            <TabNavigator
                tabBarStyle={{height: this.state.tabBarHeight, overflow: 'hidden'}}
                sceneStyle={{paddingBottom: this.state.tabBarHeight}}
            >
                {/*报价*/}
                {this.renderTabNavigatorItem('报价','tab1',
                    'tab1_selected','baojia','报价',Baojia)}
                {/*消息*/}
                {this.renderTabNavigatorItem('消息','tab2',
                    'tab2_selected','message','消息',Message,'1')}
                {/*我的*/}
                {this.renderTabNavigatorItem('我的','tab3',
                    'tab3_selected','mine','我的',Mine)}
            </TabNavigator>
        );
    },

    // TabNavigator.Item 抽取封装
    renderTabNavigatorItem(titleName,icon,selectedIcon,selectedState,routeName,component,badgeText){
        return (
            <TabNavigator.Item
                title={titleName}
                renderIcon={() => <Image
                    source={{uri:icon}}
                    style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image
                    source={{uri:selectedIcon}}
                    style={styles.iconStyle}/>}
                selected={this.state.selectedTab === selectedState}
                onPress={() => {this.setState({ selectedTab: selectedState })}}
                selectedTitleStyle = {styles.selectedTitleStyle}
                badgeText={badgeText}
            >
                <Navigator.Navigator
                    initialRoute={{
                        name:routeName,
                        component:component,
                        passProps: {
                            tabBar: {
                                hide: () => this.handleTabBar(false),
                                show: () => this.handleTabBar(true)
                            }
                        }
                    }}
                    configureScene={()=>{
                        return Navigator.Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>
                    }}
                />
            </TabNavigator.Item>
        );
    },
});

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios'?30:25,
        height: Platform.OS === 'ios'?30:25,
    },
    selectedTitleStyle: {
        color: 'rgba(88,81,98,1.0)',
    },
});

module.exports = Main;
