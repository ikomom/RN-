import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
} from 'react-native';
import MyButton from '../../compenent/Button'

let {width, height} = Dimensions.get('window');

export default class UserLogin extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '柜员登录',
        headerRight: <View/>,
        header: null,
    });

    constructor(props) {
        super(props);
        this.state = {text: '鹤龙六路'}
    }

    render() {
        return (
            <View style={styles.outside}>
                <Image source={require('../../../images/login_bg_pic.png')} style={styles.imageBackGround}/>
                <View style={styles.tImage}>
                    <Image source={require('../../../images/login_logo_pic.png')}/>
                </View>
                <View style={styles.titleName}>
                    <Image source={require('../../../images/logo_ydzy.png')}/>
                </View>
                <View style={styles.userInfoMainView}>
                    <View style={styles.userInfoView}>
                        <View style={styles.item}>
                            <Image source={require('../../../images/input_user.png')}/>
                            <TextInput
                                autoCapitalize='none'
                                maxLength={10}
                                placeholder='员工号'
                                onChangeText={(text) => this.setState({text:'password'})}
                                style={styles.input}
                                returnKeyType='next'
                                underlineColorAndroid="transparent"
                            />
                            <Image source={require('../../../images/input_lock.png')}/>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../../../images/input_key.png')} />
                            <TextInput
                                password={true}
                                placeholder='密码'
                                cantPaste={true}//禁止粘贴
                                secureTextEntry={true}
                                maxLength={10}
                                onChangeText={(text) => this.setState({text:'user'})}
                                style={styles.input}
                                returnKeyType='done'
                                underlineColorAndroid="transparent"

                            />
                        </View>
                    </View>
                    <MyButton/>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outside: {
        flex: 1,
    },
    tImage:{
        top:40,
        left: 50,
    },
    titleName:{
        alignItems:'center',
        justifyContent:'center',
        top:width*0.3,
    },
    userInfoMainView: {
        flexDirection: 'row',
        width: width,
        height: height ,
        alignItems: 'center',
        justifyContent:'center',

    },
    userInfoView: {
        // backgroundColor: '#4fffba',
      //  alignItems: 'center',
        width: width * 0.5,
    //     height: height ,
        padding: 0,
    },
    imageBackGround: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: height,
        width: width,
    },
    item: {
        width: width * 0.5,
        height:50,
        alignItems: 'center',
        flexDirection: 'row',
        // borderColor: '#688888',
        borderWidth: 1,
        borderRadius:5,
        margin: 5,

    },

    input: {
        // borderWidth: 1,
        // borderColor: '#000000',
        // borderRadius: 5,
        width: width * 0.5 - 70,
        padding: 0,
    },

});
