import './App.css';
import 'semantic-ui-css/semantic.min.css'

import React from 'react';
import {HashRouter as Router, Route, Link, Switch, RouteComponentProps} from 'react-router-dom'
import AudioPlayer from "./component/audioplayer/AudioPlayer";
import FavoriteTracksPage from "./page/library/FavoriteTracksPage"
import PlaylistListPage from "./page/library/PlaylistListPage"
import ArtistListPage from "./page/library/ArtistListPage";
import AlbumListPage from "./page/library/AlbumListPage";
import {ArtistService} from "./service/ArtistService";
import {AlbumService} from "./service/AlbumService";
import {AudioTrackService} from "./service/AudioTrackService";
import {Routes} from "./Routes";
import {LibraryApiClient} from "./service/api/LibraryApiClient";
import {PlaylistService} from "./service/PlaylistService";
import PlaylistDetailsPage, {RouterProps} from "./page/library/PlaylistDetailsPage";

export const Home = () => <h1>Home Page</h1>;
export const Library = () => <h1>Library Page</h1>;
export const Flow = () => <h1>Flow Page</h1>;
export const Settings = () => <h1>Settings Page</h1>;

let libraryApiClient = new LibraryApiClient()
let audioTrackService = new AudioTrackService({libraryApiClient})
let albumService = new AlbumService({audioTrackService})
let artistService = new ArtistService({albumService}, {libraryApiClient})
let playlistService = new PlaylistService({libraryApiClient})

export var services = {
    artistService: artistService,
    albumService: albumService,
    audioTrackService: audioTrackService,
    playlistService: playlistService
};

const artistListPage = () => (
    <ArtistListPage services={services}/>
)
const favoriteTracksPage = () => (
    <FavoriteTracksPage services={services}/>
)
const playlistListPage = () => (
    <PlaylistListPage services={services}/>
)
const albumListPage = () => (
    <AlbumListPage/>
)
const playlistDetailsPage = ({ match, history, location }: RouteComponentProps<RouterProps>) => (
    <PlaylistDetailsPage services={services} match={match} history={history} location={location}/>
)

export interface Props {

}

export class App extends React.Component<Props> {

    render() {
        return (
            <Router >
                <div className="App">
                    <div className="left-panel">
                        <div className="home-link">
                            <Link to="/">MoreMusic</Link>
                        </div>
                        <ul className="main-menu-container">
                            <li>
                                <Link to="/library">Library</Link>
                                <ul className="library-menu-container">
                                    <li><Link to={Routes.LIBRARY_FAVORITE_TRACKS}>Favorite Tracks</Link></li>
                                    <li><Link to={Routes.LIBRARY_PLAYLISTS}>Playlists</Link></li>
                                    <li><Link to={Routes.LIBRARY_ARTISTS}>Artists</Link></li>
                                    <li><Link to={Routes.LIBRARY_ALBUMS}>Albums</Link></li>
                                    <li><Link to={Routes.LIBRARY_RADIO}>Radio</Link></li>
                                    <li><Link to={Routes.LIBRARY_LISTENING_HISTORY}>Listening History</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/flow">Flow</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                        </ul>
                    </div>
                    <div className="audio-player-container">
                        <AudioPlayer/>
                    </div>
                    <div className="central-panel">
                        <div className="page-content">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/library" component={Library}/>
                                <Route exact path={Routes.LIBRARY_FAVORITE_TRACKS} component={favoriteTracksPage}/>
                                <Route exact path={Routes.LIBRARY_PLAYLISTS} component={playlistListPage}/>
                                <Route exact path={Routes.LIBRARY_ARTISTS + "*"} component={artistListPage}/>
                                <Route exact path={Routes.LIBRARY_ALBUMS + "*"} component={albumListPage}/>
                                <Route exact path="/flow" component={Flow}/>
                                <Route exact path="/settings" component={Settings}/>
                                <Route exact path={Routes.PLAYLIST_DETAILS} component={playlistDetailsPage}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
