import React, { Component } from 'react';
import {PropTypes} from "prop-types";
import "./popMenu.less";

/**
 * Popup menu 弹出菜单
 *
 */
export default class PopMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,  //是否显示弹出菜单
        }
    }

    componentDidMount(){
    }

    toggleMenu(){
        let {visible} = this.state;
        this.setState({visible: !visible});
    }

    render(){
        let pop;
        let {visible} = this.state;
        let className = "";
        if(visible){

        }

        return <div className="ld ld-pm">
            <button className="menu-btn" onClick={this.toggleMenu.bind(this)}></button>
            <div className={"pop "+className}>
                {this.props.children}
            </div>
        </div>
    }
}

PopMenu.propTypes = {
    items: PropTypes.array,                        //菜单项 menu items
                                                   //               [
                                                   //                   {
                                                   //                       src: "", string or Object,
                                                   //                   }
                                                   //               ]
    index: PropTypes.number,                       //默认选中的索引 The index of item, which is selcted by default
    onSelectChange: PropTypes.func,                //选择更改事件 Selection change event
}

PopMenu.defaultProps = {
    items: [],
    index: -1,
    onSelectChange: null,
}
