class Activity {
    etag: string;
    id: string;
    title: string;
    publishedAt: string;
    channelId: string;
    description: string;
    thumbnailHigh: string;
    thumbnailDefault: string;
    videoId: string;

    constructor(etag: string, id: string, title: string, publishedAt: string, channelId: string, description: string, thumbnailHigh: string, thumbnailDefault: string, videoId: string) {
        this.etag = etag;
        this.id = id;
        this.title = title;
        this.publishedAt = publishedAt;
        this.channelId = channelId;
        this.description = description;
        this.thumbnailHigh = thumbnailHigh;
        this.thumbnailDefault = thumbnailDefault;
        this.videoId = videoId;
    }
}