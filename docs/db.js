const Sequelize = require('sequelize');
const FilmModel = require('./models/film');
const sequelize = new Sequelize('VPDKd3qxlZ', 'VPDKd3qxlZ', 'CnWazblx1l', {
     host : 'remotemysql.com',
     dialect : 'mysql'
});

const Film = FilmModel(sequelize, sequelize);

sequelize.sync({ force : false })  
     .then(()=> {
          console.log('Synchronized Tables')
     })

module.exports = {
     Film
}