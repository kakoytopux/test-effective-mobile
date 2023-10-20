const { DataTypes } = require('sequelize');
const db = require('../middlewares/db');

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
     len: [6]
    }
  }
});

User.sync();

module.exports = User;
