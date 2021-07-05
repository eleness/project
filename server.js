  // Настройки
  const setup = {port:8000}
  // Подключаем express
  const express = require ('express');
  var expressVue = require("express-vue");
  // создаем приложение
  const app = express ();

  app.get('/api/news', (req, res) => {
    let newsData = require('./controller')
    res.send(newsData());
});

  app.get('/*', (req, res) => res.sendFile('./dist/index.html', { root: __dirname }));

  app.listen(setup.port, () => {
    console.log('Сервер: порт %s - старт!', setup.port);
  });