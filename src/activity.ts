export class Activity {
    etag: string;
    id: string;
    title: string;
    publishedAt: string;
    channelId: string;
    description: string;
    thumbnailDefault: string;
    thumbnailMedium: string;
    thumbnailHigh: string;
    thumbnailStandard: string;
    thumbnailMaxres: string;
    videoId: string;

    constructor(etag: string, id: string, title: string, publishedAt: string, channelId: string, description: string, thumbnailDefault: string, thumbnailMedium: string, thumbnailHigh: string, thumbnailStandard: string, thumbnailMaxres: string, videoId: string) {
        this.etag = etag;
        this.id = id;
        this.title = title;
        this.publishedAt = publishedAt;
        this.channelId = channelId;
        this.description = description;
        this.thumbnailDefault = thumbnailDefault;
        this.thumbnailMedium = thumbnailMedium;
        this.thumbnailHigh = thumbnailHigh;
        this.thumbnailStandard = thumbnailStandard;
        this.thumbnailMaxres = thumbnailMaxres;
        this.videoId = videoId;
    }
}