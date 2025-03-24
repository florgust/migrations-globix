'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario_viagem', [
      {
        idViagem: 1, // ID da viagem
        idUsuario: 1, // ID do usuário participante
        papel: 'participante',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date(),
      },
      {
        idViagem: 1, // ID da mesma viagem
        idUsuario: 2, // ID do usuário organizador
        papel: 'organizador',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario_viagem', {
      idViagem: 1,
    });
  },
};