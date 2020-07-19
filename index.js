const express = require('express');
const path = require('path');
const logger = require('morgan');
const wrapper = require('./views/wrapper');
const Task = require('./models');

const db = require('./database');
// Test Database connection
db.authenticate()
    .then(() => console.log('connection has been established successfully'))
    .catch(err => console.log(err));

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    await db.sync();
    const tasks = await Task.findAll({}).catch(err => console.log(err));
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i].dataValues)
    }
    console.log(data, "data");
    const index = require('./views/index')
    const indexPage = wrapper(index());
    res.send(indexPage);
});
app.post('/create', async(req, res) => {
    const { task } = req.body;
    console.log(task);
    const created = await Task.create({
        text: task
    }).catch(err => console.log(err));
    console.log(created);
    res.redirect('/');

});

app.listen(1997, () => console.log('Express.js : 1997'));