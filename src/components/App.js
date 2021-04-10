import React, { Component } from 'react'
import Search from './Search'
import youtube from '../apis/youtube.js'
import Videolist from './Videolist';
import VideoDetails from './VideoDetails';

export class App extends Component {
    state = {videos:[],selectedVideo: null};


    componentDidMount(){
        this.onTermSubmit('react');
        
    }
    onTermSubmit = async (term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })
        
        this.setState({videos: response.data.items,
            selectedVideo:response.data.items[0]
        
        }
            )
        
    }

    onVideoSelect = (video)=>{
        this.setState({selectedVideo:video})
        
    }
    render() {
        return (
            // <div className="ui container " >
            //     <Search onFormSubmit ={this.onTermSubmit}> </Search>
            //     <VideoDetails video = {this.state.selectedVideo}></VideoDetails>
            //     <Videolist
            //     onVideoSelect = {this.onVideoSelect} 
            //     videos = {this.state.videos}/>
            // </div>
            <div className="ui container">
        <Search onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <Videolist
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
        )
        
    }
}

export default App
