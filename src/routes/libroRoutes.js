import express from "express";
import libroController from "../controllers/libroController.js";

const routes = express.Router();

//consulta de libros
routes.get('/libros',libroController.getLibros);
//consulta un libro
routes.get('/libros/:id',libroController.getLibrosById);
//Crea un libro
routes.post('/libros',libroController.createLibros);
//actualiza un libro
routes.put('/libros/:id',libroController.updateLibros);
//elimina un libro
routes.delete('/libros/:id',libroController.deleteLibros);

export default routes;//de donde importes routes puede ser renombrado la variable,por defualt recibiras routes