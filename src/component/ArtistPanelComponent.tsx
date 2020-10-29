import './ArtistPanelComponent.css'
import './../component/library/ListComponentStyles.css'
import React from 'react'
import ArtistData from "../model/ArtistData";

interface Props {
    data?: ArtistData
}

function ArtistPanelComponent(props: Props) {
    return (
        <div className="artist-panel">
            {props.data &&
            <div>
                <div className="header-title">{props.data.name}</div>
                <div className="header-image-container">
                    <img src={props.data.imageUrl} alt="Image"/>
                </div>
                <div className="header-info-container">
                    <div className="artist-listening-count line-bold-italic">Listening count: {props.data.listeningCount}</div>
                    {props.data.tags &&
                    <div>
                        Tags:
                        <ul className="tags-container">
                            {props.data.tags.map((tag) => <li><a href="#/library/artists">#{tag}</a></li>)}
                        </ul>
                    </div>
                    }
                    {props.data.lastFmLink &&
                    <div className="lookup-link-container">
                        <a href={props.data.lastFmLink}>Look up on last.fm</a>
                    </div>
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default ArtistPanelComponent