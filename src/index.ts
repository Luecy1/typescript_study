import {writeDatabase} from "./firebase";
import * as youtube from "./youtubeDownload";

(async function run() {

    const searches = await youtube.getSearchList();

    writeDatabase(searches);
})();


