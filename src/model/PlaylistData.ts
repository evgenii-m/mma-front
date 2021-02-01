import PlaylistShortData from "./PlaylistShortData";
import TrackData from "./TrackData";

class PlaylistData extends PlaylistShortData {
    tracks: TrackData[]

    constructor(id: number, title: string, description: string, creationTime: string,
                active: boolean, sync: boolean, type: string, sourceUrl: string,
                tracksCount: number, tracks: TrackData[]) {
        super(id, title, description, creationTime, active, sync, type, sourceUrl, tracksCount);
        this.tracks = tracks;
    }
}

export default PlaylistData