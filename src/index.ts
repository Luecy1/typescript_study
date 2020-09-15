import * as https from 'https'

const config = require('config');

const api = config.get("Youtube.apikey");

const url = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=" + api + "&part=snippet,contentDetails,statistics,status";


const request = https.request(url, res => {

    let data = "";

    res.on("data", chunk => {
        data += chunk;
    })

    res.on("end", () => {
        let resData = JSON.parse(data)

        console.log(resData.kind)
    })
})

request.end()