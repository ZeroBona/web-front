import React, { useState, useEffect } from "react";
import "./Read.less";
import ListItem from "../../common/components/ListItem/ListItem";
import urls from '../../common/js/apiUrl'
import axios from "axios";

// 获取列表
async function getList(type = 'read'){
  try{
    let result = await axios.get(urls.getListUrl, {type})
    return Promise.resolve(result.data)
  }catch(error){
    console.error(error)
  }
}

function Read() {
  let [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getList().then(result => {
      setBlogList(result.list)
    })
  }, [])

  return (
    <div className="read part-box">
      {blogList.map((item, index) => {
        return <ListItem key={index + item.id} item={item}></ListItem>;
      })}
    </div>
  );
}

export default Read;
