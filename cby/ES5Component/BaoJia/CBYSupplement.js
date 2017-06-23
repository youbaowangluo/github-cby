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

var Supplement = React.createClass({
    render() {
        return (
            <View style={styles.container}>
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

                <View style={[styles.shadowStyle,{backgroundColor:'white'}]}>
                    <View style={styles.cellViewStyle}>
                        <Image source={require('../Images/supple_gantan.png')} style={{width:100,height:20}}/>
                    </View>
                    {/*车主姓名*/}
                    {this.renderInfoCell('车主姓名','请填写车主姓名')}
                    {/*品牌型号*/}
                    {this.renderInfoCell('品牌型号','请填写品牌型号','supple_wenhao')}
                    {/*车架号码*/}
                    {this.renderInfoCell('车架号码','请填写车架号码','supple_wenhao')}
                    {/*发动机号*/}
                    {this.renderInfoCell('发动机号','请填写发动机号')}
                    {/*初登日期*/}
                    <View style={styles.cellViewStyle}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{color:'rgba(88,81,98,1.0)'}}>初登日期</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{width:115,fontSize:14,color:'rgba(200,200,200,1.0)',}}>
                                请选择初登日期&nbsp;>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{position:'absolute', bottom:0}}>
                    <TouchableOpacity onPress={()=>this.pushToNext()}>
                        <View style={{width:win.width,height:60,backgroundColor:'rgba(42,148,233,1.0)'
                            ,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white',fontWeight: 'bold',fontSize: 16}}>下一步</Text>
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
                component: Result,
                passProps:{
                    tabBar: {
                        hide: () => this.props.tabBar.hide(),
                        show: () => this.props.tabBar.show()
                    }
                }
            })
        }
    },

    popToBack(){
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.pop();
        }
    },

    renderInfoCell(title, placeholder, imageName){
        return(
            <View style={styles.cellViewStyle}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:'rgba(88,81,98,1.0)'}}>{title}</Text>
                    <Image source={{uri:imageName}} style={{width: 13,height: 13, marginLeft:5}}/>
                </View>
                <TextInput placeholder={placeholder}
                           style={{width:100,fontSize:14,color:'rgba(88,81,98,1.0)',}}/>
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
    cellViewStyle: {
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
    shadowStyle : {
        shadowColor:'black',
        shadowOffset:{width:0,height:0.5},
        shadowOpacity:0.6,
    },
});

module.exports = Supplement;
