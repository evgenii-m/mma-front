import React from 'react'
import './SettingsComponentStyles.css'
import {Dropdown} from "semantic-ui-react";
import Utils from "../../../misc/Utils";
import AlbumSortType from "../../../model/enum/AlbumSortType";

const sortingDropdownOptions = Utils.convertToDropdownOptions([
    AlbumSortType.RecentlyAdded,
    AlbumSortType.Popularity,
    AlbumSortType.TitleAsc,
    AlbumSortType.TitleDesc
])

const SortingDropdown = () => (
    <div className="dropdown-menu">
        <Dropdown fluid selection compact defaultValue={AlbumSortType.RecentlyAdded} options={sortingDropdownOptions}/>
    </div>
)

function AlbumListSettings() {
    return (
        <div className="settings-container">
            <SortingDropdown/>
        </div>
    )
}

export default AlbumListSettings