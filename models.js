const Sequelize = require('sequelize');
const db = require('./database');

const Task = db.define('task', {
    text: {
        type: Sequelize.STRING,
        allowNull: false,
        validator: { len: [5, 100], isAlphanumeric: true }
    },
})

module.exports = Task;