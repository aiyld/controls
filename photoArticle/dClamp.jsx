import React from "react";
import "./dClamp.less";
import "../img/dclamp_01.png";
import "../img/dclamp_02.png";

const DClamp = props => {
  return (
    <div className="dclamp flexshow">
      <div className="dcontent">
        <h2 className="dclamp_title">{props.title}</h2>
        <p className="brief">{props.brief}</p>
      </div>
      <div className="dclamp_content">
        <section className="se1">
          <img className="pic1" src="/img/dclamp_01.png" />
          <section className="pbm">
            <section className="picl">
              <img src="/img/dclamp_02.png" />
            </section>
            <section className="picr">
              <img src="/img/dclamp_02.png" />
            </section>
          </section>
        </section>
        <section>
          <section className="picm">
            <section className="picml">
              <section className="mlm">
                <img src={props.imgs[0]} />
              </section>
            </section>
            <section className="picmr">
              <section className="mrm">
                <img src={props.imgs[1]} />
              </section>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default DClamp;
