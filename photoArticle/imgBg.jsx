import React from "react";
import "../css/photoArticle/imgBg";
import BlurImg from "../lazy/blurImg";

//图片是背景的图文信息
const imgBg = props => {
    return (
        <div className="mulnote">
            <BlurImg thumb={props.thumb} src={props.src}/>
            <div>{props.header}</div>
            <p>{props.children}</p>
        </div>
    );
};

export default MulNote;
