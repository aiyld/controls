import React from "react";
import "./titleBgBox.less";

const HilightBox = props => {
  return (
    <section className={"tb-box " + (props.className || "")}>
      <section className="tb-outter">
        <section className="tb-ot1">
          <p class="tb-title">
            <strong>{props.title}</strong>
          </p>
          <section className="tb-ct">
          {props.children}
          </section>
        </section>
      </section>
    </section>
  );
};

export default HilightBox;
