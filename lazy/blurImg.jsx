import React, {PureComponent} from "react";
import "../css/lazy/blurImg.less";

export default class BlurImg extends PureComponent {
    constructor(props) {
        super(props);

        let {thumb, src} = props;
        if(!src) {
            let result = this.dealThumb(thumb);
            thumb = result.thumb;
            src = result.src;
        }
        this.state = {
            isOK: false,
            thumb: thumb,
            src: src,
            bg: thumb || src,
        };
    }

    componentDidMount() {
        if (this.state.thumb && this.thumbImg.complete) {
            this.thumbLoaded();
        }

        if (this.state.src && this.normalImg.complete) {
            this.normalLoaded();
        }
    }

    thumbLoaded() {
        this.normalImg.src = this.state.src;
    }

    normalLoaded() {
        this.setState({isOK: true, bg: this.state.src});
    }

    normalError() {
        if(this.props.onError) {
            this.props.onError();
        }
    }

    dealThumb(src) {
        let thumb = "";
        let origin = "";

        let {getSrc} = this.props;

        if(getSrc) {
            thumb = src;
            origin = getSrc(thumb);
        } else {
            if (src.indexOf("/thumbnails/") >= 0) {
                thumb = src;
                origin = src.replace(/\/thumbnails\//, "/")
            } else {
                origin = src;
            }
        }

        return {
          thumb,
          src: origin
        }
    }

    render() {
        return (
            <div className={"blur-img " + (this.props.className || "")}>
                <img
                    ref={thumbImg => this.thumbImg = thumbImg}
                    src={this.state.thumb || ""}
                    onLoad={this.thumbLoaded.bind(this)}
                ></img>
                <img src={this.state.thumb ? "" : this.state.src}
                    ref={normalImg => this.normalImg = normalImg}
                    onLoad={this.normalLoaded.bind(this)}
                    onError={this.normalError.bind(this)}
                />
                <div
                    className={"stage " + (this.state.isOK ? "": "blur")}
                    style={{backgroundImage: `url(${this.state.bg})`
                }}
                ></div>
            </div>
        );
    }
}
