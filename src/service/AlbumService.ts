import AlbumData from "../model/AlbumData";
import {$AudioTrackService} from "./AudioTrackService";

const ALBUMS_TEST_DATA: AlbumData[] = [
    new AlbumData(1, "Oklou", "Avril", 2014),
    new AlbumData(2, "Dirty Art Club", "Basement Seance", 2017),
    new AlbumData(3, "Leon Bridges", "Coming Home", 2015),
    new AlbumData(4, "Blockhead", "Quar and Peace", 2020),
    new AlbumData(5, "Sarah Vaughan", "Original Album Series", 2015),
    new AlbumData(6, "Boards of Canada, Warp Records", "Peel Session", 2019)
]

export class AlbumService {
    constructor(private services: $AudioTrackService) {
    }

    findAlbumsByArtistId(artistId: number): AlbumData[] {
        return ALBUMS_TEST_DATA
    }

    findAlbumById(albumId: number): AlbumData | undefined {
        let albumData = ALBUMS_TEST_DATA.find(data => data.id == albumId)
        if (albumData) {
            let albumTracks = this.services.audioTrackService.findTracksByAlbumId(albumId)
            albumData.tracks = albumTracks
        }
        return albumData
    }
}

export type $AlbumService = { albumService: AlbumService }