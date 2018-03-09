import React from "react";
import "./hilightBox.less";

const HilightBox = props => {
  return (
    <section className={"hilight-box " + (props.className || "")}>
      <section className="hb-1">
        <section className="hb-1-1">
          <p className="hb-title">
            {props.title}
          </p>
        </section>
        <span className="s-s" />
      </section>
      <section className="hb-c">
        {props.children}
      </section>
    </section>
  );
};

export default HilightBox;
