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
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

var win = require('Dimensions').get('window');

var MineBaoJia = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*topView*/}
                <View style={styles.topViewStyle}>
                    <TouchableOpacity onPress={()=>this.popToBack()}>
                        <View style={{width:50,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:24}}>{'<'}</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{color:'rgba(88,81,98,1.0)',fontSize:18,}}>车保赢</Text>
                    </View>
                    <View style={{width:50,justifyContent:'center',alignItems:'center'}}>
                        <Text>&nbsp;</Text>
                    </View>
                </View>

                {/*切换搜索*/}
                <View style={[styles.shadowStyle,{backgroundColor:'white'}]}>
                    {/*切换*/}
                    <View style={[styles.bottomCellStyle,styles.borderBottomStyle]}>
                        <View style={styles.borderBottomBlueStyle}>
                            <Text style={{color:'rgba(48,166,243,1.0)',fontWeight:'bold'}}>
                                待提交
                            </Text>
                        </View>
                        <View style={styles.borderBottomBlueStyleNone}>
                            <Text style={{color:'rgba(88,81,98,1.0)',}}>已提交</Text>
                        </View>
                        <View style={styles.borderBottomBlueStyleNone}>
                            <Text style={{color:'rgba(88,81,98,1.0)',}}>已完成</Text>
                        </View>
                        <View style={styles.borderBottomBlueStyleNone}>
                            <Text style={{color:'rgba(88,81,98,1.0)',}}>全部</Text>
                        </View>
                    </View>
                    {/*搜索*/}
                    <View style={[styles.bottomCellStyle]}>
                        <TouchableOpacity>
                            <Image source={require('../Images/mine_search.png')}
                                   style={{width:16,height:16,marginLeft:20}}/>
                        </TouchableOpacity>
                        <TextInput placeholder={'输入车牌号或者车型搜索'}
                                   style={{width:win.width-56,fontSize:14}}/>
                    </View>
                </View>

                {/*报价列表*/}
                <View style={{width:win.width
                    ,height:win.height-66, marginTop:5}}>
                    {this.renderContentInfo('沪A925E1','奔驰BENZ B200','询价时间:2017-06-01 15:25:20'
                        ,'￥7584.78','正在报价中','待确认投保',)}
                    {this.renderContentInfo('苏F23456','大众DHW7182FRASE轿车','询价时间:2017-06-22 16:12:33'
                        ,'￥2817.56','正在报价中','待确认投保')}
                </View>
            </View>
        );
    },

    renderContentInfo(license,carType,requestTime,piccPrice,pcicPrice,status){
        return(
            <View style={{alignItems:'center'}}>
                {/*内容*/}
                <TouchableOpacity>
                    <View style={[{marginLeft:20,marginRight:20,marginTop:20,backgroundColor:'white',
                        borderRadius:5, width:win.width-50},styles.shadowStyle]}>
                        <Image source={require('../Images/message_content_blue.png')}
                               style={{width:33,height:33,position:'absolute',top:-2,left:-2}}/>
                        <View style={[{marginTop:5,marginLeft:15,marginRight:15,flexDirection:'row'
                                    ,justifyContent:'space-between',alignItems:'center',height:40}
                                    ,styles.borderBottomStyle]}>
                            <Text style={{fontSize:16}}>{license}</Text>
                            <View style={{alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>{carType}</Text>
                                <Text style={{fontSize:12,color:'rgba(180,180,180,1.0)'}}>
                                    {requestTime}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.contentCellStyle,styles.borderBottomStyle]}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('../Images/baojia_picc_logo.png')}
                                       style={{width:36,height:16,marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>中国人民保险</Text>
                            </View>
                            <Text style={{fontSize:18,color:'rgba(241,16,0,1.0)',fontWeight:'bold'}}>
                                {piccPrice}
                            </Text>
                        </View>
                        <View style={[styles.contentCellStyle,styles.borderBottomStyle]}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('../Images/baojia_pcic_logo.png')}
                                       style={{width:28,height:16,marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>中国太平洋保险</Text>
                            </View><Text style={{fontSize:14,color:'rgba(48,166,243,1.0)'}}>{pcicPrice}</Text>
                        </View>
                        <View style={[styles.contentCellStyle,{paddingBottom:10,justifyContent:'space-between'}]}>
                            <Text>状态</Text>
                            <Text>{status}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },

    // 渲染组件时隐藏tabbar
    componentWillMount(){
        this.props.tabBar.hide();
    },

    // 销毁组件时显示tabbar
    componentWillUnmount(){
        this.props.tabBar.show();
    },

    popToBack(){
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.pop();
        }
    },
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor:'rgba(235,240,243,1.0)',
        height: win.height,
    },
    topViewStyle: {
        backgroundColor:'white',
        paddingTop: 20,
        height: 66,
        width: win.width,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(214,214,214,1.0)',
    },
    contentInfoStyle: {
        color:'rgba(180,180,180,1.0)',
        marginLeft: 10,
        width:win.width-40-50-70,
    },
    contentCellStyle: {
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
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
    borderBottomBlueStyle: {
        borderBottomWidth: 2,
        borderColor: 'rgba(48,166,243,1.0)',
        height: 40,
        justifyContent: 'center',
    },
    borderBottomBlueStyleNone: {
        height: 40,
        justifyContent: 'center',
    },
    bottomCellStyle: {
        flexDirection:'row',
        justifyContent:'space-around',
        height:40,
        width:win.width,
        marginLeft:15,
        marginRight:15,
        alignItems:'center',
    },
});

module.exports = MineBaoJia;
