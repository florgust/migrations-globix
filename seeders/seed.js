'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Limpar tabelas na ordem correta para evitar conflitos de FK
    await queryInterface.bulkDelete('usuario_viagem', null, {});
    await queryInterface.bulkDelete('orcamentos', null, {});
    await queryInterface.bulkDelete('transportes', null, {});
    await queryInterface.bulkDelete('itinerarios', null, {});
    await queryInterface.bulkDelete('localizacoes', null, {});
    await queryInterface.bulkDelete('viagens', null, {});
    await queryInterface.bulkDelete('usuarios', null, {});

    // Usuários
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
      },
      {
        id: 13,
        nome: 'Organizador 2',
        email: 'org2@email.com',
        senha: 'senhaorg2',
        tipo: 'organizador',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        id: 14,
        nome: 'Participante 2',
        email: 'part2@email.com',
        senha: 'senhapart2',
        tipo: 'participante',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // Viagens
    await queryInterface.bulkInsert('viagens', [
      {
        id: 100,
        nome: 'Viagem Teste Completa',
        descricao: 'Viagem para testar seed completa.',
        dataInicio: '2025-07-01',
        dataFim: '2025-07-10',
        criadorId: 10,
        codigoConvite: 12345,
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date(),
        tipo: 'privado',
        quantidadeParticipante: 2
      },
      {
        id: 101,
        nome: 'Viagem do Organizador 2',
        descricao: 'Viagem criada pelo segundo organizador.',
        dataInicio: '2025-08-01',
        dataFim: '2025-08-05',
        criadorId: 13,
        codigoConvite: 12346,
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date(),
        tipo: 'privado',
        quantidadeParticipante: 1
      },
      {
        id: 102,
        nome: 'Viagem Participante 2',
        descricao: 'Viagem para o participante 2 experimentar.',
        dataInicio: '2025-09-10',
        dataFim: '2025-09-15',
        criadorId: 14,
        codigoConvite: 12347,
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date(),
        tipo: 'privado',
        quantidadeParticipante: 1
      }
    ]);

    // Localizações
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
      },
      {
        id: 201,
        idViagem: 101,
        nome: 'Ponto Inicial Org2',
        idaEnderecoPartida: 'Av. Central, 1',
        idaEnderecoChegada: 'Av. Leste, 2',
        idaDataPartida: new Date('2025-08-01T09:00:00'),
        idaDataChegada: new Date('2025-08-01T13:00:00'),
        voltaEnderecoPartida: 'Av. Leste, 2',
        voltaEnderecoChegada: 'Av. Central, 1',
        voltaDataPartida: new Date('2025-08-05T15:00:00'),
        voltaDataChegada: new Date('2025-08-05T19:00:00'),
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        id: 202,
        idViagem: 102,
        nome: 'Ponto Inicial Part2',
        idaEnderecoPartida: 'Rua X, 10',
        idaEnderecoChegada: 'Rua Y, 20',
        idaDataPartida: new Date('2025-09-10T07:00:00'),
        idaDataChegada: new Date('2025-09-10T11:00:00'),
        voltaEnderecoPartida: 'Rua Y, 20',
        voltaEnderecoChegada: 'Rua X, 10',
        voltaDataPartida: new Date('2025-09-15T16:00:00'),
        voltaDataChegada: new Date('2025-09-15T20:00:00'),
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // Itinerários
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
      },
      {
        id: 301,
        viagemId: 101,
        tipoEvento: 'Reunião',
        titulo: 'Reunião de abertura',
        dataHora: new Date('2025-08-01T15:00:00'),
        descricao: 'Reunião para alinhar expectativas.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // Transportes
    await queryInterface.bulkInsert('transportes', [
      {
        id: 400,
        viagemId: 100,
        tipoTransporte: 'Ônibus',
        descricao: 'Ônibus fretado para o grupo.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        id: 401,
        viagemId: 101,
        tipoTransporte: 'Van',
        descricao: 'Van para o grupo do organizador 2.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // Orçamentos
    await queryInterface.bulkInsert('orcamentos', [
      {
        id: 500,
        viagemId: 100,
        categoria: 'Transporte',
        custo: 2000.00,
        observacao: 'Custo do ônibus.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        id: 501,
        viagemId: 101,
        categoria: 'Hospedagem',
        custo: 1500.00,
        observacao: 'Hotel para todos.',
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
    ]);

    // Participação dos usuários nas viagens (status 0 não insere ainda)
    await queryInterface.bulkInsert('usuario_viagem', [
      // Viagem 100
      {
        idViagem: 100,
        idUsuario: 10,
        papel: 'organizador',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        idViagem: 100,
        idUsuario: 11,
        papel: 'participante',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      // Viagem 101
      {
        idViagem: 101,
        idUsuario: 13,
        papel: 'organizador',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      {
        idViagem: 101,
        idUsuario: 14,
        papel: 'participante',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      },
      // Viagem 102 (apenas o criador/participante 2)
      {
        idViagem: 102,
        idUsuario: 14,
        papel: 'organizador',
        status: 1,
        dataCriacao: new Date(),
        dataAtualizacao: new Date()
      }
      // Não insere status: 0 (pendente/solicitado) conforme solicitado
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario_viagem', null, {});
    await queryInterface.bulkDelete('orcamentos', null, {});
    await queryInterface.bulkDelete('transportes', null, {});
    await queryInterface.bulkDelete('itinerarios', null, {});
    await queryInterface.bulkDelete('localizacoes', null, {});
    await queryInterface.bulkDelete('viagens', null, {});
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};