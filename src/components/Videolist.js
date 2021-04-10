import React from 'react'
import VideoItem from './VideoItem'

function Videolist(props) {
    const renderedItems = props.videos.map((item)=>{
        return(
            
           <VideoItem 
           key = {item.id.videoId}
           onVideoSelect = {props.onVideoSelect}
           video = {item}></VideoItem>
        )
    })
    // console.log(props.videos)
    return (
        
        <div className="ui relaxed divided list">
           { renderedItems}
        </div>
    )
}

export default Videolist
