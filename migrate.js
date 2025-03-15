const { migrate } = require('node-pg-migrate');
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

migrate({
    databaseUrl: process.env.DATABASE_URL, // URL do Heroku Postgres
    direction: 'up', // Direção das migrações (up ou down)
    migrationsTable: 'pg_migrations', // Nome da tabela de migrações
    migrationsDir: './migrations', // Diretório onde ficam os arquivos de migração
    verbose: true,
}).then(() => {
    console.log('Migrações concluídas!');
    client.end();
}).catch((err) => {
    console.error('Erro nas migrações:', err);
    client.end();
});
