'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('viagens', [
      {
        nome: 'Viagem dos Sonhos',
        descricao: 'Uma viagem incrível para um destino paradisíaco.',
        data_inicio: '2025-06-10',
        data_fim: '2025-06-20',
        criador_id: 2,
        codigo_convite: 12345,
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
