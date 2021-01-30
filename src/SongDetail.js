import React from 'react'
import {connect} from 'react-redux'

const SongDetail =({song})=>{
    console.log(song)
    if(!song){
        return <div>Select a song</div>
    }
    return <div>
        Title:{song.title} <br/>
        Duration:{song.duration}
    </div>
}

const MapStateToProp = (state) =>{
    console.log(state)
    return {song:state.selectedSong}
}
export default connect(MapStateToProp)(SongDetail)