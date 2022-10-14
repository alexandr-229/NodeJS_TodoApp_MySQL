const server = require('./server');

class Controller {
    async getTodos(req, res) {
        try {
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async createTodo(req, res) {
        try {
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    editTodo(req, res) {
        try {
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    deleteTodo(req, res) {
        try {
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }
}

module.exports = new Controller();
