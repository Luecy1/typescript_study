import admin from "firebase-admin";

const app = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://data-api-10cce.firebaseio.com/'
});

export function writeDatabase(items: any[]) {

    app.database().ref("youtube_data/yukihanaramili").set(items, e => {
        if (e != null) {
            console.error(e);
        }
    }).then(_ => {
        console.log("write complete");
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
