import React from 'react'
import './PlaylistDetailsPage.css'
import './ListPageStyle.css'
import AudioTrackItem from "../../component/library/AudioTrackItem"
import {$PlaylistService} from "../../service/PlaylistService"
import PlaylistData from "../../model/PlaylistData"
import { RouteComponentProps } from 'react-router-dom'
import TrackData from "../../model/TrackData";

export interface RouterProps {
    playlistId: string
}

export interface ComponentProps extends RouteComponentProps<RouterProps> {
    services: $PlaylistService
}

export interface State {
    playlistData?: PlaylistData
    playlistTracks?: TrackData[]
}

export class PlaylistDetailsPage extends React.Component<ComponentProps, State> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            playlistData: undefined,
            playlistTracks: []
        }
    }

    componentDidMount() {
        const playlistId = Number(this.props.match.params.playlistId)
        this.props.services.playlistService.getPlaylistDetails(playlistId)
            .then(response => {
                this.setState({
                    playlistData: response.data,
                    playlistTracks: response.data.tracks
                })
            })
    }


    render() {
        let trackListBlock = this.state.playlistTracks?.map(data => {
            debugger
            return (
                <div>
                    <AudioTrackItem data={data}/>
                </div>
            )
        })

        return (
            <div>
                <div className="list-container">
                    {trackListBlock}
                </div>
            </div>
        )
    }
}

export default PlaylistDetailsPage