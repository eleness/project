  // Настройки
  const setup = {port:81}
  // Подключаем express
  const express = require ('express');
  var expressVue = require("express-vue");
  // создаем приложение
  const app = express ();
  // Маршрутизируем GET-запрос http://ваш_сайт/test
  app.get('/api/test', (req, res) => {
    res.send('Тест');
  });

  // Слушаем порт и при запуске сервера сообщаем
  app.listen(setup.port, () => {
    console.log('Сервер: порт %s - старт!', setup.port);
  });