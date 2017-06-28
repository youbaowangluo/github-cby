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
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

var SystemMsg = require('./CBYSystemMsg');
var MessageDate = require('./message.json');
var win = require('Dimensions').get('window');

var Message = React.createClass({
    // 设置初始值
    getInitialState(){
        // 1.1 设置数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 1.2 设置返回数据
        return{
            dataSource: ds.cloneWithRows(MessageDate)  // cloneWithRows 放置数组
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>
                    <Text style={{color:'rgba(88,81,98,1.0)',fontSize:18,}}>车保赢</Text>
                </View>
                <ListView contentContainerStyle={{height:675}}
                    dataSource={this.state.dataSource}  // 数据源
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    // 返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.pushToNext(rowID)}>
                <View style={styles.cellViewStyle}>
                    {/*左边的图片*/}
                    <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
                    {/*右边的View*/}
                    <View style={styles.rightViewStyle}>
                        {/*上边的Text*/}
                        <View style={{flexDirection:'row',justifyContent:'space-between', width:win.width-100}}>
                            <Text style={styles.topTitleStyle}>{rowData.title}</Text>
                            <Text style={styles.bottomTitleStyle}>{rowData.time}</Text>
                        </View>
                        {/*下边的Text*/}
                        <Text style={styles.bottomTitleStyle}>{rowData.subtitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    pushToNext(rowID){
        var navigator = this.props.navigator;
        if(navigator && rowID=='0') {
            navigator.push({
                name: '车保赢',
                component: SystemMsg,
                passProps:{
                    tabBar: {
                        hide: () => this.props.tabBar.hide(),
                        show: () => this.props.tabBar.show()
                    }
                }
            })
        } else {
            alert('点击了'+rowID+'行');
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
        borderBottomWidth: 1,
        borderColor: 'rgba(214,214,214,1.0)',
    },
    cellViewStyle:{
        padding:10,
        backgroundColor:'white',
        // 下划线
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
        // 确定主轴的方向
        flexDirection:'row',
        width:win.width,
    },
    leftImageStyle:{
        width:60,
        height:60,
        marginRight:15
    },
    rightViewStyle:{
        // 主轴的对齐方式
        justifyContent:'center'
    },
    topTitleStyle:{
        fontSize:16,
        marginBottom:5
    },
    bottomTitleStyle:{
        fontSize:12,
        color:'rgba(180,180,180,1.0)',
    }
});

module.exports = Message;
