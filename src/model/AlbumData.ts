class AlbumData {
    id: number
    artist: string
    title: string
    yearOfCreation?: number


    constructor(id: number, artist: string, title: string, yearOfCreation: number) {
        this.id = id;
        this.artist = artist;
        this.title = title;
        this.yearOfCreation = yearOfCreation;
    }
}

export default AlbumData