const Sequelize = require("sequelize")
// Conexao cm banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql',
    query:{raw:true}
  })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

