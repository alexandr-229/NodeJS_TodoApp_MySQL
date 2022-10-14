const server = require('./server');

class Controller {
    async getTodos(req, res) {
        try {
            const todos = await server.getTodos();
            res.status(200).json(todos);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async createTodo(req, res) {
        try {
            const { title } = req.body;
            const todo = await server.createTodo(title);
            res.status(201).json(todo);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async editTodo(req, res) {
        try {
            const todo = await server.editTodo(+req.params.id, req.body.isDone);
            res.status(200).json(todo);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async deleteTodo(req, res) {
        try {
            await server.deleteTodo(+req.params.id);
            res.status(204).json({});
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }
}

module.exports = new Controller();
