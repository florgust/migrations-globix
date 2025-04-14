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
      idViagem: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'viagens',
          key: 'id'         
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      enderecoPartida: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      enderecoChegada: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      dataPartida: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      dataChegada: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      dataCriacao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      dataAtualizacao: {
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