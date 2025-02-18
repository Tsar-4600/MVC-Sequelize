const{Sequelize} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/db/db.sqlite'
});


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    age:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});
const Game = sequelize.define('name', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    genre:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});



module.exports = {User, Game, sequelize};