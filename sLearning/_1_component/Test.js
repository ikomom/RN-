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
import HelloComponent from "./HelloComponent";
import * as Common from "./constExport";


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
                <HelloComponent
                    name='小孩'
                />
                <Text>{Common.name + '  =====    ' + Common.like}</Text>
                <Text>{Common.sum(1, 2)}</Text>

            </View>
        );
    }
}