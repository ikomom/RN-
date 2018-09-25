import React, {Component} from 'react';
import {Text,TextInput,View,Button} from 'react-native'

/**
 * rn 生命周期
 * @author yezm
 * @time 12:46 2018/9/11
 */
export default class LifeTest extends React.Component{
    static navigationOptions = {
        title: 'lifeTest',
    };

    //一开始调用的方法
    //es5: getDefaultProps
    static defaultProps = {
    };

    //es5 getInitialState
    constructor(props) {
        super(props);
        console.log("constructor ====== 初始化 ======= init");
        console.log("+++++++constructor : this");
        console.log(this);
        this.state={
          name:'ikonon',
        };
        console.log("constructor ====== 初始化 ======== State加载完成");
    }



    componentWillMount (){
        console.log("componentWillMount ====== 在这里做一些业务初始化操作，也可以设置组件状态; 只被调用一次");
        console.log("+++++++componentWillMount : this");
        console.log(this);
    }

    componentDidMount(){
        console.log("componentDidMount ====== 组件绘制完毕并已经加载完成，Dom完成构建，" +
            "可以在这个方法调用网络请求、并与其它框架交互、设置定时器； 只被调用一次");
        console.log("+++++++componentDidMount : this");
        console.log(this);
    }

    componentWillReceiveProps(newProps){// nextProps 是即将被设置的属性
        console.log("componentWillReceiveProps ====== 组件收到新的props,就会调用这个方法; 属性值" + newProps);
        // this.setState({  //并不会触发额外的 render() 调用
        //     name:"pig" > "dog",
        // })
        console.log("+++++++componentWillReceiveProps : this");
        console.log(this);
    }

    shouldComponentUpdate(newProps, newState){
        console.log("shouldComponentUpdate ====== 组件接收到新的属性和状态改变的话，都会触发调用" + newProps +
            "====" + newState);
        console.log("+++++++componentWillReceiveProps : this");
        console.log(this);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
        console.log("+++++++componentWillUpdate : this");
        console.log(this);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
        console.log("+++++++componentDidUpdate : this");
        console.log(this);
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!');
        console.log("+++++++componentWillUnmount : this");
        console.log(this);
    }

    render(){
        console.log("render ======= 渲染");
        console.log("+++++++render : this");
        console.log(this);
        console.log(this.props);
        console.log("+++++++TextInput : this");

        return(
            <View>
                <Button title={'更新state'} onPress={()=>this._setNewNumber()}/>
                <Text>{this.props.name}+{this.state.name}</Text>
                <TextInput onChange={() => console.log(this.state.name)}/>
            </View>

        )
    }

    _setNewNumber() {
        this.setState({name: this.state.name+"W"})
    }

}