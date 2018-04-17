import React, {PureComponent} from "react";
import "../css/lazy/blurImg.less";

export default class BlurImg extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOK: false,
            src: ""
        };
    }

    componentDidMount() {
        if (!this.props.thumb) {
            this.normalImg.src = this.props.src;
            this.setState({isOK: true, src: this.props.src});
        } else {
            this.thumbImg.src = this.props.thumb;
            this.setState({src: this.props.thumb});
        }
    }

    thumbLoaded() {
        this.normalImg.src = this.props.src;
    }

    normalLoaded() {
        this.setState({isOK: true, src: this.props.src});
    }

    render() {
        return (
            <div className={"blur-img " + (this.props.className || "")}>
                <img
                    ref={thumbImg => this.thumbImg = thumbImg}
                    src={this.props.thumb || ""}
                    onLoad={this
                    .thumbLoaded
                    .bind(this)}></img>
                <img
                    ref={normalImg => this.normalImg = normalImg}
                    onLoad={this
                    .normalLoaded
                    .bind(this)}/>
                <div
                    className={"stage " + (this.state.isOK
                    ? ""
                    : "blur")}
                    style={{
                    backgroundImage: `url(${this.state.src})`
                }}></div>
            </div>
        );
    }
}
