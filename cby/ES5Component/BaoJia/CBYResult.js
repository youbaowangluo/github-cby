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
var ResultDetail = require('./CBYResultDetail');

var Result = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*TopView*/}
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
                        <TouchableOpacity onPress={()=>{}}>
                            <Image source={require('../Images/baojia_eye_open.png')} style={{width:23,height:13}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*姓名*/}
                <View style={[styles.shadowStyle,styles.infoStyle]}>
                    {this.renderInfoCell('姓名','张三')}
                    {/*车牌号*/}
                    {this.renderInfoCell('车牌号','沪ANC888')}
                    {/*品牌型号*/}
                    {this.renderInfoCell('品牌型号','野马87654321')}
                    {/*品牌型号*/}
                    {this.renderInfoCell('新车购置价','￥400000')}
                    {/*交强险起保日期*/}
                    {this.renderInfoCell('交强险起保日期','','(点击日期修改)','2017-07-01')}
                    <View style={styles.alertInfoStyle}>
                        <Text style={{color:'rgba(180,180,180,1.0)'}}>未到期</Text>
                    </View>
                    {/*商业险起保日期*/}
                    {this.renderInfoCell('商业险起保日期','','(点击日期修改)','2017-07-01')}
                    <View style={styles.alertInfoStyle}>
                        <Text style={{color:'rgba(180,180,180,1.0)'}}>平台未获得您上年的保单信息。想获取准确报价，请您输入真实起保日期</Text>
                    </View>
                </View>

                {/*报价*/}
                <View style={[styles.resultStyle,styles.shadowStyle]}>
                    {/*picc*/}
                    <TouchableOpacity onPress={()=>this.pushToNext()}>
                        <View style={{flexDirection:'row', alignItems:'center', height:70,marginLeft:15
                                    ,borderBottomWidth:1, borderBottomColor:'rgba(235,240,243,1.0)'}}>
                            <Image source={require('../Images/baojia_brokerage_orange.png')}
                                   style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white'}}>23.0%</Text>
                            </Image>
                            <Image source={require('../Images/baojia_picc_logo.png')}
                                   style={{width:38,height:19,marginLeft:5}}/>
                            <Text style={{marginLeft:5}}>中国人民保险</Text>
                            <View style={{flexDirection:'column',position:'absolute',right:10,width:130
                                        ,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:22,color:'rgba(241,16,0,1.0)'}}>￥16543.21</Text>
                                    <Text style={{fontSize:20,color:'rgba(197,197,197,1.0)'}}>&nbsp;></Text>
                                </View>
                                <Text style={{fontSize:14,color:'rgba(61,61,61,1.0)'}}>我的佣金:￥3804.9</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/*pcic*/}
                    <View style={{flexDirection:'row',alignItems:'center',height:70,marginLeft:15}}>
                        <Image source={require('../Images/baojia_brokerage_red.png')}
                               style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white'}}>23.0%</Text>
                        </Image>
                        <Image source={require('../Images/baojia_pcic_logo.png')}
                               style={{width:38,height:19,marginLeft:5}}/>
                        <Text style={{marginLeft:5}}>中国太平洋保险</Text>
                        <View style={{flexDirection:'column',position:'absolute',right:10,width:120
                            ,justifyContent:'center', alignItems:'center'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:22,color:'rgba(241,16,0,1.0)'}}>报价失败</Text>
                                <Text style={{fontSize:20,color:'rgba(197,197,197,1.0)'}}></Text>
                            </View>
                            <TouchableOpacity>
                                <View style={{backgroundColor:'rgba(36,167,237,1.0)',justifyContent:'center'
                                    ,borderRadius:5,width:70,height:24,alignItems:'center',marginTop:5}}>
                                    <Text style={{fontSize:14,color:'white',}}>人工报价</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/*承保限制*/}
                <View style={styles.roleStyle}>
                    <Text style={{fontSize:12,color:'rgba(152,153,155,1.0)'}}>
                        *以上所有均为指导价，最终价格以核保价为准。
                    </Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:12,color:'rgba(55,162,244,1.0)',textDecorationLine:'underline'}}>
                            了解承包政策限制
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    renderInfoCell(title1, title2, title3, title4){
        return(
            <View style={styles.cellViewStyle}>
                <Text style={{color:'rgba(180,180,180,1.0)'}}>{title1}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:'rgba(180,180,180,1.0)',marginRight:10}}>{title3}</Text>
                    <Text style={{color:'rgba(88,81,98,1.0)'}}>{title2}</Text>
                    <TouchableOpacity>
                        <Text style={{color:'rgba(42,149,234,1.0)'}}>{title4}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    popToBack(){
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.pop();
        }
    },

    pushToNext(){
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.push({
                name: '车保赢',
                component: ResultDetail,
                passProps:{
                    tabBar: {
                        hide: () => this.props.tabBar.hide(),
                        show: () => this.props.tabBar.show()
                    }
                }
            })
        }
    },

    // 渲染组件时隐藏tabbar
    componentWillMount(){
        this.props.tabBar.hide();
    },
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(243,243,243,1.0)',
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
        backgroundColor: 'white',
    },
    infoStyle: {
        height:340,
        backgroundColor: 'white',
    },
    cellViewStyle: {
        marginLeft: 20,
        marginRight: 20,
        width: win.width-20,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    alertInfoStyle: {
        marginLeft: 20,
        backgroundColor: 'rgba(243,243,243,1.0)',
        borderRadius: 5,
        width: win.width-20,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    resultStyle: {
        marginTop: 20,
        width: win.width,
        height: 155,
        backgroundColor:'white',
    },
    roleStyle: {
        width: win.width,
        backgroundColor: 'rgba(235,240,243,1.0)',
        height: win.height-66-40*7-20-10-140,
        flexDirection: 'column',
        marginTop:15,
        paddingLeft:15,
    },
    shadowStyle : {
        shadowColor:'black',
        shadowOffset:{width:0,height:0.5},
        shadowOpacity:0.6,
    },
});

module.exports = Result;
