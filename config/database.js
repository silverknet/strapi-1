/*module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'localhost'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'postgres'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'Nisseha1997'),
      ssl: env.bool(false),
    },
  },
});
*/

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '0.0.0.0'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'strapi'),
      user: env('PGUSER', 'strapi'),
      password: env('PGPASSWORD', 'password'),
      ssl: env.bool(true),
    },
  },
});
