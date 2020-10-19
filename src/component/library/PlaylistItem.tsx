import React from 'react'
import PlaylistData from "../../model/PlaylistData"
import './PlaylistItem.css'
import './ListComponentStyles.css'

interface Props {
    data: PlaylistData
}

function PlaylistItem(props: Props) {
    return (
        <div className="list-item-container">
            <div className="line-bold">{props.data.title}</div>
            <div className="line-bold-italic">{props.data.description}</div>
        </div>
    )
}

export default PlaylistItem