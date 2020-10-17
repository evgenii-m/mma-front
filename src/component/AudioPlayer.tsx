import React from 'react'
import './AudioPlayer.css'
import {Button, Dropdown} from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'

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
          <Button className="audio-player-button previous">Prev</Button>
          <Button className="audio-player-button play">Play</Button>
          <Button className="audio-player-button next">Next</Button>
          <input type="range" min="1" max="100" defaultValue="50" className="audio-player-slider"/>
          <ActionsDropdownMenu/>
          <Button className="audio-player-button like">Like</Button>
          <Icon className="audio-player-icon" name='volume up' size='large'/>
          <input type="range" min="1" max="100" defaultValue="90" className="volume-slider audio-player-slider"/>
      </div>
    )
}

export default AudioPlayer;
