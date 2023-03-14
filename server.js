const http = require('http');

const host = 'localhost';
const port = 3000;

const TAREAS = [
    {id: 1, descripcion: 'Cocinar', estaCompletado: false},
    {id: 2, descripcion: 'Lavar', estaCompletado: false},
    {id: 3, descripcion: 'Planchar', estaCompletado: false},
]

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(TAREAS));
});
  
server.listen(port, host, () => {
    console.log(`Servidor funcionando en http://${host}:${port}`);
});