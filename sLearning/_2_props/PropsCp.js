import React, {Component,} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class PropsCp extends React.Component {
    static defaultProps = {
        name: '张三',
        age: 28,
        back: '共产主义铁拳'
    };

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        back: PropTypes.string,

    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.props.age}</Text>
                <Text>{this.props.back}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({});
