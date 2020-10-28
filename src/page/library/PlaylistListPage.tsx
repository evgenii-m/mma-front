import React from 'react'
import './PlaylistListPage.css'
import PlaylistData from "../../model/PlaylistData";
import PlaylistItem from "../../component/library/PlaylistItem";
import PlaylistListSettings from "../../component/library/settings/PlaylistListSettings";


const PLAYLISTS_TEST_DATA: PlaylistData[] = [
    new PlaylistData(1, "May 2020", "Monthly playlist of May 2020"),
    new PlaylistData(2, "Old School Rap"),
    new PlaylistData(3, "Django OST", "Music from film")
]

function PlaylistListPage() {
    let trackList = PLAYLISTS_TEST_DATA.map(data => {
        return (
            <div>
                <PlaylistItem data={data}/>
            </div>
        )
    })

    return (
        <div>
            <div className="playlist-list-container">
                <PlaylistListSettings/>
                {trackList}
            </div>
        </div>
    )
}

export default PlaylistListPage