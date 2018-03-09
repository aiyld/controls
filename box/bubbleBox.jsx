import React from "react";
import "./bubbleBox.less";

const BubbleBox = props => {
  return (
    <section className={"bubble-box "+(props.className||"")}>
      <section className="t-con">
        <section className="c1" />
        <section className="c2">
          <p className="b-title">{props.title}</p>
        </section>
        <section className="c3" />
        <section className="c4" />
      </section>
      <section className="bubble-main">
        {props.briefPic?<section className="m1">
          <section className="min1" />
          <section className="min2">
            <img src={props.briefPic} />
          </section>
        </section>:""}
        <section className="m-brief">
          {props.children}
        </section>
      </section>
    </section>
  );
};

export default BubbleBox;
