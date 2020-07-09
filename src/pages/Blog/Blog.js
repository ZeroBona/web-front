import React, { useState } from "react";
import "./Blog.less";
import ListItem from "../../common/components/ListItem/ListItem";

function Blog() {
  let [blogList] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className={"blog"}>
      {blogList.map((item) => {
        return <ListItem key={item}></ListItem>;
      })}
    </div>
  );
}

export default Blog;
