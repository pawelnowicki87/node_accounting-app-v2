const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.get);

router.get('/:id', userController.getOne);

router.patch('/:id', userController.update);

router.post('/', userController.create);

router.delete('/:id', userController.remove);

module.exports = {
  router,
};
