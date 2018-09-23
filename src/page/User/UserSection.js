import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import TransformData from "../../utils/TransformData";



export default class UserSection extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [],
            sections: [],
            sectionSize: [],
        };
    }

    componentDidMount() {
        console.log("加载数据");
        this.getCityInfo()

    }

    async getCityInfo(){
        let data = await require('../../data/city.json');
        let jsonData = data.data;
        //
        let totalSize = 0;
        //SectionList的数据源
        let cityInfos = [];
        //title的数据集合
        let citySection = [];
        //每一项城市信息的长度
        let citySectionSize = [];

        for (let i = 0; i < jsonData.length; i++) {
            citySectionSize[i] = totalSize;
            //给右侧的滚动条进行使用的
            citySection[i] = jsonData[i].title;

            let section = {};
            section.title = jsonData[i].title;
            section.data = jsonData[i].city;
            for (let j = 0; j < section.data.length; j++) {
                section.data[j].key = j
            }
            cityInfos[i] = section;
            //每一项的header的index
            totalSize += section.data.length + 1;
        }

        console.log("======================================");
        this.setState({data: cityInfos, sections: citySection, sectionSize: citySectionSize})
    }


render() {
        return (
            <View style={styles.container}>
                {/*<SectionList*/}
                    {/*ref='list'*/}
                    {/*sections={this.state.data}*/}
                    {/*renderItem={({item}) => <Text style={styles.item}>{item}</Text>}*/}
                    {/*renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}*/}
                  {/*//  keyExtractor={(item, index) => index} //每行生成一个不重复的key值*/}
                {/*/>*/}
                <Text>成功</Text>
                {console.log(this.state.data)}
                {console.log(this.state.sections)}
                {console.log(this.state.sectionSize)}
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
