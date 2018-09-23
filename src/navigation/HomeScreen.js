import React, {Component} from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet,
    ScrollView,

} from 'react-native'
import ButtonC from '../compenent/ButtonC'
import LifeTest from '../page/LifeTest'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',


    };

    _jumpto = () => {
        console.log("UserLogin");
        this.props.navigation.navigate('UserLogin');
    };

    render() {
        const {navigate} = this.props.navigation;
        let user = {'name': 'zy', age: 18};
        return (
            <ScrollView style={styles.out}>
                <Button
                    title="测试navigate传值（props）"
                    style={styles.button1}
                    onPress={() =>
                        navigate('Mine', {user: user})
                    }
                />

                <Button
                    title="UserLogin"
                    onPress={() => this._jumpto()}
                />
                <Button
                    title="TestLogin"
                    onPress={() =>navigate('TestLogin') }
                />

                <ButtonC
                    btnName='自己封装的button'
                    btnStyle={{width: 200, height: 30, backgroundColor: 'green'}}
                    onPress={() => this._jumpto()}
                    TextStyles={{color:'#e00000', fontSize:25,}}
                />
                <Button
                    title="生命周期"
                    onPress={() => navigate('lifeTest',{user: user})}
                />
                <Button
                    title="FastList"
                    onPress={() => navigate('MyFlatList')}
                />
                <Button
                    title="MySectionList"
                    onPress={() => navigate('MySectionList')}
                />

                <Button
                    title="FetchTest"
                    onPress={() => navigate('FetchTest')}
                />

                <Button
                    title="子组件向父组件通信设置"
                    onPress={() => navigate('CommutiesTest')}
                />


                <Button
                    title="城市信息列表"
                    onPress={() => navigate('UserSection')}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    out: {
        padding: 10,
    },
    button1:{
        borderRadius:8,
    },
});
