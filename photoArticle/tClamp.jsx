import React from "react";
import "./tClamp.less";
import "../img/tclamp_01.jpeg";

const DClamp = props => {
  return (
    <div className="tclamp">
      <h2 className="tclamp_title">{props.title}</h2>
      <h4 className="brief">{props.brief}</h4>
      <div className="tclamp_content">
        <section className="tcm">
          <section>
            <img src="/img/tclamp_01.jpeg" className="pic1" />
          </section>
          <section className="picm">
            <section className="pica">
              <img src={props.imgs[0]} />
            </section>
            <section className="pica">
              <img src={props.imgs[1]} />
            </section>
            <section className="pica">
              <img src={props.imgs[2]} />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default DClamp;
