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

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:"login 成功"}
    }

    customPressHandler = ()=>{
        alert('state:' + this.state.name);
    };

    render() {
        return (
            <View style={styles.outside}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.customPressHandler()}
                >
                    <Image source={require('../../images/btn-login.png')}
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
    button: {
        height: 110,
        width: 110,
        overflow: 'hidden',
        marginLeft: 10,
    },
});
