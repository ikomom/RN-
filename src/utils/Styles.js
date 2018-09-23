/**
 * 公共样式 
 * @author yezm
 * @time 16:33 2018/9/7
 */
import React, {Component} from 'react';
import {
    Platform,
    Dimensions,
} from 'react-native';

const SWidth = Dimensions.get('window').width;
const SHeight = Dimensions.get('window').height;

const CommonConfigs = {
    SWidth:SWidth,
    SHeight:SHeight,
    //颜色
    ColorBlue:'#0091ff',//统一蓝
    ColorGray:'#999999',//统一灰
    ColorOrange:'#fd9800',//统一橙
    ColorWhite:'#fdffff',

    ColorTransparent:'rgba(255,255,255,0)',//透明

};

export default CommonConfigs;

