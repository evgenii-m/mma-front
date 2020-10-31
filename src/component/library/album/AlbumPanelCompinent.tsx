import './AlbumPanelCompinent.css'
import './../../../component/library/ListComponentStyles.css'
import React from 'react'
import {$AlbumService} from "../../../service/AlbumService";
import {useParams} from "react-router";

interface Props {
    services: $AlbumService
}

function AlbumPanelComponent(props: Props) {
    let {albumId} = useParams();
    let albumData = props.services.albumService.findAlbumById(albumId);

    return (
        <div className="album-panel">
            {albumData &&
            <div>
                <div className="panel-header">
                </div>
                {albumData.tracks &&
                <div className="album-tracks">
                    Tracks:
                    <ol className="album-tracks-container">
                        {albumData.tracks.map((track) =>
                            <li><a>{track.title} <span className="line-italic">({track.length})</span></a></li>
                        )}
                    </ol>
                </div>
                }
            </div>
            }
        </div>
    )
}

export default AlbumPanelComponent