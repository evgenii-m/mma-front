import ArtistData from "../model/ArtistData";
import {$AlbumService} from "./AlbumService";
import {$LibraryApiClient} from "./api/LibraryApiClient";


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

export class ArtistService {
    constructor(
        private services: $AlbumService,
        private clients: $LibraryApiClient
    ) {
    }

    getArtistList(): ArtistData[] {
        return ARTISTS_TEST_DATA
    }

    findArtistById(artistId: number): ArtistData | undefined {
        let artistData = ARTISTS_TEST_DATA.find(data => data.id === artistId)
        if (artistData) {
            let artistAlbumsData = this.services.albumService.findAlbumsByArtistId(artistId);
            artistData.albums = artistAlbumsData
        }
        return artistData
    }
}

export type $ArtistService = { artistService: ArtistService }