import React from 'react'
import './AudioPlayer.css'
import {Dropdown} from "semantic-ui-react";

const ActionsDropdownMenu = () => (
    <Dropdown text='Actions' className="actions-dropdown-menu">
        <Dropdown.Menu>
            <Dropdown.Item text='Like' />
            <Dropdown.Item text='Show on Last.fm' />
        </Dropdown.Menu>
    </Dropdown>
)

function AudioPlayer() {
    return (
      <div className="audio-player-container" id="audioPlayerContainer">
          <div className="previous audio-player-button"/>
          <div className="play audio-player-button"/>
          <div className="next audio-player-button"/>
          <input type="range" min="1" max="100" defaultValue="50" className="audio-player-slider"/>
          <ActionsDropdownMenu/>
          <div className="like audio-player-button"/>
          <div className="audio-player-icon"/>
          <input type="range" min="1" max="100" defaultValue="90" className="volume-slider audio-player-slider"/>
      </div>
    )
}

export default AudioPlayer;
