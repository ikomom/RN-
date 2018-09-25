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
import PropsCp from "./PropsCp";

export default class Test extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        let info = {name:'JOJO', age: 16, back:'黄金体验'};
        let {age} = info;
        return (
            <View>
              <PropsCp
                age={age}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
