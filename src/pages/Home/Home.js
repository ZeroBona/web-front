import React, {useState} from "react"
import './Home.less'
import ListItem from '../../common/components/ListItem/ListItem'

function Home(props){
    let [blogList] = useState([1, 2, 3, 4])
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-content-blog part-box">
                    {
                        blogList.map(item => {
                            return <ListItem key={item}></ListItem>
                        })
                    }
                </div>
                <div className="home-content-read part-box">
                    
                </div>
            </div>
            <div className="home-side">
                <div className="author-info part-box">依旧零博纳</div>
            </div>
        </div>
    )
}

export default Home