import * as youtube from "./youtubeDownload";
import {LiveStreamingDetail} from "./model/liveStream";
import {Search} from "./model/activity";
import {writeDatabase} from "./firebase";
import {LiveStreamItem} from "./model/liveStreamItem";
import {LIVER_DATA} from "./liverData";

(async function run() {

    const channelid = LIVER_DATA[0].channelId;
    const path = LIVER_DATA[0].path

    const searches = await youtube.getSearchList(channelid);

    const videoIds = searches.map(value => value.videoId);

    const videos = await youtube.getVideosList(videoIds);

    const liveStreamItem = merge(searches, videos);

    writeDatabase(path, liveStreamItem);
})();

// searchの結果とvideoの結果を混ぜる
function merge(searches: Search[], videos: LiveStreamingDetail[]): LiveStreamItem[] {

    const videoIds = searches.map(value => value.videoId);

    const liveStreamItems: LiveStreamItem[] = [];

    for (let videoId of videoIds) {
        const search = searches.find(value => {
            return value.videoId === videoId;
        });

        if (search === undefined) {
            continue;
        }

        const video = videos.find(value => {
            return value.videoId === videoId;
        });

        if (video === undefined) {
            continue;
        }

        const liveStreamItem = new LiveStreamItem(
            search.videoId,
            search.publishedAt,
            search.channelId,
            search.title,
            search.description,
            search.thumbnailDefault,
            search.thumbnailMedium,
            search.thumbnailHigh,
            search.liveBroadcastContent,
            search.publishTime,
            video.actualStartTime,
            video.actualEndTime,
            video.scheduledStartTime,
        );

        liveStreamItems.push(liveStreamItem);
    }

    return liveStreamItems;
}