const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/formdata', require('./controllers/formdata'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
