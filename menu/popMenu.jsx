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
        this.originalClass = "";
    }

    componentDidMount(){
        document.body.addEventListener('touchstart', this.bodyClickBind, false);
        document.body.addEventListener('click', this.bodyClickBind, false);
        this.originalClass = document.body.className;
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

    //驱动父组件动画
    animateParent(isOut){
        if(!this.props.getElements){
            return;
        }

        let elements = this.props.getElements();
        if(elements instanceof Array){
            for (let i = 0; i < elements.length; i++) {
                let item = elements[i];
                this.setAnimate(item, isOut);
            }
        }else if(elements){
            this.setAnimate(elements, isOut);
        }
    }

    //设置动画
    setAnimate(ele, outStatus){
        ele.className = ele.className || "";
        if(outStatus){
            ele.className = ele.className.replace(/bodyin/g, "").trim();
            ele.className += " bodyout";
        }else{
            ele.className = ele.className.replace(/bodyout/g, "").trim();
            ele.className += " bodyin";
        }
    };

    render(){
        let pop;
        let {visible} = this.state;
        let className = "";
        if(visible){
            className = "show";
            this.animateParent(true);
        }else if(this.refs.pop && this.refs.pop.className.indexOf("show") > -1){
            className = "hide";
            this.animateParent(false);
        }

        return <div ref="root" className="ld ld-pm">
            <button className="menu-btn" onClick={this.toggleMenu.bind(this)}></button>
            <div ref="pop" className={"pop "+className}>
                {this.props.children}
            </div>
        </div>
    }
}

PopMenu.propTypes = {
    getElements: PropTypes.func,                //Get elements witch would be push to left
                                                //获取需要被动画推至左边的组件
}

PopMenu.defaultProps = {
    getElements: null,
}
