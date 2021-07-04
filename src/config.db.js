

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://dbUser:artem2508@cluster0.ruyoy.mongodb.net/app?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){

    const db = client.db("app");
    const collection = db.collection("animes");

    if(err) return console.log(err);

    collection.find().toArray(function(err, results){

        console.log(results);
        client.close();
    });
});