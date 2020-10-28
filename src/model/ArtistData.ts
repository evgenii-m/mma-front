class ArtistData {
    id: number
    name: string
    listeningCount: number
    imageUrl: string
    lastFmLink?: string
    tags?: string[] = []

    constructor(id: number, name: string, listeningCount: number, imageUrl: string, lastFmLink: string, tags?: string[]) {
        this.id = id;
        this.name = name;
        this.listeningCount = listeningCount;
        this.imageUrl = imageUrl;
        this.lastFmLink = lastFmLink;
        this.tags = tags;
    }
}

export default ArtistData