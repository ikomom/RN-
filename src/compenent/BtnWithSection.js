import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SectionList
} from 'react-native';
import PropTypes from 'prop-types';

let log = console.log.bind(console);
export default class BtnWithSection extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    static propTypes = {
        sections: PropTypes.array,
        renderItem: PropTypes.func,
        callBack: PropTypes.func,
        renderSectionHeader: PropTypes.func,
    };

    render() {
        return (
            <View>
                {/*<Button title={'添加state'} onPress={this.props.callBack()}/>*/}
                <SectionList
                    sections={this.props.sections}
                    renderItem={this.props.renderItem}
                    renderSectionHeader={this.props.renderSectionHeader}
                    keyExtractor={(item, index) => index} //每行生成一个不重复的key值
                    disableVirtualization
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});
