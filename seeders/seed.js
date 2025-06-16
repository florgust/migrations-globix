'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Usuários
    await queryInterface.bulkInsert('usuarios', [
      {
        id: 10,
        nome: 'Organizador 1',
        email: 'org1@email.com',
        senha: 'senhaorg1',
        tipo: 'organizador',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        id: 11,
        nome: 'Participante 1',
        email: 'part1@email.com',
        senha: 'senhapart1',
        tipo: 'participante',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        id: 12,
        nome: 'Solicitante 1',
        email: 'solicitante1@email.com',
        senha: 'senhasol1',
        tipo: 'participante',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // 2. Viagem
    await queryInterface.bulkInsert('viagens', [
      {
        id: 100,
        nome: 'Viagem Teste Completa',
        descricao: 'Viagem para testar seed completa.',
        dataInicio: '2025-07-01',
        dataFim: '2025-07-10',
        criadorId: 10,
        codigoConvite: 54321,
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date(),
        tipo: 'privado',
        quantidadeParticipante: 2
      }
    ]);

    // 3. Localização
    await queryInterface.bulkInsert('localizacoes', [
      {
        id: 200,
        idViagem: 100,
        nome: 'Ponto Inicial',
        idaEnderecoPartida: 'Rua A, 100',
        idaEnderecoChegada: 'Rua B, 200',
        idaDataPartida: new Date('2025-07-01T08:00:00'),
        idaDataChegada: new Date('2025-07-01T12:00:00'),
        voltaEnderecoPartida: 'Rua B, 200',
        voltaEnderecoChegada: 'Rua A, 100',
        voltaDataPartida: new Date('2025-07-10T14:00:00'),
        voltaDataChegada: new Date('2025-07-10T18:00:00'),
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // 4. Itinerário
    await queryInterface.bulkInsert('itinerarios', [
      {
        id: 300,
        viagemId: 100,
        tipoEvento: 'Passeio',
        titulo: 'Passeio no parque',
        dataHora: new Date('2025-07-02T10:00:00'),
        descricao: 'Visita ao parque central.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // 5. Transporte
    await queryInterface.bulkInsert('transportes', [
      {
        id: 400,
        viagemId: 100,
        tipoTransporte: 'Ônibus',
        descricao: 'Ônibus fretado para o grupo.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // 6. Orçamento
    await queryInterface.bulkInsert('orcamentos', [
      {
        id: 500,
        viagemId: 100,
        categoria: 'Transporte',
        custo: 2000.00,
        observacao: 'Custo do ônibus.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // 7. Participação dos usuários na viagem
    await queryInterface.bulkInsert('usuario_viagem', [
      {
        idViagem: 100,
        idUsuario: 10,
        papel: 'organizador',
        status: 1, // ativo
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        idViagem: 100,
        idUsuario: 11,
        papel: 'participante',
        status: 1, // ativo
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        idViagem: 100,
        idUsuario: 12,
        papel: 'participante',
        status: 0, // pendente/solicitado
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario_viagem', { idViagem: 100 }, {});
    await queryInterface.bulkDelete('orcamentos', { viagemId: 100 }, {});
    await queryInterface.bulkDelete('transportes', { viagemId: 100 }, {});
    await queryInterface.bulkDelete('itinerarios', { viagemId: 100 }, {});
    await queryInterface.bulkDelete('localizacoes', { idViagem: 100 }, {});
    await queryInterface.bulkDelete('viagens', { id: 100 }, {});
    await queryInterface.bulkDelete('usuarios', { id: [10, 11, 12] }, {});
  }
};