import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

let log = console.log.bind(console);
export default class Test extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count: 0,
            text:'',
            time:'',
            show:'',
        };
    }

    render() {
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({count: this.state.count + 1})
                    }}
                    onLongPress={() => {
                        Alert.alert('警告', '是否清除计时', [
                            {
                                text: '取消', onPress: () => {
                                }, styles: 'cancel'
                            },
                            {
                                text: '确定', onPress: () => {
                                    this.setState({count: 0})
                                }
                            },
                        ])
                    }}
                >
                    <View style={styles.btn}>
                        <Text style={styles.text}>我是TouchableWithoutFeedback，单击我</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>点击了：{this.state.count}次</Text>
                <TouchableWithoutFeedback
                    disabled={this.state.waiting}
                    onPress={() => {
                        this.setState({text: '正在登录...', waiting: true});
                        setTimeout(() => {
                            this.setState({text: '网络不流畅', waiting: false})
                        }, 2000);

                    }}
                >
                    <View style={styles.btn}>
                        <Text style={styles.text}>
                            登录
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>{this.state.text}</Text>
                <TouchableWithoutFeedback
                    onPressIn={()=> {
                        this.setState({time:'触摸开始',startTime:new Date().getTime()})
                    }}
                    onPressOut={()=>{
                        this.setState({time:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
                    }}
                >
                    <View style={styles.btn}>
                        <Text style={styles.text}>
                            点击计时
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>{this.state.time}</Text>

                <TouchableHighlight
                    activeOpacity={0.7}
                    underlayColor='green'
                    style={styles.btn}
                    onHideUnderlay={() =>{
                        this.setState({shows:'衬底被隐藏'})
                    }}
                    onShowUnderlay={() =>{
                        this.setState({shows:'衬底显示'})
                    }}
                    onPress={() =>{

                    }}
                >
                    <View>
                        <Text style={styles.text}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.text}>{this.state.shows}</Text>

                <TouchableOpacity
                    activeOpacity={0.5}
                >
                    <View style={styles.btn}>
                        <Text style={styles.text}>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={() => {
                        this.setState({
                            feed:'使用的水波纹效果'
                        })
                    }}
                    background={TouchableNativeFeedback.Ripple('green',false)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.text}>
                            TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.text}>{this.state.feed}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        justifyContent: 'center'
    },
    btn: {
        borderWidth: 2,
        margin: 10
    }
});
