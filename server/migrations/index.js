const { Pool } = require('pg');
const applyMigrations = require('@mmckelvy/apply-migrations');

(async () => {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

  await applyMigrations({
    pool,
    src: `${__dirname}/src`
  });

  await pool.end();
  console.log('Ended the migrations pool.');
})();