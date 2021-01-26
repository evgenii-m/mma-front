class PlaylistData {
    id: number
    title: string
    description?: string
    creationTime?: string
    active: boolean
    sync?: boolean
    type: string
    sourceUrl?: string
    tracksCount: number

    constructor(id: number, title: string, description: string, creationTime: string, active: boolean, sync: boolean,
                type: string, sourceUrl: string, tracksCount: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.creationTime = creationTime;
        this.active = active;
        this.sync = sync;
        this.type = type;
        this.sourceUrl = sourceUrl;
        this.tracksCount = tracksCount;
    }
}

export default PlaylistData