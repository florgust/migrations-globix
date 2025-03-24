'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_viagem', {
      idViagem: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'viagens', // Nome da tabela referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      },
      idUsuario: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'usuarios', // Nome da tabela referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      },
      papel: {
        type: Sequelize.ENUM('participante', 'organizador'),
        allowNull: false,
        defaultValue: 'participante'
      },
      status: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 1
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
    await queryInterface.dropTable('usuario_viagem');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_usuario_viagem_papel";'); // Remove o tipo ENUM
  }
};