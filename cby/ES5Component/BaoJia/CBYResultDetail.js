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
    Switch
} from 'react-native';

var win = require('Dimensions').get('window');
var Submit = require('./CBYSubmit')

var ResultDetail = React.createClass({
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

                {/*detail*/}
                <ScrollView contentContainerStyle={styles.scrollViewStyle}
                            showsVerticalScrollIndicator={false}>
                    {/*佣金计算*/}
                    <Image source={require('../Images/baojia_result_detail_brokerage_back.png')}
                           style={{width: win.width,height: 206,flexDirection:'column'}}>
                        <View style={{flexDirection:'row',justifyContent: 'space-between',width:win.width
                                    ,backgroundColor:'rgba(0,0,0,0)',marginTop:30,paddingLeft:22,paddingRight:22}}>
                            <Text style={styles.detailTitleStyle}>保费金额</Text>
                            <Text style={styles.detailTitleStyle}>我的佣金</Text>
                            <Text style={styles.detailTitleStyle}>客户实付</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent: 'space-between',width:win.width
                            ,backgroundColor:'rgba(0,0,0,0)',marginTop:15,paddingLeft:15,paddingRight:15
                            , alignItems:'center'}}>
                            <Text style={styles.detailTitleStyle}>￥12738.31</Text>
                            <Text style={styles.detailTitleStyle}>+</Text>
                            <Text style={{color:'white',fontSize:24}}>￥3804.9</Text>
                            <Text style={styles.detailTitleStyle}>=</Text>
                            <Text style={styles.detailTitleStyle}>￥16543.21</Text>
                        </View>
                        <View style={{position:'absolute',bottom:15,left:win.width/2 - 72,}}>
                            <TouchableOpacity>
                                <Image source={require('../Images/baojia_result_detail_edit_back.png')}
                                       style={{width:144,height:45,justifyContent:'center'}}>
                                    <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontSize:24
                                                ,marginLeft:20}}>23.0%</Text>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </Image>

                    {/*险种*/}
                    <View style={{width:win.width,height:210,backgroundColor:'rgba(234,240,242,1.0)'}}>
                        <Image source={require('../Images/baojia_result_detail_flag.png')}
                               style={{width:30,height:30,position:'absolute',top:12,left:10,zIndex:99}}/>
                        <View style={[{width:win.width,height:200,backgroundColor:'white',position:'absolute',top:15
                                    },styles.shadowStyle]}>
                            {/*车牌*/}
                            <View style={{width:win.width,height:40,borderBottomWidth:1,marginLeft:15
                                    ,borderBottomColor:'rgba(235,240,243,1.0)',paddingLeft:30
                                    ,justifyContent:'center'}}>
                                <Text>沪ANC888</Text>
                            </View>
                            {/*titile调整险种*/}
                            <View style={{width:win.width,height:40,borderBottomWidth:1,paddingLeft:15
                                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingRight:15
                                ,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('../Images/baojia_picc_logo.png')}
                                           style={{width:30,height:15}}/>
                                    <Text style={{marginLeft:5}}>中国人保保险</Text>
                                </View>
                                <TouchableOpacity onPress={()=>(alert(win.height))}>
                                    <View style={{width:80,height:28,backgroundColor:'rgba(36,166,237,1.0)'
                                                ,borderBottomWidth:2,borderBottomColor:'rgba(22,118,190,1.0)'
                                                ,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                                        <Text style={{color:'white'}}>调整险种</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/*交强险*/}
                            <View style={{width:win.width,height:40,borderBottomWidth:1
                                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingRight:15
                                ,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <View style={{backgroundColor:'rgba(37,168,238,1.0)',width:6,height:16}}/>
                                    <Text style={{marginLeft:5,color:'rgba(88,81,98,1.0)'}}>交强险</Text>
                                </View>
                                <Text>￥950</Text>
                            </View>
                            {/*车船税*/}
                            <View style={{width:win.width,height:40,borderBottomWidth:1
                                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingRight:15
                                ,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <View style={{backgroundColor:'rgba(37,168,238,1.0)',width:6,height:16}}/>
                                    <Text style={{marginLeft:5,color:'rgba(88,81,98,1.0)'}}>车船税</Text>
                                </View>
                                <Text>￥2400</Text>
                            </View>
                            {/*商业险*/}
                            <TouchableOpacity>
                                <View style={{width:win.width,height:40,paddingRight:15
                                    ,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <View style={{backgroundColor:'rgba(37,168,238,1.0)',width:6,height:16}}/>
                                        <Text style={{marginLeft:5,color:'rgba(88,81,98,1.0)'}}>商业险</Text>
                                        <Text style={{marginLeft:5,color:'rgba(180,180,180,1.0)'}}>(保险起期2017-07-01)</Text>
                                        <Image source={require('../Images/baojia_reslt_detail_zhankai.png')}
                                               style={{width:15,height:15,marginLeft:5}}/>
                                    </View>
                                    <Text>￥13193.21</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*爱保养*/}
                    <View style={{width:win.width,height:40,backgroundColor:'rgba(234,240,242,1.0)',marginTop:15}}>
                        <Image source={require('../Images/baojia_result_detail_flag.png')}
                               style={{width:30,height:30,position:'absolute',top:2,left:10,zIndex:99}}/>
                        <View style={[{width:win.width,height:40,backgroundColor:'white',position:'absolute',top:5}
                                    ,styles.shadowStyle]}>
                            {/*车牌*/}
                            <View style={{width:win.width,height:40,borderBottomWidth:1
                                ,borderBottomColor:'rgba(235,240,243,1.0)',paddingLeft:45,paddingRight:15
                                ,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
                                <Text>是否需要i保养</Text>
                                <Switch onTintColor={'rgba(37,168,238,1.0)'}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginLeft:15,marginTop:25}}>
                        <Text style={{fontSize:12,color:'rgba(180,180,180,1.0)'}}>!关于i保养</Text>
                    </View>

                    {/*分享*/}
                    <View style={{marginTop:20, width:win.width, alignItems:'center'}}>
                        <Text style={{fontSize:12,color:'rgba(180,180,180,1.0)'}}>可选择以下方式分享给朋友</Text>
                    </View>
                    <View style={{width:win.width,flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                        <View style={{flexDirection:'column',alignItems:'center'}}>
                            <TouchableOpacity>
                                <Image source={require('../Images/baojia_result_detail_message.png')}
                                       style={{width:38,height:38,marginBottom:10}}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:12,color:'rgba(88,81,98,1.0)'}}>短信分享</Text>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'center'}}>
                            <TouchableOpacity>
                                <Image source={require('../Images/baojia_result_detail_message.png')}
                                       style={{width:38,height:38,marginBottom:10}}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:12,color:'rgba(88,81,98,1.0)'}}>微信分享</Text>
                        </View>
                    </View>
                </ScrollView>

                {/*bottom*/}
                <View style={{flexDirection:'row'}}>
                    <View style={{width:win.width/3,backgroundColor:'white',flexDirection:'column'
                                ,justifyContent:'center'}}>
                        <Text style={{fontSize:12,color:'rgba(88,81,98,1.0)',marginLeft:5}}>实付保费</Text>
                        <View style={{width:win.width/3,height:30, justifyContent:'center'}}>
                            <Text style={{fontSize:20,color:'rgba(241,16,0,1.0)'}}>￥16543.21</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>this.pushToNext()}>
                        <View style={{width:win.width*2/3,height:60,backgroundColor:'rgba(42,148,233,1.0)'
                            ,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white',fontWeight: 'bold',fontSize: 16}}>投&nbsp;&nbsp;保</Text>
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
                component: Submit,
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
        backgroundColor: 'white',
    },
    scrollViewStyle: {
        height:670,
        backgroundColor: 'rgba(234,240,242,1.0)',
    },
    detailTitleStyle: {
        color: 'white',
    },
    shadowStyle : {
        shadowColor:'black',
        shadowOffset:{width:0,height:0.5},
        shadowOpacity:0.6,
    },
});

module.exports = ResultDetail;
