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
        this.state = {
            selectIndex: -1,
        };
        this.onSelectChangeHandler.bind(this);
    }

    componentDidMount(){

    }

    onSelectChangeHandler(item, i){
        let {onSelectChange} = this.props;
        if(onSelectChange){
            onSelectChange(item, i);
        }

        this.setState({selectIndex: i});
    }

    render(){
        let {items, index} = this.props;
        let {selectIndex} = this.state;

        items = items || [];

        return <ul className="ld ld-tab flexshow">
            {
                items.map((val, i)=>{
                    let message, className="", curIndex, curClass="";
                    if(typeof val == "string"){
                        message = val;
                    }if(typeof val == "object"){
                        message = val.title;
                        className = val.className;
                    }

                    if(selectIndex == -1){
                        index = index || 0;
                        if(index == i){
                            curClass = "active";
                        }
                    }else if(selectIndex == i){
                        curClass = "active";
                    }

                    return <li key={i} className={curClass}
                               onClick={this.onSelectChangeHandler.bind(this, val, i)}>
                        <a>
                            <div className={"iconfont "+className}>{message}</div>
                        </a>
                    </li>
                })
            }
        </ul>
    }
}

Tab.propTypes = {
    items: PropTypes.array,                        //菜单项 menu items
                                                   //               [
                                                   //                   "",
                                                   //                   {
                                                   //                       src: "", string or Object,
                                                   //                   }
                                                   //               ]
    index: PropTypes.number,                       //默认选中的索引 The index of item, which is selcted by default
    onSelectChange: PropTypes.func,                //选择更改事件 Selection change event
}

Tab.defaultProps = {
    items: [],
    index: 0,
    onSelectChange: null,
}
