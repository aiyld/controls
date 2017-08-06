import React, { Component } from 'react';
import {PropTypes} from "prop-types";
import "./secureCode.less";

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
        this.isOK = false;
    }

    componentDidMount(){
        this.genereateEvent(("ontouchstart" in window));
    }

    /**
     * 生成事件
     */
    genereateEvent(touchMode){
        let box = this.refs.box,
            bg = this.refs.bg,//绿色背景
            text = this.refs.text,//文字
            btn = this.refs.btn,//拖动按钮
            done = false;//是否通过验证

        let self = this;

        let arrResult = [];

        if(touchMode){
            arrResult = ['touchstart', 'touchmove', 'touchend'];
        }else{
            arrResult = ['mousedown', 'mousemove', 'mouseup'];
        }

        let posX = 0;
        let moveFuc = function(e){
            var e = e || event;

            var x = e.clientX - posX;

            if(e.touches){
                x = e.changedTouches[0].clientX - posX;
            }

            this.style.left = x + 'px';
            bg.style.width = this.offsetLeft + 10 + 'px';

            // 通过验证
            if(x >= box.offsetWidth - btn.offsetWidth){
                done = true;
                btn.removeEventListener(arrResult[1], moveFuc);
                text.innerHTML = '通过验证';
                self.isOK = true;
            }
        };
        let startFuc = function(e){
            var e = e || window.event;
            posX = e.clientX - this.offsetLeft;

            if(e.touches){
                posX = e.changedTouches[0].clientX
            }

            btn.addEventListener(arrResult[1], moveFuc);

            document.addEventListener(arrResult[2], function(){
                btn.removeEventListener(arrResult[1], moveFuc);

                if(done)return;
                btn.style.left = 0;
                bg.style.width = 0;
                self.isOK = false;
            });
        };

        btn.addEventListener(arrResult[0], startFuc);
        text.addEventListener(arrResult[0], function(){
            return false;
        });
    }

    reset(){
        let box = this.refs.box,
            bg = this.refs.bg,//绿色背景
            text = this.refs.text,//文字
            btn = this.refs.btn;//拖动按钮


        btn.style.left = 0;
        bg.style.width = 0;
        text.innerHTML = '拖动滑块验证';
        self.isOK = false;
    }

    getResult(){
        return this.isOK;
    }

    render() {
        return (
            <div className="ctrl c-sc">
                <div ref="box" className="drag">
                    <div ref="bg" className="bg-drag"></div>
                    <p ref="text" className="text-drag">拖动滑块验证</p>
                    <div ref="btn" className="btn-drag"></div>
                </div>
            </div>
        );
    }
}
