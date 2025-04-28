'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Renomear campos existentes
    await queryInterface.renameColumn('localizacoes', 'enderecoPartida', 'idaEnderecoPartida');
    await queryInterface.renameColumn('localizacoes', 'enderecoChegada', 'idaEnderecoChegada');
    await queryInterface.renameColumn('localizacoes', 'dataPartida', 'idaDataPartida');
    await queryInterface.renameColumn('localizacoes', 'dataChegada', 'idaDataChegada');

    // Adicionar novos campos
    await queryInterface.addColumn('localizacoes', 'voltaEnderecoPartida', {
      type: Sequelize.STRING(255),
      allowNull: true
    });

    await queryInterface.addColumn('localizacoes', 'voltaEnderecoChegada', {
      type: Sequelize.STRING(255),
      allowNull: true
    });

    await queryInterface.addColumn('localizacoes', 'voltaDataPartida', {
      type: Sequelize.DATE,
      allowNull: true
    });

    await queryInterface.addColumn('localizacoes', 'voltaDataChegada', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverter renomeações
    await queryInterface.renameColumn('localizacoes', 'idaEnderecoPartida', 'enderecoPartida');
    await queryInterface.renameColumn('localizacoes', 'idaEnderecoChegada', 'enderecoChegada');
    await queryInterface.renameColumn('localizacoes', 'idaDataPartida', 'dataPartida');
    await queryInterface.renameColumn('localizacoes', 'idaDataChegada', 'dataChegada');

    // Remover novos campos
    await queryInterface.removeColumn('localizacoes', 'voltaEnderecoPartida');
    await queryInterface.removeColumn('localizacoes', 'voltaEnderecoChegada');
    await queryInterface.removeColumn('localizacoes', 'voltaDataPartida');
    await queryInterface.removeColumn('localizacoes', 'voltaDataChegada');
  }
};