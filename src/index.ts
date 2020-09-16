import * as https from 'https';
import * as querystring from 'querystring';
import {Activity} from "./activity";

const config = require('config');

// fetch config/default.json
const api = config.get("Youtube.apikey");

const activity_url = "https://www.googleapis.com/youtube/v3/activities";

const query = {
    key: api,
    channelId: "UCFKOVgVbGmX65RxO3EtH3iw",
    part: "id,snippet,contentDetails"
}

const url = activity_url + "?" + querystring.encode(query);

console.log(url);

const request = https.get(url, res => {

    let data = "";

    res.on("data", chunk => {
        data += chunk;
    })

    res.on("end", () => {
        let resData = JSON.parse(data)

        const activityArray: Activity[] = [];

        for (let itemsKey in resData.items) {
            const item = resData.items[itemsKey];
            const snippet = item.snippet;

            const activity = new Activity(
                item.etag,
                item.id,
                snippet.title,
                snippet.publishedAt,
                snippet.channelId,
                snippet.description,
                snippet.thumbnails.default.url,
                snippet.thumbnails.medium.url,
                snippet.thumbnails.high.url,
                snippet.thumbnails.standard.url,
                snippet.thumbnails.maxres.url,
                item.contentDetails.upload.videoId
            );

            activityArray.push(activity);
        }

        console.log(activityArray);
    })
})

function upload() {

}