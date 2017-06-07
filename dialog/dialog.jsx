import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import "./dialog.less";

export default class Dialog extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.refs.childrenArea.style.marginBottom = this.refs.childrenArea.clientHeight / -2 + "px";
        console.log(this.refs.childrenArea.style.marginTop);
    }

    /**
     * 隐藏内容
     */
    hide(){
        if(this.props.hideClick){
            this.props.hideClick();
        }

        document.ontouchmove = function (e) { e.preventDefault();};
        $("#dialogContainer").remove();
        let container = document.getElementById("dialogContainer");
        if(container){
            document.body.removeChild(container);
        }
    }

    render() {
        let modeClass = "bottom-up";

        return(
            <div className="ld ld-dc">
                <div className="dialogPopup" onClick={this.hide.bind(this)}></div>
                <div className={modeClass}><div ref="childrenArea">{this.props.children}</div></div>
            </div>
        )
    }
}

/**
 * 显示对话框容器 Show dialog container
 *
 * @param component 对话框内的组件 The component to be shown in dialog container
 * @param method 关闭对话框内执行的方法 The method to be excuted before remove the dialog container
 * 
 */
Dialog.show = (component, method) => {
    let dialog;
    let container = document.getElementById("dialogContainer");
    if(container){
        //$("#dialogContainer").show();
        return;
    }

    document.ontouchmove = null;

    let dialogContainer = document.createElement("div");
    dialogContainer.id = "dialogContainer";
    document.body.appendChild(dialogContainer);

    let props = {};
    if(component){
        for ( let k in component.props){
            props[k] = component.props[k];
        }
    }
    props.hideDialog = () => {
        if(dialog){
            dialog.hideDialog();
        }
    };

    let newChild = React.cloneElement(component, props);

    dialog = ReactDOM.render(<Dialog hideClick={method}>{newChild}</Dialog>, document.getElementById("dialogContainer"));
};