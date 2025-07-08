'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM('perfil', 'capa_viagem'),
        allowNull: false
      },
      usuarioId: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      viagemId: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        references: {
          model: 'viagens',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dataCriacao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      dataAtualizacao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fotos');
  }
};
