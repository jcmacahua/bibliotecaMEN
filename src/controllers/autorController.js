import {autorModel} from "../models/autor.js";

class autorController{
    async getAutores (req, res){
        const listaAutores = await autorModel.find({});
        res.status(200).json(listaAutores);     
         //respuesta del modelo de prueba
         //res.status(200).json(librosActuales);
     }
     
    async getAutorById(req, res){
        const id = req.params.id;
        try {
            const autor = await autorModel.findById(id);
            res.status(200).json(autor);
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo encontrar el autor con id: ${id}`});
        }
        //const id= Number(req.params.id);
        //solicitud del modelo de pruebas
        //const index = buscaLibro(Number(req.params.id));
        //res.status(200).json(librosActuales[index]);
    }

    async createAutor(req, res){
        try {
            const nuevoAutor = await autorModel.create(req.body);
            res.status(201).json({
                result:true,
                nuevoAutor: nuevoAutor
            });            
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo guardar el autor`
            });
        }
        //solicitud del modelo de pruebas
        //librosActuales.push(req.body);
        //res.status(200).send('Libro registrado correctamente');
    }

    async updateAutor(req,res){     
        const id = req.params.id;   
        try {
            await autorModel.findByIdAndUpdate(id,req.body);
            res.status(200).json({
                result:true,
                nuevoAutor: "Autor actualizado correctamente"
            });
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo actualizar el Autor`
            });
        }
        //solicitud del modelo de pruebas
        //const index = buscaLibro(Number(req.params.id));
        //librosActuales[index].titulo = req.body.titulo;
        //res.status(200).json(librosActuales);
    }

    async deleteAutor(req, res){
        const id = req.params.id;
        try {
            await autorModel.findByIdAndDelete(id);// (id,req.body);
            res.status(200).json({
                result:true,
                nuevoAutor: "Autor borrado correctamente"
            });
            
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo borrar el Autor`
            });
        }
        //solicitud del modelo de pruebas
        //const index = buscaLibro(Number(req.params.id));
        //librosActuales.splice(index,1);
        //res.status(200).send('Libro borrado con exito');
    }
}


export default autorController = new autorController();