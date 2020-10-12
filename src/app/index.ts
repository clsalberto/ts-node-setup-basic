import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Welcome to your new project.'});
})

export default app;