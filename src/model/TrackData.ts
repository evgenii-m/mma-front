class TrackData {
    number?: number
    artist: string
    title: string
    album?: string
    length: number
    added?: string

    constructor(number: number, artist: string, track: string, album: string, length: number, added: string) {
        this.number = number;
        this.artist = artist;
        this.title = track;
        this.album = album;
        this.length = length;
        this.added = added;
    }
}

export default TrackData