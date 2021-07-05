  // Настройки
  const setup = {port:8000}
  // Подключаем express
  const express = require ('express');
  const {Router} = require ('express');
  var expressVue = require("express-vue");
  // создаем приложение
  const app = express ();


  router.get('/api', (req, res) => {
    var getAnimeNews = require('./controller');
    getAnimeNews.then(
      results => {
        res.send(results);
      }
      );

});

app.get('/*', (req, res) => res.sendFile('./dist/index.html', { root: __dirname }));

  app.listen(setup.port, () => {
    console.log('Сервер: порт %s - старт!', setup.port);
  });