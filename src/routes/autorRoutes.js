import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

//consulta de autores
routes.get('/autores',autorController.getAutores);
//consulta un autor
routes.get('/autores/:id',autorController.getAutorById);
//Crea un autor
routes.post('/autores',autorController.createAutor);
//actualiza un autor
routes.put('/autores/:id',autorController.updateAutor);
//elimina un autor
routes.delete('/autores/:id',autorController.deleteAutor);

export default routes;//de donde importes routes puede ser renombrado la variable,por defualt recibiras routes