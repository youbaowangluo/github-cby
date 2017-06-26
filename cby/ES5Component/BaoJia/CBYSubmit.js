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
    ScrollView,
    Switch,
    TextInput
} from 'react-native';

var win = require('Dimensions').get('window');
var SubmitInfo= require('./CBYSubmitInfo');

var Submit = React.createClass({
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
                        <Text>&nbsp;</Text>
                    </View>
                </View>

                {/*detail*/}
                <ScrollView contentContainerStyle={styles.scrollViewStyle}
                            showsVerticalScrollIndicator={false}>
                    {/*信息*/}
                    <View style={{width:win.width,height:175,backgroundColor:'rgba(234,240,242,1.0)'}}>
                        <Image source={require('../Images/baojia_result_detail_flag.png')}
                               style={{width:30,height:30,position:'absolute',top:12,left:10,zIndex:99}}/>
                        <View style={[{width:win.width,backgroundColor:'white',position:'absolute',top:15
                        },styles.shadowStyle]}>
                            {/*车牌*/}
                            <View style={{width:win.width,height:40,borderBottomWidth:1,marginLeft:15
                                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingLeft:30
                                ,justifyContent:'center'}}>
                                <Text>车主信息</Text>
                            </View>
                            {/*姓名*/}
                            <View style={{width:win.width,height:40,borderBottomWidth:1,paddingLeft:15
                                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingRight:15
                                ,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text>姓名</Text>
                                </View>
                                <Text>张三</Text>
                            </View>
                            {/*证件类型*/}
                            {this.renderCellInfo('证件类型','身份证 >')}
                            {/*证件号码*/}
                            {this.renderCellInfo('证件号码','请填写证件号码')}
                        </View>
                    </View>

                    {/*投保人*/}
                    {this.renderPersonInfo('投保人','支付保险费的人','同车主信息')}

                    {/*被保人*/}
                    {this.renderPersonInfo('被保人','申请理赔并获得理赔金的人','同车主信息')}

                    {/*受益人*/}
                    {this.renderPersonInfo('受益人','贷款车受益人为银行或金融公司','同车主信息')}

                    {/*配送信息*/}
                    <View style={{width:win.width,height:285,backgroundColor:'rgba(234,240,242,1.0)',marginTop:15}}>
                        <Image source={require('../Images/baojia_result_detail_flag.png')}
                               style={{width:30,height:30,position:'absolute',top:2,left:10,zIndex:99}}/>
                        <View style={[{width:win.width,backgroundColor:'white',position:'absolute',top:5
                        },styles.shadowStyle]}>
                            <View style={{width:win.width,height:40,borderBottomWidth:1,marginLeft:15
                                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingLeft:30
                                ,justifyContent:'center'}}>
                                <Text>配送信息</Text>
                            </View>
                            {/*收件人*/}
                            {this.renderCellInfo('收件人','请填写收件人姓名')}
                            {/*联系方式*/}
                            {this.renderCellInfo('联系方式','请填写收件人联系方式')}
                            {/*配送区域*/}
                            {this.renderCellInfo('配送区域','上海市 上海市 >')}
                            {/*详细地址*/}
                            {this.renderCellInfo('详细地址','请填写详细地址')}
                            {/*配送时间*/}
                            {this.renderCellInfo('配送时间','请选择配送时间 >')}
                            {/*备注信息*/}
                            {this.renderCellInfo('备注信息','请填写详细信息')}
                        </View>
                    </View>

                    {/*支付方式*/}
                    <View style={{marginTop:15,marginLeft:15}}>
                        <Text style={{fontSize:12}}>支付方式</Text>
                    </View>
                    <View style={[{marginTop:20},styles.shadowStyle]}>
                        {/*线上支付*/}
                        {this.renderPayInfo('线上支付','支付服务由快钱提供，无需开通网银')}
                        {/*线下支付*/}
                        {this.renderPayInfo('线下支付','可上门提供银行卡或现金支付')}
                        {/*佣金支付*/}
                        {this.renderPayInfo('佣金支付','可选择您的佣金支付')}
                    </View>

                </ScrollView>
                {/*bottom*/}
                <View>
                    <TouchableOpacity onPress={()=>{this.pushToNext()}}>
                        <View style={{width:win.width,height:60,backgroundColor:'rgba(42,148,233,1.0)'
                            ,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontWeight: 'bold',fontSize: 16}}>提交订单</Text>
                        </View>
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
                component: SubmitInfo,
                passProps:{
                    tabBar: {
                        hide: () => this.props.tabBar.hide(),
                        show: () => this.props.tabBar.show()
                    }
                }
            })
        }
    },

    renderPersonInfo(title, subtitle, info){
        return(
            <View style={[{width:win.width,height:50,backgroundColor:'white',marginTop:20
                ,flexDirection:'row',justifyContent:'space-between', alignItems:'center'}
                ,styles.shadowStyle]}>
                <View style={{flexDirection:'column',paddingLeft:15}}>
                    <Text style={{height:20}}>{title}</Text>
                    <Text style={{fontSize:12,color:'rgba(180,180,180,1.0)'}}>{subtitle}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingRight:15}}>
                    <Text>{info}</Text>
                    <Image source={require('../Images/sel_check.png')} style={{width:20,height:20}}/>
                </View>
            </View>
        );
    },

    renderCellInfo(title,name){
        return(
            <View style={{width:win.width,height:40,borderBottomWidth:1
                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingRight:15
                ,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{backgroundColor:'rgba(37,168,238,1.0)',width:6,height:16}}/>
                    <Text style={{marginLeft:5}}>{title}</Text>
                </View>
                <Text style={{color:'rgba(180,180,180,1.0)'}}>{name}</Text>
            </View>
        );
    },

    renderPayInfo(title,subtitle){
        return(
            <View style={{flexDirection:'row',alignItems:'center',width:win.width,height:50
                ,backgroundColor:'white',justifyContent:'space-between',}}>
                <View style={{flexDirection:'column',paddingLeft:15}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../Images/baojia_submit_offlinepay.png')} style={{width:20,height:18}}/>
                        <Text style={{height:20,marginLeft:10}}>{title}</Text>
                    </View>
                    <Text style={{fontSize:12,color:'rgba(180,180,180,1.0)',marginLeft:30}}>
                        {subtitle}
                    </Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingRight:15}}>
                    <Text></Text>
                    <Image source={require('../Images/sel_check.png')} style={{width:20,height:20}}/>
                </View>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: win.height,
        backgroundColor:'rgba(234,240,242,1.0)'
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
    scrollViewStyle: {
        height: 900,
        backgroundColor: 'rgba(234,240,242,1.0)',
    },
    detailTitleStyle: {
        color: 'white',
    },
    shadowStyle : {
        shadowColor:'black',
        shadowOffset:{width:0,height:0.2},
        shadowOpacity:0.4,
    },
});

module.exports = Submit;
