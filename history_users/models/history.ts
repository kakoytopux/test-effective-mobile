const { DataTypes } = require('sequelize');
const db = require('../middlewares/db');

const history = db.define('history', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  history: {
    type: DataTypes.JSON,
    allowNull: false
  }
});

history.sync();

module.exports = history;
