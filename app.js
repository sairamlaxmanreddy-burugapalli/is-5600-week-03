const http = require('http');
const express = require('express');


const basicServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello, World!' }));
});

const routedServer = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify([{ id: 1, name: 'Sairam' }, { id: 2, name: 'Arjun' }]));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Route not found' }));
    }
  });

  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
  
 