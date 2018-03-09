import React from "react";
import "./titleBgBox.less";

const HilightBox = props => {
  return (
    <section className={"star-box " + (props.className || "")}>
      <section className="clear:both;position:relative;margin:0;background-color:#fff;border-radius:5px;border-width:1px;border-style:solid;border-color:#e0e0e0">
        <section className="color:#FF5E52;display:block;padding:0 15px;background-color:#fff;border-radius:5px">
          <p
            class="96wx-bgc"
            className="background-color:#FF5E52;margin:-1px 0 0 0;display:inline-block;padding:4px 15px;color:#fff;font-size:14px;font-weight:normal"
          >
            <strong>这里输入标题</strong>
          </p>
          <section className="color:#999;margin:5px auto">
            <p className="font-size:14px;line-height:30px">
              在这里输入你的内容，注意不要用退格键把所有文字删除，请保留一个或者用鼠标选取后直接输入，防止格式错乱。
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HilightBox;
