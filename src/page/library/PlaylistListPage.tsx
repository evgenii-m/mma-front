import React from 'react'
import './PlaylistListPage.css'
import './ListPageStyle.css'
import PlaylistShortData from "../../model/PlaylistShortData";
import PlaylistItem from "../../component/library/PlaylistItem";
import {$PlaylistService} from "../../service/PlaylistService";
import PlaylistListSettings from "../../component/library/settings/PlaylistListSettings";


export interface Props {
    services: $PlaylistService
}

export interface State {
    playlistList?: PlaylistShortData[]
}

export class PlaylistListPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            playlistList: []
        }
    }

    componentDidMount() {
        this.props.services.playlistService.getPlaylistList()
            .then(response => {
                this.setState({
                    playlistList: response.data
                })
            })
    }

    render() {
        let playlistList = this.state.playlistList?.map((data, index) => {
            return (
                <div item-index={index}>
                    <PlaylistItem data={data}/>
                </div>
            )
        })

        return (
            <div>
                <div className="list-container">
                    <PlaylistListSettings/>
                    {playlistList}
                </div>
            </div>
        )
    }
}

export default PlaylistListPage