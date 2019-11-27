// Update with your config settings.

module.exports = {

  testing: {
    client: 'postgresql',
    connection: 'postgres://dapawn:password@learnco_blog',
    pool: {
      min:2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'postgresql',
    connection: 'postgres://dapawn:password@learnco_blog',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
