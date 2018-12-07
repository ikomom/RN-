import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';
import BtnWithSection from "./BtnWithSection";
let textColor = {color: 'black'};
let textWhite = {color: 'green'};

export default class MySectionList extends Component {
    // 构造
    constructor(props) {
        super(props);
        this.item = 4;
        // 初始状态
        this.state = {
            colorChoose: false,
            data: [
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                {title: "Title1", data: ["item1", "item2"]},
                {title: "Title2", data: ["item3", "item4"]},
                {title: "Title3", data: ["item5", "item6"]},
            ]
        };
    }

    _renderItem = ({item}) => {
        console.log('_renderItem', item, this.state.data)
        return (
            <TouchableHighlight
                onPress={() => {
                   this.setState({colorChoose: !this.state.colorChoose})
                }}
            >
                <Text style={this.state.colorChoose? textColor : textWhite}>{item}</Text>
            </TouchableHighlight>

        )
    };

    _callBack = () => {
        this.setState({
            data: [{title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}]
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title={'添加state'} onPress={this._callBack}/>
                {/*<SectionList*/}
                    {/*sections={this.state.data}*/}
                    {/*renderItem={this._renderItem}*/}
                    {/*renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}*/}
                    {/*keyExtractor={(item, index) => index} //每行生成一个不重复的key值*/}
                {/*/>*/}
                <BtnWithSection sections={this.state.data}
                                renderItem={this._renderItem}
                                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                                callBack={this._callBack}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
