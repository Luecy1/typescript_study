import admin from "firebase-admin";
import {Search} from "./activity";

const app = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://data-api-10cce.firebaseio.com/'
});

export function writeDatabase(searches: Search[]) {

    app.database().ref("youtube_data/yukihanaramili").set(searches, e => {
        if (e != null) {
            console.error(e);
        }
    }).then(_ => {
        console.log("complete");
    });
}

export function readDatabase() {
    app.database().ref("youtube_data/yukihanaramili")
        .orderByChild("publishedAt")
        .on("value", (snapshot, _) => {

            snapshot.forEach(a => {
                console.log("--------------");
                console.log(a.child("publishedAt").val());
            });
        });
}

readDatabase();