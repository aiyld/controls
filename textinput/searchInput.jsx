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
            clickEvent(txt, e);
        }
    }

    triggleTextChanged(e){
        let onTextChange = this.props.onTextChange;

        if(onTextChange){
            onTextChange(e);
        }
    }

    render(){
        let {src, showDefaultImg} = this.props;
        if(showDefaultImg){
            src = require("../img/white_search.png");
        }

        return (
            <div className="ctrl c-si">
                <input ref="txtInput" onChange={this.triggleTextChanged.bind(this)} type="text" placeholder="搜索" className="search-input"/>
                <a className="search-btn" href="javascript:void(null)" onClick={this.triggleClick.bind(this)}>
                    <img className="ic-search" src={src}></img>
                </a>
            </div>
        );
    }
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,                 //输入提示 placeholder
    click: PropTypes.func,                         //点击事件 click event
    onTextChange: PropTypes.func,                  //文本框输入改变 Text input change
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
    src: "",
}
