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


export interface ArtistPageProps {
    services: $ArtistService
}

export interface ArtistPageState {
    artistList: ArtistData[]
    selectedArtistItem: ArtistData | undefined
}

export class ArtistListPage extends React.Component<ArtistPageProps, ArtistPageState> {

    constructor(props: ArtistPageProps) {
        super(props);
        this.state = {
            artistList: this.props.services.artistService.getArtistList(),
            selectedArtistItem: this.props.services.artistService.getArtistDataById(1)
        }
    }

    render() {
        let artistList = this.state.artistList.map(data => {
            return (
                <div>
                    <ArtistItem data={data}/>
                </div>
            )
        })
        let artistPanel = () => (
            <ArtistPanelComponent services={this.props.services}/>
        )

        return (
            <div>
                <div className="list-container">
                    <ArtistListSettings/>
                    {artistList}
                </div>

                <div className="content-container">
                    <Router>
                        <Switch>
                            <Route path="/library/artists/:artistId" component={artistPanel}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default ArtistListPage