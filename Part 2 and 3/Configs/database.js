import Sequelize from 'sequelize';

const sequelize = new Sequelize('instadeep', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;