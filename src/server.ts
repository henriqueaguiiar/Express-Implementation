import express from 'express';

const server = express();

// como a função esta diretamente dentro do get o express ja identifica os tipos de cada parametro do callback
server.get("/home", (request, reply) => {
  const info: string = "Hello World!";
  reply.send(info);
});

server.listen({
    port: process.env.PORT  
});

  

//Tambem podemos usar desta forma a definição  das rotas criando uma variavel controller.
// Porem neste caso o Typescript sempre pede os tipos das variaveis da função callback  
// ou seja os tipos da biblioteca do express observar bem
/* 

import express from 'express';

const server = express();

const controller = (request: Request, reply: Response) => {
  return reply.send("Hello World!");
}
servidor.get("/home", controller);

server.listen({
    port: 3000  
});


*/