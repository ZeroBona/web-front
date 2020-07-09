import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.less";
import { Menu, Affix } from "antd";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Read from "./pages/Read/Read";
import Detail from "./pages/Detail/Detail";

function App(props) {
  const [menuList] = useState([
    {
      name: "首页",
      icon: "icon-home",
      url: "/",
    },
    {
      name: "博客",
      icon: "icon-code",
      url: "/blog",
    },
    {
      name: "阅读",
      icon: "icon-book",
      url: "/read",
    },
  ]);

  // 根据页面url获取到当前应该高亮的菜单
  function getDefaultCurrentMenuUrl(){
    let defaultCurrentMenuUrl = '/'
    let pathname = window.location.pathname
    if(pathname){
      let pathnameArr = pathname.split('/')
      defaultCurrentMenuUrl = `/${pathnameArr[1]}`
    }
    return defaultCurrentMenuUrl
  }

  let [currentMenuUrl, setCurrentMenuUrl] = useState(getDefaultCurrentMenuUrl());

  function handleClickMenu(e) {
    setCurrentMenuUrl(e.key);
  }

  return (
    <div className="app">
      <Router>
        <Affix offsetTop={0}>
          <header className="app-header">
            <div className="app-header-box">
              <div className="app-header-logo">
                <h2>依旧零博纳</h2>
              </div>
              <nav className="app-header-nav">
                <Menu
                  onClick={handleClickMenu}
                  selectedKeys={[currentMenuUrl]}
                  mode="horizontal"
                >
                  {menuList.map((item, index) => {
                    return (
                      <Menu.Item key={item.url}>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref={"#" + item.icon} />
                        </svg>
                        <Link className="link" to={item.url}>
                          {item.name}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </Menu>
              </nav>
            </div>
          </header>
        </Affix>

        <div className="app-content">
          <div className="app-content-box">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/read" component={Read} />
              <Route path="/detail/:id" component={Detail} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
