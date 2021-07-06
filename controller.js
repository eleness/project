

    const MongoClient = require("mongodb").MongoClient;

    const url = "mongodb+srv://dbUser:artem2508@cluster0.ruyoy.mongodb.net";
    const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

var getAnimeNews = new Promise(function (resolve, reject) {
    mongoClient.connect(function(err, client){
        const db = client.db("app");
        const collection = db.collection("animes");

        if(err) {
            return err;
        }

        collection.find().toArray(function(err, results){
            resolve(results);
            client.close();
        });
    });
});

module.exports = getAnimeNews;

