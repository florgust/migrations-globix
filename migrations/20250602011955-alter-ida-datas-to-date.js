'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('localizacoes', 'idaDataPartida', {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.changeColumn('localizacoes', 'idaDataChegada', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('localizacoes', 'idaDataPartida', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });
    await queryInterface.changeColumn('localizacoes', 'idaDataChegada', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });
  }
};