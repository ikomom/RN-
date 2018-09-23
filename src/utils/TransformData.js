import React, {Component} from 'react';

class TransformData{
    /**
     * cityInfos
     * @returns {Promise<void>}
     */
    async getCityInfo(){
        let data = await require('../data/city.json');
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
}

export default new TransformData();