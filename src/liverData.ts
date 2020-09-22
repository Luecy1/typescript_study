class LiverData {
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
    new LiverData("雪花ラミィ", "youtube_data/yukihanaramili", "UCFKOVgVbGmX65RxO3EtH3iw"),
]