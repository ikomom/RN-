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

/**
 * 1. ES6
 * 有状态，可以使用this
 * 属性定义在父组件this中，子组件插入父组件，this也指向父组件的this
 */
export default class HelloComponent extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View>
                <Text
                    onPress={() => {}}
                >hello 组件 es6 {this.props.name}</Text>
            </View>
        );
    }
}

/**
 * 2. ES5
 */
// var HelloComponent = React.createClass({
//     render() {
//         return (
//             <View>
//                 <Text
//                     onPress={() => {
//                     }}
//                 >hello 组件 es5</Text>
//             </View>
//         );
//     }
// });
// module.exports = HelloComponent;//导出

/**
 * 3. 函数式
 * 无状态(state)，不能使用this
 */

// function HelloComponent(props) {
//     return  <Text onPress={() => {}}>hello 组件 function {props.name}</Text>;
// }
// module.exports = HelloComponent;//导出
