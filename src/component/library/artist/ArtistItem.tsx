import React from 'react'
import '../ListComponentStyles.css'
import ArtistData from "../../../model/ArtistData";
import {Link} from "react-router-dom";

interface Props {
    data: ArtistData
    link: string
}

function ArtistItem(props: Props) {
    return (
        <div className="list-item-container">
            <div className="line-bold"><Link to={props.link}>{props.data.name}</Link></div>
            <div className="line-bold-italic">{props.data.listeningCount}</div>
        </div>
    )
}

export default ArtistItem