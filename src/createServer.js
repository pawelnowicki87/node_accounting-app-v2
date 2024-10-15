'use strict';

const express = require('express');
const cors = require('cors');

const { router: userRouter } = require('./routes/userRoute');
const { router: expensesRoute } = require('./routes/expensesRoute');
const { data } = require('./data');

function createServer() {
  const app = express();

  data.expenses = [];
  data.users = [];
  data.nextId = 1;

  app.use(cors());

  app.use(express.json());

  app.use('/users', userRouter);
  app.use('/expenses', expensesRoute);

  return app;
}

module.exports = {
  createServer,
};
