import React from "react"
import './Detail.less'

function Detail(props){
    return (
        <div>
            详情页{props.match.params.id}
        </div>
    )
}

export default Detail