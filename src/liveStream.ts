export class LiveStreamingDetails {
    videoId: string;
    actualStartTime: string;
    actualEndTime: string;
    scheduledStartTime: string;

    constructor(videoId: string, actualStartTime: string, actualEndTime: string, scheduledStartTime: string) {
        this.videoId = videoId;
        this.actualStartTime = actualStartTime;
        this.actualEndTime = actualEndTime;
        this.scheduledStartTime = scheduledStartTime;
    }
}