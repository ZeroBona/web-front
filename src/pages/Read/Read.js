import React, { useState } from "react";
import "./Read.less";
import ListItem from "../../common/components/ListItem/ListItem";

function Read() {
  let [blogList] = useState([1, 2]);
  return (
    <div className="read part-box">
      {blogList.map((item) => {
        return <ListItem key={item}></ListItem>;
      })}
    </div>
  );
}

export default Read;
