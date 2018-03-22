import React from "react";
import "./dCloumn.less";

const DCloumn = props => {
  return (
    <div className="dcloumn flexshow">
      <div className="piccol">
        <div>
          <img src={props.imgs[0]} />
        </div>
        <div>
          <img src={props.imgs[1]} />
        </div>
      </div>
      <section className="flex dccontent">
        <h2 className="phoar_title">{props.title}</h2>
        <div className="phoar_brief"><h4 >{props.brief}</h4></div>
      </section>
    </div>
  );
};

export default DCloumn;
