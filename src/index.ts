import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server!');
});

console.log('testing...');

app.listen(port, () => {
  console.log('[server]: Server is running at https://localhost:3000');
});

