import {writeDatabase} from "./firebase";
import {getActivities} from "./youtubeDownload";

(async function run() {

    const activities = await getActivities();

    // desc sort publishedAt
    activities.sort((a, b) => {
        return b.publishedAt.localeCompare(a.publishedAt);
    })

    writeDatabase(activities);
})();


