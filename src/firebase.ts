import admin from "firebase-admin";
import {Activity} from "./activity";

const app = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://data-api-10cce.firebaseio.com/'
});

export function writeDatabase(activities: Activity[]) {

    app.database().ref("youtube_data/yukihanaramili").set(activities, e => {
        if (e != null) {
            console.error(e);
        }
    }).then(r => {
        console.log("complete");
    })
}

export function readDatabase() {
    app.database().ref("youtube_data/yukihanaramili")
        .orderByChild("publishedAt")
        .on("value", (snapshot, b) => {

            snapshot.forEach(a => {
                console.log("--------------");
                console.log(a.child("publishedAt").val());
            });
        });
}

readDatabase();