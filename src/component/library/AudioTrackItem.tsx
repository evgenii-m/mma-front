import React from 'react'
import TrackData from "../../model/TrackData"
import './ListComponentStyles.css'

interface Props {
    data: TrackData
}

function AudioTrackItem(props: Props) {
    return (
        <div className="list-item-container">
            <div className="line-bold">{props.data.artist}</div>
            <span className="line-bold-italic">{props.data.title} - {props.data.album}</span>
        </div>
    )
}

export default AudioTrackItem