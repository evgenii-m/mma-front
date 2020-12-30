import './App.css';
import 'semantic-ui-css/semantic.min.css'

import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
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

export const Home = () => <h1>Home Page</h1>;
export const Library = () => <h1>Library Page</h1>;
export const Flow = () => <h1>Flow Page</h1>;
export const Settings = () => <h1>Settings Page</h1>;

let libraryApiClient = new LibraryApiClient()
let audioTrackService = new AudioTrackService({libraryApiClient})
let albumService = new AlbumService({audioTrackService})
let artistService = new ArtistService({albumService}, {libraryApiClient})

export var services = {
    artistService: artistService,
    albumService: albumService,
    audioTrackService: audioTrackService
};

const artistListPage = () => (
    <ArtistListPage services={services}/>
)
const favoriteTracksPage = () => (
    <FavoriteTracksPage services={services}/>
)
const playlistListPage = () => (
    <PlaylistListPage/>
)
const albumListPage = () => (
    <AlbumListPage/>
)

export interface Props {

}

export class App extends React.Component<Props> {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="left-panel">
                        <div className="home-link">
                            <Link to="/">MoreMusic</Link>
                        </div>
                        <ul className="main-menu-container">
                            <li>
                                <Link to="/library">Library</Link>
                                <ul className="library-menu-container">
                                    <li><Link to="/library/favorites">Favorite Tracks</Link></li>
                                    <li><Link to="/library/playlists">Playlists</Link></li>
                                    <li><Link to={Routes.LIBRARY_ARTISTS}>Artists</Link></li>
                                    <li><Link to={Routes.LIBRARY_ALBUMS}>Albums</Link></li>
                                    <li><Link to="/library/radio">Radio</Link></li>
                                    <li><Link to="/library/history">Listening History</Link></li>
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
                                <Route exact path="/library/favorites" component={favoriteTracksPage}/>
                                <Route exact path="/library/playlists" component={playlistListPage}/>
                                <Route exact path={Routes.LIBRARY_ARTISTS + "*"} component={artistListPage}/>
                                <Route exact path={Routes.LIBRARY_ALBUMS + "*"} component={albumListPage}/>
                                <Route exact path="/flow" component={Flow}/>
                                <Route exact path="/settings" component={Settings}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
