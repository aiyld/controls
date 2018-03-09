import React from "react";
import "./twoLine.less";

const TwoLine = props => {
  return (
    <section className={"two-line " + (props.className || "")}>
      <section className="title-inner" />
    </section>
  );
};

export default TwoLine;
