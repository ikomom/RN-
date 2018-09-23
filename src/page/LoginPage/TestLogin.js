import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    TouchableHighlight, TouchableOpacity
} from 'react-native';

export default class TestLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
        };
    }

    customPressHandler = ()=>{
        this.refs['textInput1'].blur();
        this.refs['textInput2'].blur();

        alert('state:' + this.state.text);
    };

    render() {
        return (
            <View style={styles.userInfoMainView}>
                <View style={styles.userInfoView}>
                    <View style={styles.item}>
                        <TextInput
                            autoCapitalize='none'
                            maxLength={10}
                            placeholder='员工号'
                            onChangeText={(text) => this.setState({text:'password'})}
                            style={styles.input}
                            returnKeyType='next'
                            ref="textInput1"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.item}>
                        <TextInput
                            password={true}
                            placeholder='密码'
                            cantPaste={true}//禁止粘贴
                            secureTextEntry={true}
                            maxLength={10}
                            onChangeText={(text) => this.setState({text:'user'})}
                            style={styles.input}
                            returnKeyType='done'
                            ref="textInput2"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.customPressHandler.bind(this)}
                >
                    <Image source={require('../../../images/btn-login.png')}
                           style={{width: 110, height: 110, borderRadius: 5}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outside: {
        flex: 1,
    },
    titleName:{
    },
    userInfoMainView: {
        padding: 10,
    },
    userInfoView: {
    },
    item: {
        padding: 5,
    },

    input: {
        borderColor:'#000000',
        borderWidth: 1,
        borderRadius:5

    },

});
