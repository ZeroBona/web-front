import React from 'react'
import './App.less'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {} from 'antd'
import Home from "../pages/Home/Home"
import Blog from "../pages/Blog/Blog"
import Read from "../pages/Read/Read"
import Detail from "../pages/Detail/Detail"

function App() {
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
                                <li className="active">
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-home"/>
                                    </svg>
                                    <Link className="link" to='/'>首页</Link>
                                </li>
                                <li>
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-code"/>
                                    </svg>
                                    <Link className="link" to='/blog'>博客</Link>
                                </li>
                                <li>
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-book"/>
                                    </svg>
                                    <Link className="link" to='/read'>阅读</Link>
                                </li>
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
