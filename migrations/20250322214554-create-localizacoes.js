'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('localizacoes', {
      id: {
        type: Sequelize.SMALLINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_viagem: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'viagens',
          key: 'id_viagem'         
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      endereco_partida: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      endereco_chegada: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      data_partida: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      data_chegada: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      data_criacao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      data_atualizacao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('localizacoes');
  }
};