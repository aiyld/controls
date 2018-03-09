import React from "react";
import "./arrowBox.less";

const ArrowBox = props => {
  return (
    <section className={"arrow-box "+(props.className||"")}>
      <section>
        <section className="tmark">
          <section className="mcontent">{props.title}</section>
        </section>
        <span className="tbottom" />
      </section>
      <section className="cus-menu">
        <section className="cus-add">{props.children}</section>
      </section>
    </section>
  );
};

export default ArrowBox;
