import AlbumData from "./AlbumData";

class ArtistData {
    id: number
    name: string
    listeningCount: number
    imageUrl: string
    lastFmLink?: string
    tags?: string[] = []
    albums?: AlbumData[] = []

    constructor(id: number, name: string, listeningCount: number, imageUrl: string, lastFmLink: string, tags?: string[],
                albums?: AlbumData[]) {
        this.id = id;
        this.name = name;
        this.listeningCount = listeningCount;
        this.imageUrl = imageUrl;
        this.lastFmLink = lastFmLink;
        this.tags = tags;
        this.albums = albums;
    }
}

export default ArtistData