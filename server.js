  // Настройки
  const setup = {port:8000}
  // Подключаем express
  const express = require ('express');
  var expressVue = require("express-vue");
  // создаем приложение
  const app = express ();

  app.get('/api/test', (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://dbUser:<artem2508>@cluster0.ruyoy.mongodb.net/app?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
      const collection = client.db("app").collection("abnimes");
      // perform actions on the collection object
      client.close();
      res.send(err);
});
  });

  app.get('/*', (req, res) => res.sendFile('./dist/index.html', { root: __dirname }));

  app.listen(setup.port, () => {
    console.log('Сервер: порт %s - старт!', setup.port);
  });