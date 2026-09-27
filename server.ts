import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { interestHandler } from './server/interest.ts';

const app = express();
const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.join(rootDirectory, 'dist');
const port = Number(process.env.PORT) || 8080;

app.disable('x-powered-by');
app.use('/api/interest', interestHandler);
app.use(express.static(distDirectory));
app.get('*', (_request, response) => {
  response.sendFile(path.join(distDirectory, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`BeautyFlow disponível na porta ${port}`);
});
