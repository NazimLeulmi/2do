const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('2do', 'naz', 'qqwweerr', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT0',
  },
});