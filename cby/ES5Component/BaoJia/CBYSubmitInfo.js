/**
 * Created by zhangfei on 17/6/20.
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
var Result = require('./CBYResult');

var SubmitInfo = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.topViewStyle,styles.borderBottomStyle]}>
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

                <View style={styles.shadowStyle}>
                    {/*提示文字*/}
                    <View style={{flexDirection:'column', width:win.width, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:34, color:'rgba(42,148,233,1.0)', marginTop:40}}>
                            您的订单已提交
                        </Text>
                        <Text style={{fontSize:16, color:'rgba(165,165,165,1.0)', marginTop:15}}>
                            内勤正在处理中，很快就可以进行支付！
                        </Text>
                    </View>
                    {/*背景图片*/}
                    <View style={{marginTop:25,backgroundColor:'rgba(0,0,0,0)'}}>
                        <Image source={require('../Images/baojia_submitinfo_back.png')}
                               style={{width:win.width,height:364}}>
                            <View style={{flexDirection:'column',position:'absolute',left:50,bottom:0
                                        ,height:120,width:win.width-50,paddingRight:15}}>
                                <View style={[{flexDirection:'column',height:60,justifyContent:'center'}
                                            ,styles.borderBottomStyle]}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>沪ANC888</Text>
                                        <Text>野马87654321</Text>
                                    </View>
                                    <Text style={{color:'rgba(165,165,165,1.0)',fontSize:13,marginTop:5}}>
                                        订单提交时间:2017-07-01 17:30:30
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row', alignItems:'center',height:60}}>
                                    <Image source={require('../Images/baojia_picc_logo.png')}
                                           style={{width:38,height:19}}/>
                                    <Text style={{marginLeft:5}}>中国人民保险</Text>
                                    <View style={{flexDirection:'column',position:'absolute',right:0,width:130
                                        ,justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{fontSize:22,color:'rgba(241,16,0,1.0)'}}>￥16543.21</Text>
                                        <Text style={{fontSize:14,color:'rgba(61,61,61,1.0)'}}>我的佣金:￥3804.9</Text>
                                    </View>
                                </View>
                            </View>
                        </Image>
                    </View>
                </View>

                <View style={{position:'absolute', bottom:0}}>
                    <TouchableOpacity onPress={()=>this.popToRoot()}>
                        <View style={{width:win.width,height:60,backgroundColor:'rgba(42,148,233,1.0)'
                            ,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white',fontWeight: 'bold',fontSize: 16}}>我知道了！</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    popToRoot(){
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.popToTop();
        }
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
    },
    borderBottomStyle: {
        borderBottomWidth: 1,
        borderColor: 'rgba(214,214,214,1.0)',
    },
    shadowStyle : {
        shadowColor:'black',
        shadowOffset:{width:0,height:0.2},
        shadowOpacity:0.4,
    },
});

module.exports = SubmitInfo;
