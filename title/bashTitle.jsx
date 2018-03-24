import React from "react";
import "./bashTitle.less";
import TwoLine from "../line/twoLine.jsx";

const BashTitle = props => {
  return (
    <section className={"bash-title " + (props.className || "")}>
        <div className="titlec">
            <h3 className="bt-title">{props.title}</h3>
            <div className="bt-child">
                {props.children}
            </div>
        </div>
        <TwoLine/>
    </section>
  );
};

export default BashTitle;
