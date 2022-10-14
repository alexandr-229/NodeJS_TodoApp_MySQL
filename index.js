const express = require('express');
const todoRouter = require('./routes/index.js');
const app = express();
const PORT = 5000;

app.use('/api', todoRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
