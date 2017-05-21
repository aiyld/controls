import React, { Component } from 'react';
import {PropTypes} from "prop-types";
import "./tab.less";

/**
 * Tab menu control 左右切换的餐单
 *
 */
export default class Tab extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return <ul className="ld ld-tab">
            <li className="active">
                <a>
                    <i className="iconfont ic-articles"></i>
                     最新
                </a>
            </li>
            <li className="">
                <a>
                    <i className="iconfont ic-feed"></i>
                     文章
                </a>
            </li>
            <li className="">
                <a>
                    <i className="iconfont ic-latestcomments"></i>
                     课件
                </a>
            </li>
            <li className="">
                <a>
                    <i className="iconfont ic-hot"></i>
                     热门
                </a>
            </li>
        </ul>
    }
}

Tab.propTypes = {
    items: PropTypes.array,                        //菜单项 menu items
                                                   //               [
                                                   //                   {
                                                   //                       src: "", string or Object,
                                                   //                   }
                                                   //               ]
    index: PropTypes.number,                       //默认选中的索引 The index of item, which is selcted by default
    onSelectChange: PropTypes.func,                //选择更改事件 Selection change event
}

Tab.defaultProps = {
    items: [],
    index: -1,
    onSelectChange: null,
}
