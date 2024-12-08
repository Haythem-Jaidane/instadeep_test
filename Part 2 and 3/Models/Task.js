import DataTypes from 'sequelize';
import sequelize from '../Configs/database.js';

const Task = sequelize.define('Task', {
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Description: {
        type: DataTypes.STRING
    },
    Priority: {
        type: DataTypes.INTEGER,
    },
    Category: {
        type: DataTypes.ENUM("Work","Personal","Urgent"),
    },
    DueDate: {
        type: DataTypes.DATE,
    },
    CompletionStatus: {
        type: DataTypes.BOOLEAN,
    }
});

export default Task