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
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

var win = require('Dimensions').get('window');
var Supplement = require('./CBYSupplement')

var BaoJia = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>
                    <Text style={{color:'rgba(88,81,98,1.0)',fontSize:18,}}>车保赢</Text>
                </View>

                <View style={[styles.shadowStyle,styles.infoStyle]}>
                    <Image source={require('../Images/adv.jpg')} style={{width:win.width,height:232}}/>
                    <View style={styles.cityViewStyle}>
                        <Text style={{color:'rgba(88,81,98,1.0)'}}>行驶城市</Text>
                        <Text style={{color:'rgba(200,200,200,1.0)'}}>上海&nbsp;></Text>
                    </View>
                    <View style={styles.cityViewStyle}>
                        <Text style={{color:'rgba(88,81,98,1.0)'}}>车牌号码</Text>
                        <View style={{flexDirection: 'row',justifyContent:'flex-end', width:250}}>
                            <TouchableOpacity>
                                <View style={{backgroundColor:'rgba(104,189,238,1.0)'
                                    ,height: 35,width:55,justifyContent:'center'
                                    ,alignItems:'center',borderRadius:10,borderWidth:1
                                    ,borderColor:'rgba(78,170,220,1.0)',marginRight:10}}>
                                    <Text style={{color:'white'}}>沪&nbsp;></Text>
                                </View>
                            </TouchableOpacity>
                            <TextInput placeholder={'请填写车牌号'}
                                       style={{width:90,fontSize:14,color:'rgba(88,81,98,1.0)',}}/>
                        </View>
                    </View>
                </View>

                <View style={{width:win.width,height:win.height-66-232-60-60-52-20,marginTop:20}}>
                    <TouchableOpacity onPress={()=>this.pushToNext()}>
                        <View style={{width:win.width-40,height:60,backgroundColor:'rgba(248,176,0,1.0)'
                            ,justifyContent:'center',alignItems:'center',marginLeft:20
                            ,borderRadius:10,borderBottomColor:'rgba(217,148,0,1.0)',borderBottomWidth:5}}>
                            <Text style={{color:'white',fontWeight: 'bold',fontSize: 16}}>立即报价</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{width: 123,height: 44, position: 'absolute', right: 0, bottom: 20}}>
                        <TouchableOpacity onPress={()=>{}}>
                            <Image source={require('../Images/big_car.png')}
                                   style={{width: 123,height: 44}}>
                                <Text style={{position: 'absolute', right:5, bottom:15, fontSize: 13
                                    , backgroundColor:'white', color: 'rgba(107,191,239,1.0)'}}>
                                    大型车入口
                                </Text>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    },

    pushToNext(){
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.push({
                name: '车保赢',
                component: Supplement,
                passProps:{
                    tabBar: {
                        hide: () => this.props.tabBar.hide(),
                        show: () => this.props.tabBar.show()
                    }
                }
            })
        }
    },
});

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(235,240,243,1.0)',
    },
    topViewStyle: {
        paddingTop: 20,
        height: 66,
        width: win.width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    cityViewStyle: {
        marginLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(235,240,243,1.0)',
        width: win.width-20,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    shadowStyle: {
        shadowColor:'black',
        shadowOffset:{width:0,height:0.2},
        shadowOpacity:0.4,
    },
    infoStyle: {
        backgroundColor: 'white',
        width: win.width,
        height: 352,
    },
});

module.exports = BaoJia;
