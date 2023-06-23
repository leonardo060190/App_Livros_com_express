//protocolos da internet
const http = require('http');

//ip e porta do servidor nodejs
const hostname = '127.0.0.1';//localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bem Vindo Leonardo');
});

//servidor escutando/rodando na porta ....
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});