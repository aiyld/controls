import React, { Component } from 'react';
import {PropTypes} from "prop-types";
import "./searchInput.less";

/**
 * An TextInput with button
 * 有按钮的输入框
 */
export default class SearchInput extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    /**
     * 点击事件 Click Event
     */
    triggleClick(e){
        let clickEvent = this.props.click;
        let txt = this.refs.txtInput.value;

        if(clickEvent){
            if(this.props.clearThen){
                this.refs.txtInput.value = "";
            }
            clickEvent(txt, e);
        }
    }

    triggleTextChanged(e){
        let onTextChange = this.props.onTextChange;

        if(onTextChange){
            onTextChange(e);
        }
    }

    getValue() {
        return this.refs.txtInput.value;
    }

    //键盘的按击事件
    onKeyDown(event){
        let txt = this.refs.txtInput.value;
        let e = event || window.event || arguments.callee.caller.arguments[0];
        if(this.props.onKeyDown){
            this.props.onKeyDown(e);
        }

        if(e && e.keyCode==13){ // enter 键
            //要做的事情
            this.triggleClick(txt);
        }
    }

    render(){
        return (
            <div className="ctrl c-si">
                <input onKeyDown={this.onKeyDown.bind(this)} ref="txtInput" onChange={this.triggleTextChanged.bind(this)} type="text" placeholder={this.props.placeholder} className="search-input"/>
                <a className="search-btn" href="javascript:void(null)" onClick={this.triggleClick.bind(this)}>
                    <i className="iconfont icon-sousuo"></i>
                </a>
            </div>
        );
    }
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,                 //输入提示 placeholder
    click: PropTypes.func,                         //点击事件 click event
    onTextChange: PropTypes.func,                  //文本框输入改变 Text input change
    onKeyDown: PropTypes.func,                     //键盘事件
    clearThen: PropTypes.bool,                     //是否清除输入
    showDefaultImg: PropTypes.bool,                //显示默认的图标 Indicate if need to show default img
    src: PropTypes.oneOfType([                     //图片路径 Button img src
        PropTypes.string,
        PropTypes.object,
    ]),
}

SearchInput.defaultProps = {
    placeholder: "搜索",
    click: null,
    onTextChange: null,
    showDefaultImg: false,
    clearThen: false,
    src: "",
}
