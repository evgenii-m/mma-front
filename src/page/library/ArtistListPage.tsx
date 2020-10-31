import React from 'react'
import './ArtistListPage.css'
import './ListPageStyle.css'
import './../../component/library/ListComponentStyles.css'
import ArtistListSettings from "../../component/library/settings/ArtistListSettings";
import ArtistItem from "../../component/library/ArtistItem";
import ArtistPanelComponent from "../../component/ArtistPanelComponent";
import {$ArtistService} from "../../service/ArtistService";
import ArtistData from "../../model/ArtistData";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Routes} from "../../Routes";
import AlbumPanelComponent from "../../component/AlbumPanelCompinent";
import {$AlbumService} from "../../service/AlbumService";


export interface ArtistPageProps {
    services: $ArtistService & $AlbumService
}

export interface ArtistPageState {
    artistList: ArtistData[]
}

export class ArtistListPage extends React.Component<ArtistPageProps, ArtistPageState> {

    constructor(props: ArtistPageProps) {
        super(props);
        this.state = {
            artistList: this.props.services.artistService.getArtistList()
        }
    }

    render() {
        let artistList = this.state.artistList.map(data => {
            return (
                <div>
                    <ArtistItem data={data} link={Routes.LIBRARY_ARTISTS_ID(data.id)}/>
                </div>
            )
        })
        let artistPanel = () => (
            <div className="content-container">
                <ArtistPanelComponent services={this.props.services}/>
            </div>
        )
        let albumPanelComponent = () => (
            <div className="content-container">
                <AlbumPanelComponent services={this.props.services}/>
            </div>
        )

        return (
            <div>
                <div className="list-container">
                    <ArtistListSettings/>
                    {artistList}
                </div>
                <Router>
                    <Switch>
                        <Route path={Routes.LIBRARY_ARTIST_ALBUMS_ID(":artistId", ":albumId")} component={albumPanelComponent}/>
                        <Route path={Routes.LIBRARY_ARTISTS_ID(":artistId")} component={artistPanel}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default ArtistListPage