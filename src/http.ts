import * as https from 'https';

export function get(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const request = https.get(url, res => {
            let data = "";

            res.on("data", chunk => {
                data += chunk;
            });

            res.on("end", () => {
                resolve(data);
            });

            res.on("error", () => {
                reject();
            });
        });
    });
}

