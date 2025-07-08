'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('viagens', 'cidadeOrigem', {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: 'cidade A'  // Valor padrão para cidadeOrigem
    });

    await queryInterface.addColumn('viagens', 'cidadeDestino', {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: 'cidade B'  // Valor padrão para cidadeDestino
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('viagens', 'cidadeOrigem');
    await queryInterface.removeColumn('viagens', 'cidadeDestino');
  }
};