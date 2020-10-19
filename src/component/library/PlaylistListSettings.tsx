import React from 'react'
import './SettingsComponentStyles.css'
import {Dropdown} from "semantic-ui-react";
import PlaylistsSortType from "../../model/enum/PlaylistsSortType";
import Utils from "../../misc/Utils";
import PlaylistsFilterType from "../../model/enum/PlaylistsFilterType";


const sortingDropdownOptions = Utils.convertToDropdownOptions([
    PlaylistsSortType.Manual,
    PlaylistsSortType.RecentlyAdded,
    PlaylistsSortType.RecentlyUpdated,
    PlaylistsSortType.Popularity,
    PlaylistsSortType.TitleAsc,
    PlaylistsSortType.TitleDesc
])
const filteringDropdownOptions = Utils.convertToDropdownOptions([
    PlaylistsFilterType.All,
    PlaylistsFilterType.Personal,
    PlaylistsFilterType.Public,
    PlaylistsFilterType.Deezer
])

const SortingDropdown = () => (
    <div className="dropdown-menu">
        <Dropdown fluid selection compact defaultValue={PlaylistsSortType.Manual} options={sortingDropdownOptions}/>
    </div>
)

const FilteringDropdown = () => (
    <div className="dropdown-menu">
        <Dropdown fluid selection compact defaultValue={PlaylistsFilterType.All} options={filteringDropdownOptions}/>
    </div>
)


function PlaylistListSettings() {
    return (
        <div className="settings-container">
            <SortingDropdown/>
            <FilteringDropdown/>
        </div>
    )
}

export default PlaylistListSettings