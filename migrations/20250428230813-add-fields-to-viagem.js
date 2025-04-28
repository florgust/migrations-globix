'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('viagens', 'tipo', {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: 'privado' // Valor padrão, se necessário
    });

    await queryInterface.addColumn('viagens', 'quantidadeParticipante', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0 // Valor padrão, se necessário
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('viagens', 'tipo');
    await queryInterface.removeColumn('viagens', 'quantidadeParticipante');
  }
};