import React from 'react'
import './SettingsComponentStyles.css'
import {Dropdown} from "semantic-ui-react";
import Utils from "../../../misc/Utils";
import ArtistsSortType from "../../../model/enum/ArtistsSortType";


const sortingDropdownOptions = Utils.convertToDropdownOptions([
    ArtistsSortType.RecentlyAdded,
    ArtistsSortType.Popularity,
    ArtistsSortType.NameAsc,
    ArtistsSortType.NameDesc
])

const SortingDropdown = () => (
    <div className="dropdown-menu">
        <Dropdown fluid selection compact defaultValue={ArtistsSortType.RecentlyAdded} options={sortingDropdownOptions}/>
    </div>
)

function ArtistListSettings() {
    return (
        <div className="settings-container">
            <SortingDropdown/>
        </div>
    )
}

export default ArtistListSettings