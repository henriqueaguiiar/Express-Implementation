import express from 'express';

const server = express();

server.get("/home", (req, res) => {
  const info = "Hello World!";
  res.send(info);
});

server.listen({
    port: 3000  
});
