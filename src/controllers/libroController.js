//import mongoose from "mongoose";
import { autorModel } from "../models/autor.js";
import libroModel from "../models/libros.js";

class libroController{
    async getLibros (req, res,next){
        try {            
            //con await se tiene control de las respuestas, se espera a que se tenga una respuesta
            const listaLibros = await libroModel.find({});
            res.status(200).json(listaLibros);

            //con una promesa el sistema continua trabajando y una vez que se tenga la respuesta se muentra
            //trabajo con promesas
       /*      libroModel.find((err,listaLibros)=>{
                res.status(200).json(listaLibros);
            }); */
            //respuesta del modelo de prueba
            //res.status(200).json(librosActuales);
        } catch (error) {
            next(error);
            /* res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo obtener el listadode libros`}); */
        }
     }
     
    async getLibrosById(req, res, next){
        const id = req.params.id;
        try {
            const libro = await libroModel.findById(id);            
            //replicar en las demas peticiones para mejor gestionar mejor los errores
            if(libro!=null){
                res.status(200).json(libro);
            }else{
                res.status(404).send({
                    message:'libro no encontrado'
                });
            }            
        } catch (error) {
            //gestionando los errores de mongoDB
          /*   if(error instanceof mongoose.Error.CastError){
                res.status(500).json({
                    error:`Error: Valor del ID del documento no corresponde - ID:${id}`,
                    });
            }else{
                res.status(500).json({
                    error:`Error interno: ${error.message}`,
                    message:`No se pudo encontrar el libro con id: ${id}`});
            } */
           //ahora se usara el middleware para gestionar el error declarado en app.js, haciendo uso del parametro next de la funsión.
           next(error);

        }
        //const id= Number(req.params.id);
        //solicitud del modelo de pruebas
        //const index = buscaLibro(Number(req.params.id));
        //res.status(200).json(librosActuales[index]);
    }

    async createLibros(req, res, next){
        try {
            const dataLibro = req.body;
            const autorlibro = await autorModel.findById(dataLibro.autor);
            const libroCompleto = {...dataLibro, autor: {...autorlibro._doc}}
            const nuevoLibro = await libroModel.create(libroCompleto);
            res.status(201).json({
                result:true,
                nuevoLibro: nuevoLibro
            });            
        } catch (error) {
          /*   res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo guardar el libro`
            }); */
            next(error);
        }
        //solicitud del modelo de pruebas
        //librosActuales.push(req.body);
        //res.status(200).send('Libro registrado correctamente');
    }

    async updateLibros(req,res){     
        const id = req.params.id;   
        try {
            await libroModel.findByIdAndUpdate(id,req.body);
            res.status(200).json({
                result:true,
                nuevoLibro: "Libro actualizado correctamente"
            });
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo actualizar el libro`
            });
        }
        //solicitud del modelo de pruebas
        //const index = buscaLibro(Number(req.params.id));
        //librosActuales[index].titulo = req.body.titulo;
        //res.status(200).json(librosActuales);
    }

    async deleteLibros(req, res){
        const id = req.params.id;
        try {
            await libroModel.findByIdAndDelete(id);// (id,req.body);
            res.status(200).json({
                result:true,
                nuevoLibro: "Libro borrado correctamente"
            });
            
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo borrar el libro`
            });
        }
        //solicitud del modelo de pruebas
        //const index = buscaLibro(Number(req.params.id));
        //librosActuales.splice(index,1);
        //res.status(200).send('Libro borrado con exito');
    }

    async getLibrosByParams(req, res){
        try {
            const {editorial} = req.query;
            const listaLibros = await libroModel.find({editorial}); //el parametro puede ser mandado {editorial:editorial}
            res.status(200).json(listaLibros);     
            
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo consultar los libros por parametro`
            });
        }
    }
}


// eslint-disable-next-line no-class-assign
export default libroController = new libroController();