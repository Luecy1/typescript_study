import * as youtube from "./youtubeDownload";

(async function run() {

    const searches = await youtube.getSearchList();

    const videoIds = searches.map(value => value.videoId);

    const videos = await youtube.getVideosList(videoIds);

    console.log(videos);

    // writeDatabase(searches);
})();


