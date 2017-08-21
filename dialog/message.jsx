/*
 * @Author: YLD
 * @Date: 2017-08-14 16:33:00
 * @Desc: 弹层
 */

import React, { Component } from 'react';
import './message.less';
import {render} from "react-dom";

/**
 *

Message.alert({
    title: '标题',
    msg: '提示的内容',
    btnTxt: ['确定'], // 可不传，默认是确定
    btnFn: [() => {console.log('确定')}],
    children: (<em>内容</em>)
});

Message.confirm({
    title: '标题',
    msg: '提示的内容',
    btnTxt: ['取消', '确定'],
    btnFn: [() => {console.log('取消')},() => {console.log('确定')}],
    children: (<em>内容</em>)
});

Message.toast(err.message， 3000, () => {console.log('回调')});

 *
 */

export class MessageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            title: '标题', // 标题
            msg: '提示的内容', // 提示的内容
            btnTxt: ['确定'], // 可不传，默认是确定
            btnFn: [() => {console.log('确定')}],
            children: null
        }
    }

    okHandler() {
        this.setState({
            visible: false
        })
        const btnFn = this.state.btnFn;
        Array.isArray(btnFn) && typeof btnFn[1] === 'function' && btnFn[1]();
    }

    cancelHandler() {
        this.setState({
            visible: false
        })
        const btnFn = this.state.btnFn;
        Array.isArray(btnFn) && typeof btnFn[0] === 'function' && btnFn[0]();
    }

    alert(params) {
        this.setState({
            visible: true,
            title: params.title, // 标题
            msg: params.msg, // 提示的内容
            btnTxt: params.btnTxt || ['确定'], // 可不传，默认是确定
            btnFn: params.btnFn || [() => {console.log('确定')}],
            children: params.children
        });
    }

    confirm(params) {
        this.setState({
            visible: true,
            title: params.title || '', // 标题
            msg: params.msg, // 提示的内容
            btnTxt: params.btnTxt || ['取消', '确定'], // 可不传，默认是取消，确定
            btnFn: params.btnFn || [() => {console.log('取消')},() => {console.log('确定')}],
            children: params.children
        });
    }

    close() {
        this.setState({
            visible: false
        })
    }

    render(){
        let cn = "ld-alert ";
        if(this.state.visible){
            cn += "alert-show";
        }

        return (
            <section className={cn}>
                <div className="mask" onClick={this.close.bind(this)}></div>
                <div className="alert-cover">
                    <div className="alert-warp">
                        <div className="alert-con">
                            <h1>{this.state.title}</h1>
                            {/*{ this.props.params.title? <h1>{this.props.params.title}</h1>: '' }*/}
                            <div className="content">
                                <p>{this.state.msg}</p>
                                {this.state.children}
                            </div>
                        </div>
                        { this.state.btnTxt.length > 1 ?
                            <div className="alert-btn">
                                <a className="btn-l" href="javascript: void(0)" onClick={this.cancelHandler.bind(this)}>{this.state.btnTxt[0]}</a>
                                <a className="btn-r" href="javascript: void(0)" onClick={this.okHandler.bind(this)}>{this.state.btnTxt[1]}</a>
                            </div>
                            :
                            <div className="alert-btn">
                                <a className="btn-l" href="javascript: void(0)" onClick={this.cancelHandler.bind(this)}>{this.state.btnTxt[0]}</a>
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    }
}


export class ToastComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }

    show(text, timeout = 3000, callback) {
        this.setState({
            visible: true,
            text: text
        });

        if(timeout){
            setTimeout(() => {
                this.setState({
                    visible: false
                });
                callback && callback();
            }, timeout);
        }
    }

    close() {
        this.setState({
            visible: false
        });
        callback && callback();
    }

    render(){
        let cn = "ld-toast ";
        if(this.state.visible){
            cn += "toast-show";
        }

        return (
            <section className={cn}>
                {this.state.text}
            </section>
        )
    }
}

class Message {
    constructor() {
        this.render();
    }

    render() {
        this.node = document.createElement('div');
        this.node.className = 'global-message-component';
        document.body.appendChild(this.node);
        render(
            <div>
                <MessageComponent
                    ref = { messageRef => this.messageRef = messageRef }
                />
                <ToastComponent
                    ref = { toastRef => this.toastRef = toastRef }
                />
            </div>,
            this.node
        )
    }

    alert(params) {
        this.messageRef.alert(params);
    }

    confirm(params) {
        this.messageRef.confirm(params);
    }

    toast(text, timeout = 3000, callback) {
        this.toastRef.show(text, timeout, callback);
    }

    closeToast() {
        this.toastRef.close();
    }

}

export default new Message();
