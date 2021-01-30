import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from './actions'

const SongList =({songs,selectSong})=>{
  
    const renderSongList = songs.map((song,index)=> {
       
        return<div key={index} className="item">
                <div className="right floated content"> 
                <button onClick={()=>selectSong(song)} className="ui button primary">Select</button>
                </div>
                <div className="content">{song.title}</div>
            </div>
    })
  
    return<div className="ui divided list">
       {renderSongList}
    </div>
}

const MapStateToProp = (state)=>{
    return{ songs:state.songs}
}


export default connect(MapStateToProp,{selectSong})(SongList)