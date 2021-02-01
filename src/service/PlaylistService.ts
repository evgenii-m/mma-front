import {$LibraryApiClient} from "./api/LibraryApiClient";
import PlaylistShortData from "../model/PlaylistShortData";
import PageableResponse from "./api/model/PageableResponse";
import PlaylistData from "../model/PlaylistData";
import CommonResponse from "./api/model/CommonResponse";


export class PlaylistService {
    constructor(
        private clients: $LibraryApiClient
    ) {
    }

    getPlaylistList(): Promise<PageableResponse<PlaylistShortData[]>> {
        return this.clients.libraryApiClient.getUserPlaylists();
    }

    getPlaylistDetails(playlistId: number): Promise<CommonResponse<PlaylistData>> {
        return this.clients.libraryApiClient.getPlaylistDetails(playlistId);
    }
}

export type $PlaylistService = { playlistService: PlaylistService }