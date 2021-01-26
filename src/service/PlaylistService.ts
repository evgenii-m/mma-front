import {$LibraryApiClient} from "./api/LibraryApiClient";
import PlaylistData from "../model/PlaylistData";
import PageableResponse from "./api/model/PageableResponse";


export class PlaylistService {
    constructor(
        private clients: $LibraryApiClient
    ) {
    }

    getPlaylistList(): Promise<PageableResponse<PlaylistData[]>> {
        return this.clients.libraryApiClient.getUserPlaylists();
    }
}

export type $PlaylistService = { playlistService: PlaylistService }