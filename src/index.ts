import * as youtube from "./youtubeDownload";
import {LiveStreamingDetail} from "./model/liveStream";
import {Search} from "./model/activity";
import {writeDatabase} from "./firebase";
import {LiveStreamItem} from "./model/liveStreamItem";
import {LIVER_DATA, LiverData} from "./liverData";


(async function run() {
    for (let liverdatum of LIVER_DATA) {
        runForLiver(liverdatum);
    }
})();

async function runForLiver(liverdatum: LiverData) {
    const searches = await youtube.getSearchList(liverdatum.channelId);

    const videoIds = searches.map(value => value.videoId);

    const videos = await youtube.getVideosList(videoIds);

    const liveStreamItem = merge(searches, videos);

    writeDatabase(liverdatum.path, liveStreamItem);
}

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

        let video = videos.find(value => {
            return value.videoId === videoId;
        });

        if (video === undefined) {
            // 生放送のデータでない場合は空を設定する
            video = new LiveStreamingDetail(
                videoId,
                "",
                "",
                "",
            );
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