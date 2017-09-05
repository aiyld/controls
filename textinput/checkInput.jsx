import React, { Component } from 'react';
import {PropTypes} from "prop-types";
import "./checkInput.less";

/**
 * An TextInput with Icon and check
 * 带图标检查的输入框
 */
export default class CheckInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            low: "",
            showMsg: false,
        };
        this.isTextOK = false;
        this.value = "";
    }

    componentDidMount(){

    }

    textChange(){
        let {onCheck, onChange, reg, msg} = this.props;
        let obj = {};
        this.value = this.refs.input.value;
        this.isTextOK = this.value ? true:false;

        if(onCheck){
            this.isTextOK = onCheck(this.refs.input.value);
        }

        if(reg){
            this.isTextOK = reg.test(this.refs.input.value);
        }

        obj.low = this.refs.input.value ? "low" : "";

        this.setState(obj);

        if(onChange){
            onChange(this.refs.input.value);
        }
    }

    check(){
        let {msg} = this.props;
        let result = msg && !this.isTextOK;
        if(this.state.showMsg != result){
            this.setState({showMsg: msg && !this.isTextOK});
        }
    }

    inputClick(){
        if(this.state.showMsg){
            this.setState({showMsg: false});
        }
    }

    getText(){
        return this.refs.input.value;
    }

    getTextOK(){
        return this.isTextOK;
    }

    //键盘的按击事件
    onKeyDown(event){
        let txt = this.refs.input.value;
        let e = event || window.event || arguments.callee.caller.arguments[0];
        if(this.props.onKeyDown){
            this.props.onKeyDown(e);
        }

        if(e && e.keyCode==13 && this.props.onEnter){ // enter 键
            //要做的事情
            this.props.onEnter(txt);
        }
    }

    render(){
        let {icon, corner, placeholder, type, msg} = this.props;
        let {low, showMsg} = this.state;

        let iconArea;
        if(icon){
            iconArea = <i className={icon}></i>;
        }

        let msgArea;
        if(showMsg && msg){
            msgArea = <span className="msg">{msg}</span>
        }

        return <div className={"ctrl c-ci "+corner+" "+low}>
            {iconArea}
            <input ref="input" onKeyDown={this.onKeyDown.bind(this)} onClick={this.inputClick.bind(this)} onChange={this.textChange.bind(this)} placeholder={placeholder} type={type}/>
            {msgArea}
            {this.props.children}
        </div>
    }
}

CheckInput.defaultProps = {
    corner: "",
    placeholder: "",
    type: "text",
    onEnter: null,
}
