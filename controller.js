const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://dbUser:artem2508@cluster0.ruyoy.mongodb.net";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });


var newsData = function getAnimeNews(count) {
    mongoClient.connect(function(err, client){

        const db = client.db("app");
        const collection = db.collection("animes");

        if(err) {
            return(err);
        }

        collection.find().toArray(function(err, results){
            client.close();
            return(results);
        });
    });
}

module.exports = newsData;