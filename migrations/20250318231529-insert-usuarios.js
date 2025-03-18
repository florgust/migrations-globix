'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Usuário',
        email: 'usuario@email.com',
        senha: 'senha1',
        tipo: 'usuario',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Organizador',
        email: 'organizador@email.com',
        senha: 'senha2',
        tipo: 'organizador',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
