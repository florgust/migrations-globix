'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'Pessoa Um',
        email: 'pessoa1@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pessoa Dois',
        email: 'pessoa2@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};