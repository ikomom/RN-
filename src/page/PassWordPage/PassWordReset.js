import React, {Component} from "react";
import {
    Platform,
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TextInput,
    Switch,
    NativeModules,
    TouchableOpacity,
    Button,
    ImageBackground,
} from "react-native";
import CommonConfigs from "../../utils/Styles"

export default class PassWordReset extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {}
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    source={require('../../../images/ht_pad_bg_pic.png')}
                    style={styles.backImage}
                >
                    <View style={styles.centerView}>
                        <View style={styles.frontView}>
                            <Image source={require('../../../images/choose_yw_pic.png')}/>
                            <Text>您已成功办理业务</Text>
                        </View>
                        <View style={styles.mainText}>
                            <Text>您的申请等待生效中，生效后我们会尽快与您取得联系，感谢使用</Text>
                        </View>
                        <View style={styles.newButton}>
                            <Button
                                title={"开始新业务"}
                                onPress={() => alert("ok")}
                            />
                        </View>
                    </View>

                </ImageBackground>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    backImage:{
        width: CommonConfigs.SWidth,
        height: CommonConfigs.SHeight,
        alignItems: 'center',
        justifyContent: 'center',
        // absolute: '',
    },
    centerView: {
        alignItems: 'center',
        width:150,
        height:120,
        backgroundColor:CommonConfigs.ColorWhite,
    },
    frontView: {
        flexDirection: 'row',
       // width: 0.8 * CommonConfigs.SWidth,
        backgroundColor: CommonConfigs.ColorTransparent,
    },
    mainText: {
        backgroundColor: CommonConfigs.ColorTransparent,
    },
    newButton: {
    },
});