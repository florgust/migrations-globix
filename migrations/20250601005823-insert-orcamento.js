'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orcamentos', [
      {
        viagemId: 1, // ajuste conforme o id de viagem existente
        categoria: 'Transporte',
        custo: 1500.00,
        observacao: 'Orçamento destinado a passagens aéreas e traslados.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orcamentos', { categoria: 'Transporte' }, {});
  }
};