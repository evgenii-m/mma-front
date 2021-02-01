import React from 'react'
import PlaylistShortData from "../../model/PlaylistShortData"
import './ListComponentStyles.css'
import {Routes} from "../../Routes";
import {Link} from "react-router-dom";

interface Props {
    data: PlaylistShortData
}

function PlaylistItem(props: Props) {
    return (
        <div className="list-item-container">
            <Link to={Routes.PLAYLIST_DETAILS_ID(props.data.id)}>
                <div className="line-bold">{props.data.title}</div>
                <div className="line-bold-italic">{props.data.description}</div>
            </Link>
        </div>
    )
}

export default PlaylistItem