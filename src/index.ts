import * as https from 'https';
import * as querystring from 'querystring';

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

        console.log(resData.items)
    })
})
// request.end()

