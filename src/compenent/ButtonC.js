import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity, Button,
} from 'react-native';
let {width, height} = Dimensions.get('window');

export default class ButtonC extends React.Component {
    static defaultProps = {
        btnName: 'Button',
        underlayColor: 'gray',
    };

    constructor(props) {
        super(props);
        this.state = {name:"成功"}
    }

    render() {
        return (
            <View style={styles.outside}>
                <TouchableOpacity
                    style={[styles.btnDefaultStyle,this.props.btnStyle,styles.center]}
                    activeOpacity={0.5}
                    underlayColor={this.props.underlayColor}
                    onPress={this.props.onPress}
                >
                    <Text style={[styles.textDefaultStyle,this.props.TextStyles]}>{this.props.btnName}</Text>
                </TouchableOpacity>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    btnDefaultStyle:{
        height:30,
        width:100,
        backgroundColor: '#ff8447',
        borderColor: '#ff8447',
        borderRadius: 5,
    },
    textDefaultStyle:{
        color:'#ffffff',
        fontSize:15,
    },
});