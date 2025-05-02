// filepath: /home/luanflor/faculdade/quinto_periodo/lab_esof/migrations-globix/migrations/YYYYMMDDHHMMSS-rename-columns-itinerarios.js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Renomear as colunas createdAt e updatedAt
    await queryInterface.renameColumn('itinerarios', 'createdAt', 'dataCriacao');
    await queryInterface.renameColumn('itinerarios', 'updatedAt', 'dataAtualizacao');
  },

  async down(queryInterface, Sequelize) {
    // Reverter os nomes das colunas para createdAt e updatedAt
    await queryInterface.renameColumn('itinerarios', 'dataCriacao', 'createdAt');
    await queryInterface.renameColumn('itinerarios', 'dataAtualizacao', 'updatedAt');
  }
};