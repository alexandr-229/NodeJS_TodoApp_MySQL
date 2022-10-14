const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getTodos);

router.post('/', controller.createTodo);

router.put('/:id', controller.editTodo);

router.delete('/:id', controller.deleteTodo);

module.exports = router;
