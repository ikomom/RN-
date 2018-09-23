import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    Button,
    TouchableHighlight, TouchableOpacity
} from 'react-native';

/**
 * //todo 未完成 子组件向父组件传值
 */
 class CommutiesTest extends Component {
     static defaultProps={
        name:"",
     };

    constructor(props) {
        super(props);
        this.state = {
            text: '你爸爸',
        };
    }

    _handleChangeName(nick){
        this.setState({text:nick});
    }

    render(){
        return(
           <View>
               <Text>父组件的 name：{this.state.text}</Text>
               <ChildComponent
                   onChange={(val) => {
                       this._handleChangeName(val)
                   }}
               />
           </View>
        );
    }
}

export default CommutiesTest;

export class ChildComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '我儿子',
        };
    }

    _handleChange(){
        const nick = 'Parry';
        this.setState({
            text:nick,
        });
        this.props._handleChangeName(nick);
    }

    render(){
        return(
            <View>
                <Text>子组件 name：{ this.state.text}</Text>
                <Button
                    onPress={() => this._handleChange.bind(this)}
                    title="修改名称"
                />
            </View>
        );
    }
}

