import React, { useState } from "react";
import { Affix } from "antd";
import "./Home.less";
import ListItem from "../../common/components/ListItem/ListItem";
import AuthorInfo from "../../common/components/AuthorInfo/AuthorInfo";

function Home(props) {
  let [blogList] = useState([1, 2, 3, 4]);
  let [readList] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="home">
      <div className="home-content">
        <div className="part-box home-content-blog">
          <h2>推荐博客</h2>
          {blogList.map((item) => {
            return <ListItem key={item}></ListItem>;
          })}
        </div>
        <div className="part-box home-content-read">
          <h2>推荐阅读</h2>
          {readList.map((item) => {
            return <ListItem key={item}></ListItem>;
          })}
        </div>
      </div>
      <div className="home-side">
        <Affix offsetTop={80}>
          <AuthorInfo />
        </Affix>
      </div>
    </div>
  );
}

export default Home;
