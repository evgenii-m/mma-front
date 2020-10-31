import React from 'react'
import './FavoriteTracksPage.css'
import './ListPageStyle.css'
import AudioTrackItem from "../../component/library/AudioTrackItem";
import FavoriteTracksSettings from "../../component/library/settings/FavoriteTracksSettings";
import {$AudioTrackService} from "../../service/AudioTrackService";


export interface Props {
    services: $AudioTrackService
}

function FavoriteTracksPage(props: Props) {
    let trackList = props.services.audioTrackService.findFavoriteTracks().map(data => {
        return (
            <div>
                <AudioTrackItem data={data}/>
            </div>
        )
    })

    return (
        <div>
            <div className="list-container">
                <FavoriteTracksSettings/>
                {trackList}
            </div>
        </div>
    )
}

export default FavoriteTracksPage