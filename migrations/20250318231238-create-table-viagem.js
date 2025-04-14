'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('viagens', {
      id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      dataInicio: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      dataFim: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      criadorId: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'usuarios', // Nome da tabela referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      codigoConvite: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      status: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 1
      },
      dataCriacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dataAtualizacao: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('viagens');
  }
};
