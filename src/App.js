import React, {useState} from 'react'
import './App.less'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import Read from "./pages/Read/Read"
import Detail from "./pages/Detail/Detail"

function App(props) {
    const [menuList] = useState([
        {
            name: '首页',
            icon: 'icon-home',
            url: '/'
        },
        {
            name: '博客',
            icon: 'icon-code',
            url: '/blog'
        },
        {
            name: '阅读',
            icon: 'icon-book',
            url: '/read'
        }
    ])
    const [activeMenuIndex, setActiveMenuIndex] = useState(() => {
        let currentUrl = window.location.pathname
        let currentIndex = 0 
        menuList.map((item, index) => {
            if(item.url === currentUrl){
                currentIndex = index
            }
        })
        return currentIndex
    })

    return (
        <div className="app">
            <Router>
                <header className="app-header">
                    <div className="app-header-box">
                        <div className="app-header-logo">
                            <h2>依旧零博纳</h2>
                        </div>
                        <nav className="app-header-nav">
                            <ul>
                                {menuList.map((item, index) => {
                                    return (
                                        <li className={index === activeMenuIndex? 'active': ''}
                                            onClick={() => {setActiveMenuIndex(index)}}
                                            key={item + index}>
                                            <svg className="icon" aria-hidden="true">
                                                <use xlinkHref={"#" + item.icon}/>
                                            </svg>
                                            <Link className="link" to={item.url}>{item.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="app-content">
                    <div className="app-content-box">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/blog" component={Blog}/>
                            <Route path="/read" component={Read}/>
                            <Route path="/detail/:id" component={Detail}/>
                        </Switch>
                    </div>
                </div>
            </Router>


        </div>
    )
}

export default App
