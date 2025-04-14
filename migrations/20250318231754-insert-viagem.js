'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('viagens', [
      {
        nome: 'Viagem dos Sonhos',
        descricao: 'Uma viagem incrível para um destino paradisíaco.',
        dataInicio: '2025-06-10',
        dataFim: '2025-06-20',
        criadorId: 2,
        codigoConvite: 12345,
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('viagens', null, {});
  }
};
