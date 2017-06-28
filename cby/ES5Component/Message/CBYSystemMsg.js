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
    Image
} from 'react-native';

var win = require('Dimensions').get('window');

var SystemMsg = React.createClass({
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

                <View style={{backgroundColor:'rgba(235,240,243,1.0)', width:win.width
                            ,height:win.height-66}}>
                    {this.renderContentInfo('17:20','(7月1日)','核保'
                        ,'您于2017-07-01 17:55投保的沪ANC888的人保保险的订单已通过核保，请点击此链接查看详情')}
                    {this.renderContentInfo('昨天11:20','(6月30日)','报价'
                        ,'您于2017-06-30 12:30的沪ANC888的人民保险人工报价已成功，具体报价为16543.21元')}
                </View>
            </View>
        );
    },

    renderContentInfo(time,date,alertType,alertContent){
        return(
            <View style={{alignItems:'center'}}>
                {/*时间*/}
                <View style={{justifyContent:'center',alignItems:'center'
                    ,backgroundColor:'rgba(195,200,204,1.0)',borderRadius:5
                    ,marginTop:25,width:70, height:20}}>
                    <Text style={{color:'white',fontSize:13}}>{time}</Text>
                </View>
                {/*提醒内容*/}
                <TouchableOpacity>
                    <View style={[{marginLeft:25,marginRight:25,marginTop:25,backgroundColor:'white',
                        borderRadius:5, width:win.width-50},styles.shadowStyle]}>
                        <Image source={require('../Images/message_content_blue.png')}
                               style={{width:33,height:33,position:'absolute',top:-2,left:-2}}/>
                        <View style={{marginTop:10,marginLeft:25,marginRight:25,flexDirection:'row'}}>
                            <Text style={[{fontSize:16},styles.contentTitleStyle]}>工作提醒</Text>
                            <Text style={styles.contentInfoStyle}>{date}</Text>
                        </View>
                        <View style={styles.contentCellStyle}>
                            <Text style={styles.contentTitleStyle}>提醒类型:</Text>
                            <Text style={styles.contentInfoStyle}>{alertType}</Text>
                        </View>
                        <View style={[styles.contentCellStyle,styles.borderBottomStyle,{paddingBottom:15}]}>
                            <Text>提醒内容:</Text>
                            <Text style={styles.contentInfoStyle}>{alertContent}</Text>
                        </View>
                        <View style={[styles.contentCellStyle,{paddingBottom:10,justifyContent:'space-between'}]}>
                            <Text>详情</Text>
                            <Text style={{color:'rgba(180,180,180,1.0)'}}>{'>'}</Text>
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
        backgroundColor: 'white',
        height: win.height,
    },
    topViewStyle: {
        paddingTop: 20,
        height: 66,
        width: win.width,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(214,214,214,1.0)',
    },
    contentTitleStyle: {
        width:70,
    },
    contentInfoStyle: {
        color:'rgba(180,180,180,1.0)',
        marginLeft: 10,
        width:win.width-40-50-70,
    },
    contentCellStyle: {
        marginTop:10,
        marginLeft:25,
        marginRight:25,
        flexDirection:'row',
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
});

module.exports = SystemMsg;
