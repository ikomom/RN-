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

import Student from './Student'
import SubStudent from './SubStudent'

 export default class Test extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.stu = new Student("梨花", "女", 18);
        this.subStu = new SubStudent();
    }

    render() {
        return (
            <View>
                <Text
                    onPress={() => {}}
                >{this.stu.getStudentInfo()}</Text>

                <Text
                    onPress={() => {}}
                >{this.subStu.getStudentInfo()}</Text>

            </View>
        );
    }
}