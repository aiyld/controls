import React from "react";
import "./mulNote.less";

const MulNote = props => {
  return (
    <div className="mulnote">
      {props.header}
      <section className="flex dccontent">
        <h2 className="phoar_title">{props.title}</h2>
        <p className="phoar_brief">{props.brief}</p>
        <div className="picarea">
            {props.imgs.map((val, index)=>{
                return <div className="flex" key={index}>
                    <div className="img" style={{ backgroundImage: `url(${val})` }}></div>
                </div>
            })}
        </div>
      </section>
      {props.footer}
    </div>
  );
};

export default MulNote;
