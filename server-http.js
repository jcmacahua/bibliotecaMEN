/*Este solo es ejemplo de como se hace sin express */

import http from 'http';

const PORT = 3000;

const routes ={
    '/': 'Formacion node +Express + mongodb',
    '/autores':'Autores',
    '/libros': 'Libros',
};

const server = http.createServer((req,res)=>{
    console.log(req.headers);
    res.writeHead(200, {"content-type":"text/plain"});
    res.end(routes[req.url]);    
});

server.listen(PORT,()=>{
    console.log('Servidor iniciado...');
})