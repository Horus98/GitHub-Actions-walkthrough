import express from 'express';

const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log('[server]: Server is running at https://localhost:3000');
});
