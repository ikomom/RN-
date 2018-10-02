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
    TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';

let log = console.log.bind(console);
export default class Test extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View>
                <Image style={styles.image} source={require('./ballon.jpg')}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:500,
        height:100,
        borderWidth: 1,
    }
});
