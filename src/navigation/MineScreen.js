import React,{Component}from 'react';
import {View,Text} from 'react-native'
export default class MineScreen extends React.Component {

    static navigationOptions = {
        title: 'MineScreen',
        headerLeft:<Text>back</Text>,
    };

    render() {
        const { navigate } = this.props.navigation;
        let {params} = this.props.navigation.state;

        return (
            <View>
                <Text>你的名字是 {params.user.name}</Text>
                <Text>你的年龄是 {params.user.age}</Text>
            </View>
        );
    }
}