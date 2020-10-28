import React from 'react'
import './ArtistListPage.css'
import ArtistListSettings from "../../component/library/settings/ArtistListSettings";
import ArtistData from "../../model/ArtistData";
import ArtistItem from "../../component/library/ArtistItem";

const ARTISTS_TEST_DATA: ArtistData[] = [
    new ArtistData(1, "Vangelis", "20.10.2020"),
    new ArtistData(2, "Oklou", "20.10.2020"),
    new ArtistData(3, "Connan Mockasin", "16.10.2020"),
    new ArtistData(4, "Mac Demarco", "10.10.2020"),
    new ArtistData(5, "Hype Williams", "5.10.2020")
]

function ArtistListPage() {
    let artistList = ARTISTS_TEST_DATA.map(data => {
        return (
            <div>
                <ArtistItem data={data}/>
            </div>
        )
    })

    return (
      <div>
          <div className="artist-list-container">
              <ArtistListSettings/>
              {artistList}
          </div>
      </div>
    );
}

export default ArtistListPage