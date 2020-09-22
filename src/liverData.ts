export class LiverData {
    name: string;
    path: string;
    channelId: string;

    constructor(name: string, path: string, channelId: string) {
        this.name = name;
        this.path = path;
        this.channelId = channelId;
    }
}

export const LIVER_DATA: LiverData[] = [
    new LiverData("ときのそら", "youtube_data/tokino_sora", "UCp6993wxpyDPHUpavwDFqgg"),
    new LiverData("雪花ラミィ", "youtube_data/yukihanalamy", "UCFKOVgVbGmX65RxO3EtH3iw"),
]