import React from 'react';
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

export default class RefCp extends React.Component {
    state = {//也可以定义到外面
        size: 60,
    };

    getSize(){
        return this.state.size
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        // this.state = {
        //  //   size: 80,
        // };
    }

    render() {
        return (
            <View>
                <Text
                    style={styles.text}
                    onPress={() => this.setState({
                        size: 60,
                    })}>重置</Text>
                <Text
                    style={styles.text}
                    onPress={() => this.setState({
                        size: this.state.size + 10,
                    })}>吹气</Text>
                <Image source={require('./ballon.jpg')} style={{width: this.state.size, height: this.state.size}}/>
                <Text
                    style={styles.text}
                    onPress={() => this.setState({
                        size: this.state.size - 10,
                    })}>放气</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
});
