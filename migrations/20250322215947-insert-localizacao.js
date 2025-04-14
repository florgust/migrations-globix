'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('localizacoes', [
      {
        idViagem: 1,
        nome: 'Ponto de Encontro Central',
        enderecoPartida: 'Rua Principal, 123, Centro, Cidade A',
        enderecoChegada: 'Praça Central, 456, Centro, Cidade B',
        dataPartida: '2025-06-10',
        dataChegada: '2025-06-11',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('localizacoes', { id_viagem: 1 }, {});
  }
};