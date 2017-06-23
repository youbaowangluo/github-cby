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
var Main = require('../Main/CBYMain');

var Message = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>
                    <Text style={{color:'rgba(88,81,98,1.0)',fontSize:18,}}>车保赢欢迎您</Text>
                </View>

                <View style={[styles.shadowStyle,{backgroundColor:'white'}]}>
                    <Image source={require('../Images/login_banner.png')} style={{width:win.width,height:232}}/>
                    <View style={styles.phoneViewStyle}>
                        <Text style={{color:'rgba(88,81,98,1.0)'}}>手机号码</Text>
                        <TextInput placeholder={'请填写您的手机号码'}
                                   style={{width:130,fontSize:14,color:'rgba(88,81,98,1.0)',
                                       marginRight:20}}/>
                    </View>
                    <View style={styles.phoneViewStyle}>
                        <Text style={{color:'rgba(88,81,98,1.0)'}}>验证码</Text>
                        <View style={{flexDirection: 'row',justifyContent:'flex-end', width:250}}>
                            <TextInput placeholder={'请填写验证码'}
                                       style={{width:90,fontSize:14,color:'rgba(88,81,98,1.0)',
                                           marginRight:20}}/>
                            <TouchableOpacity>
                                <View style={{backgroundColor:'rgba(104,189,238,1.0)'
                                    ,marginRight:20,height: 35,width:110,justifyContent:'center'
                                    , alignItems:'center',borderRadius:10,borderWidth:1
                                    ,borderColor:'rgba(78,170,220,1.0)'}}>
                                    <Text style={{color:'white'}}>获取验证码</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{width:win.width,height:win.height-66-232-60-60-15,marginTop:15}}>
                    <View style={{flexDirection:'row', alignItems:'center', paddingLeft:20}}>
                        <TouchableOpacity>
                            <Image source={require('../Images/sel_check.png')} style={{width:20,height:20}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:12,color:'rgba(152,153,155,1.0)'}}>同意车保赢</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:12,color:'rgba(55,162,244,1.0)',textDecorationLine:'underline'}}>
                                用户服务协议
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position:'absolute', bottom:0}}>
                        <TouchableOpacity onPress={()=>this.loginAction()}>
                            <View style={{width:win.width,height:60,backgroundColor:'rgba(42,148,233,1.0)'
                                    ,justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white',fontWeight: 'bold',fontSize: 16}}>登&nbsp;&nbsp;录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    },

    // 进入主页
    loginAction(){
        this.props.navigator.replace({
            component:Main,
        });
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
    phoneViewStyle: {
        marginLeft: 20,
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
        shadowOffset:{width:0,height:0.5},
        shadowOpacity:0.6,
    },
});

module.exports = Message;
