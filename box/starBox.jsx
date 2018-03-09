import React from "react";
import "./starBox.less";

const HilightBox = props => {
  return (
    <section className={"star-box " + (props.className || "")}>
      <section className="sb-main">
        <section className="sb-top">
          <section className="sbt-a" />
          <section className="sbt-b" />
        </section>
        <section className="sb-mid">
          <section className="sb-mid-1"/>
          <section className="sb-mid-2">
            <section>
              <p className="sbm-title">
                <strong>{props.title}</strong>
              </p>
              <section className="sbm-i" />
            </section>
            <section className="sbm-c">
              {props.children}
            </section>
          </section>
          <section className="sbm-b" />
        </section>
        <section className="sbm-l" />
      </section>
    </section>
  );
};

export default HilightBox;
