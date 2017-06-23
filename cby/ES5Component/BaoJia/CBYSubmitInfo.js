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

module.exports = SubmitInfo;
