import React from 'react'
import './ListComponentStyles.css'
import ArtistData from "../../model/ArtistData";

interface Props {
    data: ArtistData
}

function ArtistItem(props: Props) {
    return (
        <div className="list-item-container">
            <div className="line-bold">{props.data.name}</div>
            <div className="line-bold-italic">{props.data.added}</div>
        </div>
    )
}

export default ArtistItem