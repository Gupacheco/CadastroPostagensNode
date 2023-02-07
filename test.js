const Postagem = sequelize.define('postagens', {
        titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Tittle qualquer",
    conteudo: "Seila tambem aksjak"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Gustavo",
    sobrenome: "Pacheco",
    idade: 16,
    email: "gupachecos@gmail.com"
})

