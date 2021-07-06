  // Настройки
  const setup = {port:8000}
  // Подключаем express
  const express = require ('express');
  // создаем приложение
  const app = express ();


  app.get('/api/news', (req, res) => {
    var getAnimeNews = require('./controller');
    getAnimeNews.then(
      results => {
        res.send(results);
      }
      );

});

app.get('/*', (req, res) => res.sendFile('./test.html', { root: __dirname }));

  app.listen(setup.port, () => {
    console.log('Сервер: порт %s - старт!', setup.port);
  });
