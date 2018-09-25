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
import PropTypes from 'prop-types';
import RefCp from "./RefCp";

export default class Test extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            size: 10,
        };
    }

    render() {
        return (
            <View>
                <Text
                    onPress={() => {
                        //this.refs 数组---所有有ref属性的组件集合
                        //let size = this.refs.refCp.getSize();
                        //let size = this.refs['refCp']getSize();
                        let size = this.refCp.getSize();
                        this.setState({
                            size :size,
                        })
                    }}
                    style={{fontSize: 20}}>
                    获取气球大小: {this.state.size}</Text>
                <RefCp
                   // ref="refCp"
                    ref={refCp => this.refCp = refCp}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});
