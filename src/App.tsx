import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AudioPlayer from "./component/AudioPlayer";
import FavoriteTracksPage from "./page/FavoriteTracksPage"
import PlaylistsPage from "./page/PlaylistsPage"
import './App.css';
import 'semantic-ui-css/semantic.min.css'

export const Home = () => <h1>Home Page</h1>;
export const Library = () => <h1>Library Page</h1>;
export const Flow = () => <h1>Flow Page</h1>;
export const Settings = () => <h1>Settings Page</h1>;

function App() {
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
                            <li><Link to="/library/artists">Artists</Link></li>
                            <li><Link to="/library/albums">Albums</Link></li>
                            <li><Link to="/library/radio">Radio</Link></li>
                            <li><Link to="/library/history">Listening History</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/flow">Flow</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </div>
                <div className="central-panel">
                    <AudioPlayer/>
                    <div className="page-content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/library" component={Library}/>
                            <Route exact path="/library/favorites" component={FavoriteTracksPage}/>
                            <Route exact path="/library/playlists" component={PlaylistsPage}/>
                            <Route exact path="/flow" component={Flow}/>
                            <Route exact path="/settings" component={Settings}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
