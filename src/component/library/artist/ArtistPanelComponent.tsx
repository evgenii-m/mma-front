import './ArtistPanelComponent.css'
import './../../../component/library/ListComponentStyles.css'
import React from 'react'
import {Link, useParams} from 'react-router-dom';
import {$ArtistService} from "../../../service/ArtistService";
import {Routes} from "../../../Routes";

interface Props {
    services: $ArtistService
}

function ArtistPanelComponent(props: Props) {
    let {artistId} = useParams();
    let artistData = props.services.artistService.findArtistById(artistId);

    return (
        <div className="artist-panel">
            {artistData &&
            <div>
                <div className="panel-header">
                    <div className="header-title">{artistData.name}</div>
                    <div className="header-image-container">
                        <img src={artistData.imageUrl} alt="Image"/>
                    </div>
                    <div className="header-info-container">
                        <div className="artist-listening-count line-bold-italic">Listening count: {artistData.listeningCount}</div>
                        {artistData.tags &&
                        <div>
                            Tags:
                            <ul className="tags-container">
                                {artistData.tags.map((tag) => <li><a href="#/library/artists">#{tag}</a></li>)}
                            </ul>
                        </div>
                        }
                        {artistData.lastFmLink &&
                        <div className="lookup-link-container">
                            <a href={artistData.lastFmLink}>Look up on last.fm</a>
                        </div>
                        }
                    </div>
                </div>
                {artistData.albums &&
                <div className="discography-list">
                    Albums:
                    <ul className="discography-list-container">
                        {artistData.albums.map((album) =>
                            <li><Link to={Routes.LIBRARY_ARTIST_ALBUMS_ID(artistData?.id, album.id)}>
                                {album.title} <span className="line-italic">({album.yearOfCreation})</span>
                            </Link></li>
                        )}
                    </ul>
                </div>
                }
            </div>
            }
        </div>
    )
}

export default ArtistPanelComponent