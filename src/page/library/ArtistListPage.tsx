import React from 'react'
import './ArtistListPage.css'
import './ListPageStyle.css'
import './../../component/library/ListComponentStyles.css'
import ArtistListSettings from "../../component/library/settings/ArtistListSettings";
import ArtistData from "../../model/ArtistData";
import ArtistItem from "../../component/library/ArtistItem";

const ARTISTS_TEST_DATA: ArtistData[] = [
    new ArtistData(1, "Vangelis", 79,
        "https://lastfm.freetls.fastly.net/i/u/770x0/3cf7ec36b82b477b974bfb1f85be3c4f.webp#3cf7ec36b82b477b974bfb1f85be3c4f",
        "https://www.last.fm/music/Vangelis",
        ["electronic", "soundtrack", "ambient", "instrumental"]),
    new ArtistData(2, "Connan Mockasin", 300,
        "https://lastfm.freetls.fastly.net/i/u/770x0/8a9d132cfcda4a74af2ec74e1cce32b1.webp#8a9d132cfcda4a74af2ec74e1cce32b1",
        "https://www.last.fm/music/Connan+Mockasin",
        ["psychedelic", "experimental", "indie pop"]),
    new ArtistData(3, "Mac Demarco", 191,
        "https://lastfm.freetls.fastly.net/i/u/770x0/11674a69a759f5ca0264b6d967f81caf.webp#11674a69a759f5ca0264b6d967f81caf",
        "https://www.last.fm/music/Mac+DeMarco",
        ["lo-fi", "indie", "experimental", "indie rock"]),
    new ArtistData(4, "Hype Williams", 807,
        "https://lastfm.freetls.fastly.net/i/u/770x0/455f30fbcc9a49ee8fe453fdf9e22554.webp#455f30fbcc9a49ee8fe453fdf9e22554",
        "https://www.last.fm/music/Hype+Williams",
        ["electronic", "lo-fi", "experimental", "noise", "psychedelic"]),
    new ArtistData(5, "Boards of Canada", 1435,
        "https://lastfm.freetls.fastly.net/i/u/770x0/9d64c6eefade4d27baeb7d897887a4a4.webp#9d64c6eefade4d27baeb7d897887a4a4",
        "https://www.last.fm/music/Boards+of+Canada",
        ["electronic", "ambient", "idm", "chillout"])
]

function ArtistListPage() {
    let artistList = ARTISTS_TEST_DATA.map(data => {
        return (
            <div>
                <ArtistItem data={data}/>
            </div>
        )
    })
    let selectedArtistItem = ARTISTS_TEST_DATA[0];

    return (
        <div>
            <div className="list-container">
                <ArtistListSettings/>
                {artistList}
            </div>
            <div className="content-container">
                <div>
                    <div className="header-title">{selectedArtistItem.name}</div>
                    <div className="header-image-container">
                        <img src={selectedArtistItem.imageUrl} alt="Image"/>
                    </div>
                    <div className="header-info-container">
                        <div className="artist-listening-count line-bold-italic">Listening count: {selectedArtistItem.listeningCount}</div>
                        {selectedArtistItem.tags &&
                        <div>
                            Tags:
                            <ul className="tags-container">
                                {selectedArtistItem.tags.map((tag) => <li><a href="#/library/artists">#{tag}</a></li>)}
                            </ul>
                        </div>
                        }
                        {selectedArtistItem.lastFmLink &&
                        <div className="lookup-link-container">
                            <a href={selectedArtistItem.lastFmLink}>Look up on last.fm</a>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistListPage