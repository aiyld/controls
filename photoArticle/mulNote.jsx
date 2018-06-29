import React from "react";
import "./mulNote.less";
import BlurImg from "../lazy/blurImg.jsx";

const MulNote = props => {
  return (
    <div className="mulnote">
      {props.header}
      <section className="flex dccontent">
        <h2 className="phoar_title">{props.title}</h2>
        <p className="phoar_brief">{props.brief}</p>
        <div className="picarea">
            {props.imgs.map((val, index)=>{
                const result = props.getBlur ? props.getBlur(val): { src: val };

                return <div className="flex" key={index}>
                    <BlurImg className="img" {...result}/>
                </div>
            })}
        </div>
      </section>
      {props.footer}
    </div>
  );
};

export default MulNote;
