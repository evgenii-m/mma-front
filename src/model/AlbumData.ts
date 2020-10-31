import TrackData from "./TrackData";

class AlbumData {
    id: number
    artist: string
    title: string
    yearOfCreation?: number
    tracks?: TrackData[]

    constructor(id: number, artist: string, title: string, yearOfCreation: number, tracks?: TrackData[]) {
        this.id = id;
        this.artist = artist;
        this.title = title;
        this.yearOfCreation = yearOfCreation;
        this.tracks = tracks
    }
}

export default AlbumData