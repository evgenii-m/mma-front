import React from 'react'
import './ListComponentStyles.css'
import AlbumData from "../../model/AlbumData";

interface Props {
    data: AlbumData
}

function AlbumItem(props: Props) {
    return (
        <div className="list-item-container">
            <div className="line-bold">{props.data.artist}</div>
            <div className="line-bold-italic">{props.data.title} - {props.data.yearOfCreation}</div>
        </div>
    )
}

export default AlbumItem