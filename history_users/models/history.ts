import { DataTypes } from 'sequelize';
import sequelize from '../middlewares/db';

const History = sequelize.define('history', {
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

History.sync();

export default History;
