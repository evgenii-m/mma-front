import React from 'react'
import './SettingsComponentStyles.css'
import {Dropdown} from "semantic-ui-react";
import Utils from "../../misc/Utils";
import TracksSortType from "../../model/enum/TracksSortType";


const sortingDropdownOptions = Utils.convertToDropdownOptions([
    TracksSortType.RecentlyAdded,
    TracksSortType.RecentlyUpdated,
    TracksSortType.Popularity,
    TracksSortType.Manual,
    TracksSortType.ArtistAsc,
    TracksSortType.ArtistDesc,
    TracksSortType.TitleAsc,
    TracksSortType.TitleDesc
])

const SortingDropdown = () => (
    <div className="dropdown-menu">
        <Dropdown fluid selection compact defaultValue={TracksSortType.RecentlyAdded} options={sortingDropdownOptions}/>
    </div>
)

function FavoriteTracksSettings() {
    return (
        <div className="settings-container">
            <SortingDropdown/>
        </div>
    )
}

export default FavoriteTracksSettings