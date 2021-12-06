const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/seed', require('./controllers/seed-table-route'));
app.use('/formdata', require('./controllers/form-data-route'));



app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
