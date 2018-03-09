import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import "./dialog.less";

export default class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  /**
   * 隐藏内容
   */
  hide() {
    if (this.props.hideClick) {
      this.props.hideClick();
    }

    Dialog.hide(this.props.rootId);
  }

  render() {
    let modeClass = "bottom-up";

    return (
      <div className="ld ld-dc">
        <div className="dialogPopup" />
        <div className={modeClass}>
          <div className={"flexshow flex-column"}>
            <div className="flex" onClick={this.hide.bind(this)} />
            <div className="center" ref="childrenArea">
              {this.props.children}
            </div>
            <div className="flex" onClick={this.hide.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

/**
 * 显示对话框容器 Show dialog container
 *
 * @param component 对话框内的组件 The component to be shown in dialog container
 * @param method 关闭对话框内执行的方法 The method to be excuted before remove the dialog container
 *
 */
Dialog.show = (component, method, id) => {
  id = id || "dialogContainer";
  let test = <Dialog />;
  let dialog;
  let container = document.getElementById(id);
  if (!container) {
    container = document.createElement("div");
    container.id = id;
    document.body.appendChild(container);
  }

  let newChild;
  if (typeof component.type == "string") {
    let props = {};
    if (component) {
      for (let k in component.props) {
        props[k] = component.props[k];
      }
    }
    props.hideDialog = () => {
      if (dialog) {
        dialog.hideDialog();
      }
    };

    props.rootId = id;
    newChild = React.cloneElement(component, props);
  } else {
    newChild = component;
  }

  dialog = ReactDOM.render(
    <Dialog hideClick={method}>{newChild}</Dialog>,
    container
  );

  return dialog;
};

Dialog.hide = id => {
  id = id || "dialogContainer";
  let container = document.getElementById(id);
  if (container) {
    document.body.removeChild(container);
  }
};
