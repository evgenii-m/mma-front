import axios from 'axios';
import TrackData from "../../model/TrackData";
import PageableResponse from "./model/PageableResponse";
import PlaylistData from "../../model/PlaylistData";

enum LibraryApiEndpoint {
    GET_FAVORITES = "/library/favorites",
    GET_PLAYLISTS = "/library/playlists",
}

const BASE_ADDRESS = "http://localhost:8081";
const DEFAULT_TOKEN = "Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..cnXD_ez09htr9z8CMzmj4g.UAgoPJ9hBV0aLRWVyxvRqae5b9oOYCKRbqjTdt1LJNxLpd1-Oyg1jrgkPzTvlkblWdRdSHW9K_lQvE2mcQ6ZgAWqPzp9Rnkm9QwKvd2kpqh-RMqBvs6YjmBkKU_OOSX_SD0Za-QYmoq_4SllhVlNuebHbWaCInnsKxnEy9ft_sivRCjmJuPspZbwpclw2yyaeBSOomDy9eIwkTiSvZiBBYgWGhoXr6ua1rcGUETreHVvcJcowl18fsCAZRqKLp9SfjAZWzWiajKVKWqloHWZCLb0x_JBVACf-3uYDJBDQTNBhlkHwnle15uG6cNveUOKcT3NVoYzqXFewvwvli2MjjqOoduw0pv91u4NVfz2O1nI9MySFOGdYgJSpN2xEpR4fw64DK1dqW5zG_iNSWVIE6Lzww4CWpwdTIvbUylBvYQEvlqlcJIeKaWQWrhABxbO86rI-ND5N8BQrxR3sXrjsk7LyRxqiAAPKt4y5qSPz8YI6YzONS-5aOF2mAq3CC5-Zh8xf2UdTusYiN32wVK2wbz_6onbsEIOE0kl1a2bo1hwzdjQwAsRzM9HusEh1x-cjdAoi3gMIMpssmk2f3exLN8GkXQhcBrHYON4rysEBj2thD6gTsPVq92pywiStVszp139gIBpEGlPDJObR80sP_FOQXfU_Np7fR49TppHND9iCSYnumlQo2dwmb9jxvKBWYJa2k2I9JkzWKxkydlXeduQUkWI1QE4nV2wYCgeZ4DANz_5FPTXIyKVwfDS3-CJmB0vxN1ffAsP3_x4gu0pZK9YHTKHvYrBVmU8LpHkcIS4thTHMaZlFlGICEIeo-4hze_NbyeNKxB7RewGcB0AS8dR0VFiLAYs3f_rlcSJ2Y41NYx0jJrRpk2T6VyK5pcz6nLpgEzefOOeVpmTUeJqaIknMpVa5JKjqjWJzLEA0ro1VNaiWpB7KIVYnLbUm9JvRRDXwNo3YaStGYcasrw6ja1Dy8M7pEwbb2iQownpc8Qqk08KCPJnQ0_ZaywqB2xvWVJGbAOwo1Eprd7K6ARWmfglQdF28L1jG1tzOdiYelgbn1mu9lVEk8HXbDjgrSkHY_TfZLqlYgxUKWpsRxxcm795IP1ksVIpq-Mk27DOc25Nto9-tzk8ZpxcwKXx3knL0LHwDEOyX8wVjDmuZUg7tUv_UCan_BqeQs7DXOY6nkI.4W9bVK7zXtfjChw84HNCcA"

export class LibraryApiClient {

    async getUserFavoriteTracks(): Promise<PageableResponse<TrackData[]>> {
        let axiosResponse = await axios
            .get<PageableResponse<TrackData[]>>(
                BASE_ADDRESS + LibraryApiEndpoint.GET_FAVORITES,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": DEFAULT_TOKEN
                    }
                }
            )
        return axiosResponse.data
    }

    async getUserPlaylists(): Promise<PageableResponse<PlaylistData[]>> {
        let axiosResponse = await axios
            .get<PageableResponse<PlaylistData[]>>(
                BASE_ADDRESS + LibraryApiEndpoint.GET_PLAYLISTS,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": DEFAULT_TOKEN
                    }
                }
            )
        return axiosResponse.data
    }

}

export type $LibraryApiClient = { libraryApiClient: LibraryApiClient }