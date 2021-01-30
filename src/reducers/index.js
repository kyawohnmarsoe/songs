import {combineReducers} from 'redux'

const songReducer =()=>{
    return [
        {title:'Last Christmas', duration:'3:00 mins'},
        {title:'Just the way you are', duration:'2:40 mins'},
        {title:'Love Someone', duration:'3:05 mins'},
        {title:'Perfect', duration:'2:08 mins'},
    ]
}

const selectedSongReducer =(song=null,action)=>{
    if(action.type === 'SELECTED_SONG'){
        return action.payload
    }
    return song
}

export default combineReducers({
    songs:songReducer,
    selectedSong: selectedSongReducer
})