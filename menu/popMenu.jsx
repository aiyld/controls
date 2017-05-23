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

        this.bodyClickBind = this.bodyClick.bind(this);
    }

    componentDidMount(){
        document.body.addEventListener('touchstart', this.bodyClickBind, false);
        document.body.addEventListener('click', this.bodyClickBind, false);
    }

    componentWillUnmount(){
        document.body.removeEventListener('click', this.bodyClickBind, false);
        document.body.removeEventListener('touchstart', this.bodyClickBind, false);
    }

    //点击非本窗体则隐藏本窗体
    bodyClick(e){
        e = e || window.event;
        let target = e.target || e.srcElement;
        let keyboardBody = this.refs.root;
        let isChild = true;
        if(keyboardBody){
            isChild = keyboardBody.contains(target);
        }
        if(!isChild){
            this.toggleMenu(false);
        }
    }

    //控制切换菜单
    toggleMenu(status){
        let {visible} = this.state;
        if(status === false || status === true){
            visible = !status;
        }
        this.setState({visible: !visible});
    }

    render(){
        let pop;
        let {visible} = this.state;
        let className = "";
        if(visible){
            className = "show"
        }

        return <div ref="root" className="ld ld-pm">
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
