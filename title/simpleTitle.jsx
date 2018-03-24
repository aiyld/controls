import React from "react";
import "./simpleTitle.less";

const SimpleTitle = props => {
  return (
    <section className={"simple-title " + (props.className || "")}>
        <div className="titlec">
            <div className="marker"></div>
            <h3 className="bt-title">
                {props.title}
            </h3>
            <div className="bt-child">
                {props.children}
            </div>
        </div>
    </section>
  );
};

export default SimpleTitle;
