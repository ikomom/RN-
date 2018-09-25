'use strict';

import React, {Component} from 'react';
import {Platform, ListView, StyleSheet, StatusBar, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';

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

class WatchControl extends Component {
    static propTypes = {
        stopWatch: PropTypes.func.isRequired,
        clearRecord: PropTypes.func.isRequired,
        startWatch: PropTypes.func.isRequired,
        addRecord: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            watchOn: false,
            startBtnText: "启动",
            startBtnColor: "#60B644",
            stopBtnText: "计次",
            underlayColor: "#fff",
        };
    }

    _startWatch = () => {
        if (!this.state.watchOn) {//true

        }
    };

    render() {
        return (
            <View>
                <View>
                    <TouchableHighlight>
                        <Text>{this.state.stopBtnText}</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight>
                        <Text>{this.state.startBtnColor}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

class WatchRecord extends Component {
    static propTypes = {
        record: PropTypes.array.isRequired,
    };

    render() {
        return(
            <View>

            </View>
        )
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render(){
        return(
            <View>
                <WatchControl stopWatch={} clearRecord={} startWatch={} addRecord={}/>
                <WatchFace sectionTime={} totalTime={}/>
                <WatchRecord record={}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({});