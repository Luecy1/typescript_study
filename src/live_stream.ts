export class liveStreamingDetails {
    actualStartTime: string;
    actualEndTime: string;
    scheduledStartTime: string;

    constructor(actualStartTime: string, actualEndTime: string, scheduledStartTime: string) {
        this.actualStartTime = actualStartTime;
        this.actualEndTime = actualEndTime;
        this.scheduledStartTime = scheduledStartTime;
    }
}