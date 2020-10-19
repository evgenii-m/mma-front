import React from 'react'
import TrackData from "../model/TrackData";
import './FavoriteTracksPage.css'
import AudioTrackItem from "../component/library/AudioTrackItem";
import FavoriteTracksSettings from "../component/library/FavoriteTracksSettings";


const FAVORITE_TRACKS_TEST_DATA: TrackData[] = [
    new TrackData(1, "Vangelis", "Memories of Green", "Blade Runner (Music From The Original Soundtrack)", 305, "10.10.2020"),
    new TrackData(2, "Vangelis", "Blade Runner (End Titles)", "Blade Runner (Music From The Original Soundtrack)", 279, "10.10.2020"),
    new TrackData(3, "Paul White", "Smile (See the Light)", "Smile (See the Light)", 205, "8.10.2020"),
    new TrackData(4, "Buddy Rich", "Drum Boogie", "The Drum Battle", 544, "7.10.2020"),
    new TrackData(5, "IDLES", "Mr. Motivator", "Ultra Mono", 195, "7.10.2020")
]

function FavoriteTracksPage() {
    let trackList = FAVORITE_TRACKS_TEST_DATA.map(data => {
        return (
            <div>
                <AudioTrackItem data={data}/>
            </div>
        )
    })

    return (
        <div>
            <div className="audio-track-list-container">
                <FavoriteTracksSettings/>
                {trackList}
            </div>
        </div>
    )
}

export default FavoriteTracksPage