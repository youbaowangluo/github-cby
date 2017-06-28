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
    TouchableOpacity
} from 'react-native';

var win = require('Dimensions').get('window');
var MineBaoJia = require('./CBYMineBaoJia')

var Mine = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*topView*/}
                <View>
                    <Image source={require('../Images/mine_head_back.png')}
                           style={styles.headBackStyle}>
                        <View style={{backgroundColor:'rgba(0,0,0,0)',paddingTop: 20,height: 66
                            ,width: win.width,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:18}}>
                                车保赢
                            </Text>
                        </View>
                        {/*头像*/}
                        <TouchableOpacity>
                            <Image source={require('../Images/mine_head.png')}
                                style={{width:62,height:62}}/>
                        </TouchableOpacity>
                        <View style={{backgroundColor:'rgba(0,0,0,0)',height:40
                            ,width: win.width,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:18}}>
                                张三
                            </Text>
                        </View>
                        <View style={{backgroundColor:'rgba(251,174,0,1.0)',height:20
                            ,width: 100,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                            <Text style={{color:'white',fontSize:12}}>
                                13888888888
                            </Text>
                        </View>
                        <View style={{width:win.width,height:287-66-62-40-20,backgroundColor:'rgba(0,0,0,0)'
                                ,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <View style={{width:win.width/2,justifyContent:'center',alignItems:'center'
                                    ,borderRightWidth:1,borderRightColor:'white'}}>
                                <Text style={{fontSize:24,color:'rgba(245,87,52,1.0)',fontWeight:'bold'}}>
                                    ￥5000.00
                                </Text>
                                <Text style={{color:'white',fontSize:12}}>可提现佣金</Text>
                            </View>
                            <View style={{width:win.width/2,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:24,color:'rgba(100,205,0,1.0)',fontWeight:'bold'}}>
                                    ￥2000.00
                                </Text>
                                <Text style={{color:'white',fontSize:12}}>已提现佣金</Text>
                            </View>
                        </View>
                    </Image>
                </View>

                {/*bottomview*/}
                <View style={[styles.shadowStyle,{backgroundColor:'white'}]}>
                    {/*我的报价*/}
                    <TouchableOpacity onPress={()=>this.pushToNext()}>
                        <View style={[styles.bottomCellStyle,styles.borderBottomStyle]}>
                            <Text style={{color:'rgba(88,81,98,1.0)',}}>我的报价</Text>
                            <Text style={{color:'rgba(200,200,200,1.0)'}}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                    {/*佣金明细*/}
                    <TouchableOpacity>
                        <View style={[styles.bottomCellStyle]}>
                            <Text style={{color:'rgba(88,81,98,1.0)',}}>佣金明细</Text>
                            <Text style={{color:'rgba(200,200,200,1.0)'}}>{'>'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    pushToNext(){
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.push({
                name: '车保赢',
                component: MineBaoJia,
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
        backgroundColor: 'rgba(235,240,243,1.0)',
        height:win.height,
    },
    headBackStyle: {
        height:287,
        width:win.width,
        alignItems: 'center',
    },
    shadowStyle : {
        shadowColor:'black',
        shadowOffset:{width:0,height:0.2},
        shadowOpacity:0.4,
    },
    borderBottomStyle: {
        borderBottomWidth: 1,
        borderColor: 'rgba(214,214,214,1.0)',
    },
    bottomCellStyle: {
        flexDirection:'row',
        justifyContent:'space-between',
        height:44,
        marginLeft:15,
        marginRight:15,
        alignItems:'center',
    },
});

module.exports = Mine;
