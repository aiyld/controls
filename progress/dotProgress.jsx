import React, { Component } from 'react';
import {PropTypes} from "prop-types";
import "./dotProgress.less";

/**
 * Dot progress 点阵形的水平进度条
 *
 */
export default class DotProgress extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: null,    //Should show progress 是否展示进度条
        };
    }

    componentDidMount(){

    }

    /**
     * Set to display or hide progress
     * 设置展示隐藏进度条
     */
    show(isShow){
        this.setState({isShow});
    }

    render(){
        let {isShow} = this.state;
        let {enable} = this.props;
        let loadStyle;

        if(!enable || (isShow!=null && !isShow)){
            loadStyle = {display: "none"};
        }

        return <div style={loadStyle} className="ld ld-dp">
            <div></div><div></div>
            <div></div><div></div>
            <div></div><div></div>
        </div>
    }
}

DotProgress.propTypes = {
    enable: PropTypes.bool,                // Set the default value for show or hide progress
                                           // 设置是否展示进度条的初始值
}

DotProgress.defaultProps = {
    enable: true
}