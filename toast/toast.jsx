import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import "../css/toast/toast.less";

export default class Toast extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 隐藏内容
     */
    hide(){
        if(this.props.hideClick){
            this.props.hideClick();
        }

        document.ontouchmove = function (e) { e.preventDefault();};
        $("#toastContainer").remove();
        let container = document.getElementById("toastContainer");
        if(container){
            document.body.removeChild(container);
        }
    }

    render(){
        let {className} = this.props;

        return <div className={"ld ld-toast "+className}>
            {this.props.children}
        </div>
    }
}

/**
 * 显示提示框 Show toast container
 *
 * @param component 提示框内的组件 The component to be shown in toast container
 * @param method 关闭提示框内执行的方法 The method to be excuted before remove the toast container
 * 
 */
Toast.showMsg = (component, method, settings) => {
    let toastTimer;
    let toast;
    settings = settings || {};
    let container = document.getElementById("toastContainer");
    if(!container){
        container = document.createElement("div");
        container.id = "toastContainer";
        document.body.appendChild(container);
    }else{
        clearTimeout(toastTimer);
    }

    let timeSpan = settings.timeSpan || 5000;
    let className = settings.className || "";
    toastTimer = setTimeout(()=>{
        let ct = document.getElementById("toastContainer");
        if(ct){
            document.body.removeChild(ct);
        }
        clearTimeout(toastTimer);
    }, timeSpan);

    document.ontouchmove = null;

    let newChild;
    if(typeof component.type == "string"){
        let props = {};
        if(component){
            for ( let k in component.props){
                props[k] = component.props[k];
            }
        }
        props.hideDialog = () => {
            if(toast){
                toast.hideDialog();
            }
        };

        newChild = React.cloneElement(component, props);
    }else{
        newChild = component;
    }

    toast = ReactDOM.render(<Toast className={className} hideClick={method}>{newChild}</Toast>, container);
};

Toast.show = (msg) => {
    Toast.showMsg(<span className="msg">{msg}</span>, null, {className: "normal"});
}

Toast.showWarning = (msg) => {
    Toast.showMsg(<span className="msg">{msg}</span>, null, {className: "warning"});
}

Toast.showError = (msg) => {
    Toast.showMsg(<span className="msg">{msg}</span>, null, {className: "error"});
}