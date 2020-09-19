import querystring from "querystring";
import {get} from "./http";
import {Activity} from "./activity";

const config = require('config');

// fetch config/default.json
const api = config.get("Youtube.apikey");

export async function getActivities(): Promise<Activity[]> {

    const activity_url = "https://www.googleapis.com/youtube/v3/activities";

    const query = {
        key: api,
        channelId: "UCFKOVgVbGmX65RxO3EtH3iw",
        part: "id,snippet,contentDetails",
        maxResults: 25
    }

    const url = activity_url + "?" + querystring.encode(query);

    const data = await get(url);

    let resData = JSON.parse(data)

    const activities: Activity[] = [];

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

        activities.push(activity);
    }

    return activities;
}

export async function getVideosList() {

}

export async function getSearchList() {

    const searchUrl = "https://www.googleapis.com/youtube/v3/search";

    const query = {
        key: api,
        channelId: "UCFKOVgVbGmX65RxO3EtH3iw",
        part: "id,snippet",
        order: "date",
    }


}