import React from "react";
import "./dotLineTitle.less";

const DotLineTitle = props => {
  return (
    <section className={"dot-line-title " + (props.className || "")}>
      <section className="dlt-top">
        <strong>
          <span className="dlt-title">{props.title}</span>
        </strong>
      </section>
      <section className="dlt-middle">
        <img src={"../img/dot_line_1.jpeg"} />
      </section>
      <section className="dlt-bottom">
        <section className="dlt-bottom-c">
            <span>{props.subTitle}</span>
        </section>
      </section>
    </section>
  );
};

export default DotLineTitle;
