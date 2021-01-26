export class Routes {

    static LIBRARY_FAVORITE_TRACKS = "/library/favorites"

    static LIBRARY_PLAYLISTS = "/library/playlists"
    static LIBRARY_RADIO = "/library/radio"
    static LIBRARY_LISTENING_HISTORY = "/library/history"

    static LIBRARY_ARTISTS = "/library/artists"
    static LIBRARY_ARTISTS_ID(artistId: any) {
        return Routes.LIBRARY_ARTISTS + "/" + artistId
    }
    static LIBRARY_ARTIST_ALBUMS(artistId: any) {
        return Routes.LIBRARY_ARTISTS + "/" + artistId + "/albums"
    }
    static LIBRARY_ARTIST_ALBUMS_ID(artistId: any, albumId: any) {
        return Routes.LIBRARY_ARTISTS + "/" + artistId + "/albums/" + albumId
    }

    static LIBRARY_ALBUMS = "/library/albums"
    static LIBRARY_ALBUMS_ID(albumId: any) {
        return Routes.LIBRARY_ALBUMS + "/" + albumId
    }

}