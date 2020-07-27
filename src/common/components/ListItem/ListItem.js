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
        onClick={this.handleClick.bind(this, this.props.id)}
      >
        <div className="item-info1">
          <h3 className="item-title omit-words-1">
            2020年新冠肺炎取得阶段性成功
          </h3>
          <span className="item-time">2020-05-13 07:15:33</span>
        </div>
        <p className="item-info2 item-survey omit-words-3">
          庚子年新冠肺炎疫情让地球按下了暂停键。在这场世界性灾难面前，中国记住了一位耄耋老人，那一夜他奔赴疫情“震中”，匆匆的行色，困倦时凝重的表情，危急关头的果敢与担当……在迎面扑来的死亡阴影之前，国家迅速踩下了紧急隔离的闸门。一个与现实零距离的题材，如何让文学性不被坚硬的现实埋没，让艺术在接近纷纭社会时不至于窒息，必须要有飞扬的灵魂。《钟南山：苍生在上》作出的探索可圈可点。
        </p>
        <div className="item-info3">
          <span>阅读量：999</span>
          <span>评论量：2342</span>
        </div>
      </div>
    );
  }
}

export default ListItem;
