const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'myuser',
  database: 'mydb',
  host : 'db',
  password: 'mypassword',
  port: 5432,
});

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.get('/add', async (req, res) => {
  const name = 'toto';
  const result = await pool.query('INSERT INTO names (name) VALUES ($1)', [name]);
  res.send(`Name ${name} added to database`);
});

app.get('/get', async (req, res) => {
  const result = await pool.query('SELECT * FROM names');
  const names = result.rows.map(row => row.name).join(', ');
  res.send(`Names: ${names}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
