import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify();

server.register(fastifyStatic, {
  root: path.join(__dirname, '../'),
});

// server.get('/', (request, reply) => {
//   return reply.send('Hello world');
// });

server.post('/countModule', (request, reply) => {
  const text = request.body;
  const textArray = text.split(' ').join('\n').split('\n');

  const wordsObj = {};

  for (const element of textArray) {
    if (!element.trim()) {
      continue;
    }
    const lowerCaseWord = element.toLowerCase();
    if (wordsObj[lowerCaseWord]) {
      wordsObj[lowerCaseWord] += 1;
    } else {
      wordsObj[lowerCaseWord] = 1;
    }
  }
  return Object.keys(wordsObj).length > 0
    ? reply.status(200).send(wordsObj)
    : null;
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is now listening on ${address}`);
});
// server.listen({ port: 3000 }).then(() => {
//   console.log(`Server is now listening on 3000`);
// });
