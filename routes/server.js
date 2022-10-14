const Todo = require('../models/todo');

class Server {
    async getTodos() {
        return await Todo.findAll();
    }

    async createTodo(title) {
        try {
            return await Todo.create({
                title,
                done: false,
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    async editTodo(id, isDone) {
        const todo = await Todo.findByPk(id);
        todo.done = isDone;
        await todo.save();
        return todo;
    }

    async deleteTodo(id) {
        const todos = await Todo.findAll({
            where: {
                id,
            },
        });
        await todos[0].destroy();
    }
}

module.exports = new Server();
