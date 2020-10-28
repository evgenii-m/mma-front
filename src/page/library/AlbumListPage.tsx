import React from 'react'
import './ArtistListPage.css'
import './ListPageStyle.css'
import AlbumListSettings from "../../component/library/settings/AlbumListSettings";
import AlbumData from "../../model/AlbumData";
import AlbumItem from "../../component/library/AlbumItem";

const ALBUMS_TEST_DATA: AlbumData[] = [
    new AlbumData(1, "Oklou", "Avril", 2014),
    new AlbumData(2, "Dirty Art Club", "Basement Seance", 2017),
    new AlbumData(3, "Leon Bridges", "Coming Home", 2015),
    new AlbumData(4, "Blockhead", "Quar and Peace", 2020),
    new AlbumData(5, "Sarah Vaughan", "Original Album Series", 2015),
    new AlbumData(5, "Boards of Canada, Warp Records", "Peel Session", 2019)
]

function AlbumListPage() {
    let albumList = ALBUMS_TEST_DATA.map(data => {
        return (
            <div>
                <AlbumItem data={data}/>
            </div>
        )
    })

    return (
      <div>
          <div className="list-container">
              <AlbumListSettings/>
              {albumList}
          </div>
      </div>
    );
}

export default AlbumListPage