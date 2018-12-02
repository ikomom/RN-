'use strict';

import React, {Component} from 'react';
import {Platform, ListView, StyleSheet, StatusBar, Text, TouchableHighlight, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Util from './public/Utils'

class WatchFace extends Component {
    static propTypes = {
        sectionTime: PropTypes.string.isRequired,//PropTypes,类型检测，检测是否为字符串
        totalTime: PropTypes.string.isRequired, //必填
    };

    render() {
        return (
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        )
    };
}

/**
 * 按钮控制
 * 1. 复位、计次
 * 2. 启动、停止
 * 
 * 启动时才计次，停止时间后显示复位按钮
 * 复位清空下方的记录，计次填充填充记录
 */class WatchControl extends Component{
  static propTypes = {
    stopWatch:PropTypes.func.isRequired,
    clearRecord: PropTypes.func.isRequired,
    startWatch: PropTypes.func.isRequired,
    addRecord:PropTypes.func.isRequired,
  }; 

  constructor(props){
    super(props);
    this.state = {
      watchOn: false, 
      startBtnText: "启动",
      startBtnColor: "#60B644",
      stopBtnText: "计次",
      underlayColor:"#fff",
    };
  }

  _startWatch() {
    if (!this.state.watchOn) {
      this.props.startWatch()
      this.setState({
        startBtnText: "停止",
        startBtnColor: "#ff0044",
        stopBtnText: "计次",
        underlayColor:"#eee",
        watchOn: true
      })
    }else{
      this.props.stopWatch()
      this.setState({
        startBtnText: "启动",
        startBtnColor: "#60B644",
        stopBtnText: "复位",
        underlayColor:"#eee",
        watchOn: false
      })
    } 
  }

  _addRecord() {
    if (this.state.watchOn) {
      this.props.addRecord()
    }else{
      this.props.clearRecord()
      this.setState({
        stopBtnText: "计次"
      })
    }
  }

  render() {
    return(
      <View style={styles.watchControlContainer}>
        <View style={{flex:1,alignItems:"flex-start"}}>
          <TouchableHighlight style={styles.btnStop} underlayColor={this.state.underlayColor} onPress={()=>this._addRecord()}>
            <Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
          </TouchableHighlight>
          </View>
          <View style={{flex:1,alignItems:"flex-end"}}>
            <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> this._startWatch()}>
              <Text style={[styles.btnStartText,{color:this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
            </TouchableHighlight>
          </View>
      </View>
    )
  }
}

class WatchRecord extends Component {
    static propTypes = {
        record: PropTypes.array.isRequired,
    };

    componentWillReceiveProps(nextProps){
        this.setState({r:true})
    }

    _renderItem = (item) => {
        let rowData = item.item;
        console.log(item)
        return(
            <View style={styles.recordItem}  >
                <Text style={styles.recordItemTitle}>{rowData.title}</Text>
                <View style={{alignItems: "center"}}>
                <Text style={styles.recordItemTime}>{rowData.time}</Text>
                </View>
            </View>
        )
    }

    _keyExtractor = (item ,index) => {
        return '_keyExtractor' + index;
    }

    render() {
        return(
            <View style={{ backgroundColor: '#f3f3f3',}}>
                <FlatList 
                    data={this.props.record}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        
        )
    }
}
/**
 * 计时器 
 */
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime: 0,
            recordTime: 0,
            timeAccumulation: 0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        };
    }

    _addRecord = () => {
        let {recordCounter, record} = this.state;
        recordCounter++;
        if (recordCounter<8) {
          record.pop();
        }
        record.unshift({title:"计次"+recordCounter,time:this.state.sectionTime});
        this.setState({
          recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
          recordCounter: recordCounter,
          record: record
        })
        console.log(record)

        //use refs to call functions within other sub component
        //can force to update the states
        // this.refs.record._updateData();
    }
    
    _clearRecord = () => {
        this.setState({
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record:[
              {title:"",time:""},
              {title:"",time:""},
              {title:"",time:""},
              {title:"",time:""},
              {title:"",time:""},
              {title:"",time:""},
              {title:"",time:""}
            ],
           });
    }

    componentWillUnmount() {
        this._stopWatch();
        this._clearRecord();
    }
    _startWatch() {
    if (this.state.resetWatch) {
      this.setState({
        stopWatch: false,
        resetWatch: false,
        timeAccumulation:0,
        initialTime: (new Date()).getTime()
      })
    }else{
      this.setState({
        stopWatch: false,
        initialTime: (new Date()).getTime()
      })
    }
    let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime, currentTime;
    let interval = setInterval(
        () => { 
          currentTime = (new Date()).getTime()
          countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
          minute = Math.floor(countingTime/(60*1000));
          second = Math.floor((countingTime-60000*minute)/1000);
          milSecond = Math.floor((countingTime%1000)/10);
          seccountingTime = countingTime - this.state.recordTime;
          secminute = Math.floor(seccountingTime/(60*1000));
          secsecond = Math.floor((seccountingTime-60000*secminute)/1000);
          secmilSecond = Math.floor((seccountingTime%1000)/10);
          this.setState({
            currentTime:currentTime,
            totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
            sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
          })
          if (this.state.stopWatch) {
            this.setState({
              timeAccumulation: countingTime 
            })
            clearInterval(interval)
          };
        },40);
  }


    _stopWatch = () => {
        this.setState({stopWatch: true})
    }

    render(){
        return(
            <View>
                {/* 计数器时间显示 */}
                <WatchFace sectionTime={this.state.totalTime} totalTime={this.state.sectionTime}/>
                {/* 计数器控制 */}
                <WatchControl 
                    stopWatch={()=>this._stopWatch()} 
                    clearRecord={()=>this._clearRecord()} 
                    startWatch={()=>this._startWatch()}
                    addRecord={()=>this._addRecord()}/>
                {/* 历史计数 */}
                <WatchRecord record={this.state.record}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    watchFaceContainer:{
        width: Util.size.width,
        paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
        backgroundColor: "#fff",
        borderBottomWidth: 1, borderBottomColor:"#ddd",
        height: 170,
    },
    sectionTime:{
        fontSize: 20,
        fontWeight:"100",
        paddingRight: 30,
        color: "#555",
        position:"absolute",
        left: Util.size.width-160,
        top:30
    },
    totalTime:{
        fontSize: Util.size.width === 375? 70:60,
        fontWeight: "100",
        color: "#222",
        paddingLeft:20,
        left: 30,
    },
    watchControlContainer:{
        width: Util.size.width,
        height: 100,
        flexDirection:"row",
        backgroundColor: '#f3f3f3',
        paddingTop: 30, paddingLeft: 60, paddingRight:60, paddingBottom:0,
    },
    btnStart:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    btnStop:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    btnStartText:{
        fontSize:14,
        backgroundColor:"transparent"
      },
    btnStopText:{
        fontSize:14,
        backgroundColor:"transparent",
        color:"#555"
    },
    recordList:{
        width: Util.size.width,
        height: Util.size.height - 300,
        paddingLeft: 15,
    },
    recordItem:{
        height: 50,
        borderBottomWidth:Util.pixel, borderBottomColor:"#bbb",
        paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
        flexDirection:"row",
        alignItems:"center"
      },
    recordItemTitle:{
        backgroundColor:"transparent",
        flex:1,
        textAlign:"left",
        paddingLeft:20,
        color:"#777"
    },
    recordItemTime:{
        backgroundColor:"transparent",
        flex:1,
        textAlign:"right",
        paddingRight:20,
        color:"#222"
    },
});