'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('localizacoes', [
      {
        id_viagem: 1,
        nome: 'Ponto de Encontro Central',
        endereco_partida: 'Rua Principal, 123, Centro, Cidade A',
        endereco_chegada: 'Praça Central, 456, Centro, Cidade B',
        data_partida: '2025-06-10',
        data_chegada: '2025-06-11',
        data_criacao: new Date(),
        data_atualizacao: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('localizacoes', { id_viagem: 1 }, {});
  }
};