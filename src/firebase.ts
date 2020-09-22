import admin from "firebase-admin";

const app = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://data-api-10cce.firebaseio.com/'
});

export function writeDatabase(path: string, items: any[]) {

    app.database().ref(path).set(items, e => {
        if (e != null) {
            console.error(e);
        }
    }).then(_ => {
        console.log(`${path} write complete`);
    });
}

export function readDatabase(path: string) {
    app.database().ref(path)
        .orderByChild("publishedAt")
        .on("value", (snapshot, _) => {

            snapshot.forEach(a => {
                console.log("--------------");
                console.log(a.child("publishedAt").val());
            });
        });
}
