'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adiciona o novo valor "organizadorPromovido" ao ENUM existente
    await queryInterface.sequelize.query(`
      ALTER TYPE "enum_usuario_viagem_papel" ADD VALUE 'organizadorPromovido';
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // Não é possível remover valores de um ENUM no PostgreSQL diretamente.
    // Para reverter, seria necessário recriar o ENUM sem o valor adicionado.
    console.warn('Reverter esta migration requer recriação manual do tipo ENUM.');
  }
};