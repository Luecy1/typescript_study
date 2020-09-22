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
    new LiverData("ロボ子さん", "youtube_data/robocosan", "UCDqI2jOz0weumE8s7paEk6g"),
    new LiverData("さくらみこ", "youtube_data/sakuramiko35", "UC-hM6YJuNYVAmUWxeIr9FeA"),
    new LiverData("星街すいせい", "youtube_data/suisei_hosimati", "UC5CwaMl1eIgY8h02uZw7u8A"),
    new LiverData("夜空メル", "youtube_data/yozoramel", "UCD8HOxPs4Xvsm8H0ZxXGiBw"),
    new LiverData("アキ・ローゼンタール", "youtube_data/akirosenthal", "UCFTLzh12_nrtzqBPsTCqenA"),
    new LiverData("赤井はあと", "youtube_data/akaihaato", "UC1CfXB_kRs3C-zaeTG3oGyg"),
    new LiverData("白上フブキ", "youtube_data/shirakamifubuki", "UCdn5BQ06XqgXoAxIhbqw5Rg"),
    new LiverData("雪花ラミィ", "youtube_data/yukihanalamy", "UCFKOVgVbGmX65RxO3EtH3iw"),
]