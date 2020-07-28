import React, { Component } from "react";
import "./ListItem.less";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(id) {
    window.location.href = `../detail/${id}`;
  }

  render() {
    return (
      <div
        className="list-item"
        onClick={this.handleClick.bind(this, this.props.item.id)}
      >
        <div className="item-info1">
          <h3 className="item-title omit-words-1">
            {this.props.item.title}
          </h3>
          <span className="item-time">{this.props.item.create_time}</span>
        </div>
        <p className="item-info2 item-survey omit-words-3">
          {this.props.item.survey}
        </p>
        <div className="item-info3">
          <span>阅读量：{this.props.item.read_num}</span>
          <span>评论量：2342</span>
        </div>
      </div>
    );
  }
}

export default ListItem;
