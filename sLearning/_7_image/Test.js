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
                <Image
                    style={styles.image}
                    source={require('./ballon.jpg')}
                    resizeMode={'center'}
                />
                <Image
                    style={styles.image}
                    source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538535617091&di=9583edcd9848d5a28ff7205c63a97cac&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fb05012339577bb690dce86e0b596adb3fa4057fd.jpg'}}
                    resizeMode={'center'}
                />

                <Image
                    style={styles.image}
                    source={{uri:'ballon'}}
                    resizeMode={'center'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:200,
        height:150,
        borderWidth: 5,
        borderColor: 'red',
        // tintColor: 'green'
    }
});
