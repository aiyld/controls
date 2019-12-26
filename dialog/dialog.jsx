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
          <div className={"flexshow flex-column mode-root"}>
            <div className="flex" onClick={this.hide.bind(this)} />
            <div className="center flexshow" ref="childrenArea">
              <div className="flex" onClick={this.hide.bind(this)} />
              <div style={{maxWidth: "100%"}}>{this.props.children}</div>
              <div className="flex" onClick={this.hide.bind(this)} />
            </div>
            <div className="flex" onClick={this.hide.bind(this)} />
          </div>
        </div>
        <img height="40" width="40" className="btn-close" onClick={this.hide.bind(this)} src="data:image/png;base64,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"/>
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
    <Dialog rootId={id} hideClick={method}>{newChild}</Dialog>,
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
