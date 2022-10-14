const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/database');
const todoRouter = require('./routes/index.js');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/api', todoRouter);

async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();
