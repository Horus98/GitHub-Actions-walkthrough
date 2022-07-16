import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

