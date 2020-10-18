import React from 'react'

import './AudioTrackItem.css'
import TrackData from "../../model/TrackData";

interface Props {
    trackData: TrackData
}

function AudioTrackItem(props: Props) {
    return (
        <div className="audio-track-item-container">
            <span className="artist-name">{props.trackData.artist}</span>
            <br/>
            <span className="track-album-title">{props.trackData.track} - {props.trackData.album}</span>
        </div>
    )
}

export default AudioTrackItem