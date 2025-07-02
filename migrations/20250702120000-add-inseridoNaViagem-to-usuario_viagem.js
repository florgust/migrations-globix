'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('usuario_viagem', 'inseridoNaViagem', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    });
    // Atualiza todos os registros existentes para 1
    await queryInterface.sequelize.query('UPDATE "usuario_viagem" SET "inseridoNaViagem" = 1;');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('usuario_viagem', 'inseridoNaViagem');
  }
};