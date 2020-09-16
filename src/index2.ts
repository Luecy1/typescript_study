import admin from "firebase-admin";

const app = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://data-api-10cce.firebaseio.com/'
});


app.database().ref("youtube_data/yukihanaramili").on("value", (snapshot, b) => {
    console.log(snapshot.val());
})