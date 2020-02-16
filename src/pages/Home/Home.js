import React from "react"
import './Home.less'

function Home(props){
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-content-blog part-box">
                    
                </div>
                <div className="home-content-read part-box">
                    阅读
                </div>
            </div>
            <div className="home-side">
                <div className="author-info part-box">王强</div>
            </div>
        </div>

    )
}

export default Home