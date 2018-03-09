import React from "react";
import "./cartonBox.less";

const CartonBox = props => {
  return (
    <section className={"carton-box " + (props.className || "")}>
      <section className="c-top">
        <section className="c-top-c" data-width="100%">
          <img src="../../img/carton_1.jpeg" data-width="100%" />
        </section>
      </section>
      <section className="c-middle">
        <section className="c-middle-c">
          <p>{props.children}</p>
        </section>
      </section>
      <section className="c-bottom">
        <img
          data-width="100%"
          src="../../img/carton_2.jpeg"
        />
      </section>
    </section>
  );
};

export default CartonBox;
