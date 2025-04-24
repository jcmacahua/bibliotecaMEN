import express from "express";
import libroController from "../controllers/libroController.js";

const routes = express.Router();
/* Es recomendable poner en un orden las rutas, por lo general al principio van las rutas fijas y al final las que se le envia un ID*/
//consulta de libros
routes.get('/libros',libroController.getLibros);
//consulta un libro por parametro
routes.get('/libros/consulta',libroController.getLibrosByParams);
//consulta un libro
routes.get('/libros/:id',libroController.getLibrosById);
//Crea un libro
routes.post('/libros',libroController.createLibros);
//actualiza un libro
routes.put('/libros/:id',libroController.updateLibros);
//elimina un libro
routes.delete('/libros/:id',libroController.deleteLibros);

export default routes;//de donde importes routes puede ser renombrado la variable,por defualt recibiras routes