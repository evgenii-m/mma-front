import React from 'react'
import './FavoriteTracksPage.css'
import './ListPageStyle.css'
import AudioTrackItem from "../../component/library/AudioTrackItem";
import FavoriteTracksSettings from "../../component/library/settings/FavoriteTracksSettings";
import {$AudioTrackService} from "../../service/AudioTrackService";
import TrackData from "../../model/TrackData";


export interface Props {
    services: $AudioTrackService
}

export interface State {
    trackList?: TrackData[]
}

export class FavoriteTracksPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            trackList: []
        }
    }

    componentDidMount() {
        this.props.services.audioTrackService.getFavoriteTracks()
            .then(response => {
                this.setState({
                    trackList: response.data
                })
            })
    }


    render() {
        let trackListBlock = this.state.trackList?.map(data => {
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
                    {trackListBlock}
                </div>
            </div>
        )
    }
}

export default FavoriteTracksPage