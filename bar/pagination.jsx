import React, {Component, PropTypes} from "react";
import "./pagination.less";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.page
    };
  }

  componentDidMount() {}

  onNavigate(index) {
    if(!this.props.urlTem) {
      this.setState({index});
      if(this.props.onPageChange) {
        this.props.onPageChange(index);
      }
    }
  }

  componentWillReceiveProps(next, old) {
    if(next.index !== old.index) {
      this.setState({index: next.index});
    }
  }

  onPre() {
    let {index} = this.state;
    let {beginIndex} = this.props;
    if (index > beginIndex) {
      index--;
      this.onNavigate(index);
    }
  }

  onNext() {
    let {index} = this.state;
    let {total, beginIndex} = this.props;
    if (index < total || total === -1) {
      index++;
      this.onNavigate(index);
    }
  }

  getUrl(index) {
    let {urlTem} = this.props;
    if (urlTem) {
      return urlTem.replace(/\[page\]/, index);
    } else {
      return "javascript:void(0)"
    }
  }

  generate(pageIndex) {
    const {total, beginIndex, limit, ellipsisText} = this.props;
    let {index} = this.state;
    let pageArr = [];
    let addNum = parseInt(limit / 2);
    let endPage = Math.min(index + addNum, total);
    let beginPage = Math.max(index - addNum, beginIndex);

    for (let i = beginPage; i <= endPage; i++) {
      pageArr.push(i);
    }

    if (pageArr.length < limit) {
      let lastIndex = pageArr[pageArr.length - 1];
      let firstIndex = pageArr[0];
      let currentLength = limit - pageArr.length;
      for (let i = 1; i <= currentLength; i++) {
        if (lastIndex + i <= total) {
          pageArr.push(lastIndex + i);
        } else if(firstIndex - i >= beginIndex) {
          pageArr.unshift(firstIndex - i);
        } else {
          break;
        }
      }
    }

    if (pageArr[0] > beginIndex) {
      pageArr.unshift(0);
      pageArr.unshift(1);
    }

    if (pageArr[pageArr.length - 1] < total) {
      pageArr.push(0);
    }

    return pageArr.map((item, i) => {
      return <li className={index === item
        ? "active"
        : ""} key={i}>
        {item === 0
          ? <a className="unable" href="javascript:void(0)">{ellipsisText}</a>
          : <a
            href={this.getUrl(item)}
            onClick={this
            .onNavigate
            .bind(this, item)}>{item}</a>
}
      </li>
    });
  }

  render() {
    const {total, preText, nextText, ellipsisText, beginIndex} = this.props;
    let {index} = this.state;

    return (
      <div className="ld ld-pagination">
        <ul>
          <li className="pre" onClick={this
            .onPre
            .bind(this)}>
            {index !== 1 ? <a href={this.getUrl(index-1)}>{preText}</a>:<a href="javascript:void(0)" disabled="disabled" className="disable">{preText}</a>}
          </li>
          {this.generate(index)}
          <li className="next" onClick={this
            .onNext
            .bind(this)}>
            {index !== total && total > 0 ? <a href={this.getUrl(index + 1)}>{nextText}</a>:<a href="javascript:void(0)" disabled="disabled" className="disable">{nextText}</a>}
          </li>
        </ul>
      </div>
    );
  }
}

/**
 * 根据记录的总数和每页展现数，计算总页数
 * @param {Number} recordsLength 记录的总数
 * @param {Number} pageSize 每页展现数
 */
Pagination.calTotalPage = (recordsLength, pageSize) => {
  let result = parseInt(recordsLength / pageSize);

  return result * pageSize < recordsLength ? (result + 1) : result;
};

Pagination.defaultProps = {
  limit: 5, // 共展示五位数字
  total: -1, // 总共页数
  preText: "上一页",
  nextText: "下一页",
  ellipsisText: "...",
  beginIndex: 1,
  urlTem: "", // 替换字符串的[page]
  page: 1,
};
