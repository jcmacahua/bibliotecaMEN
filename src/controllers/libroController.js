import libroModel from "../models/libros.js";

class libroController{
    async getLibros (req, res){
        const listaLibros = await libroModel.find({});
        res.status(200).json(listaLibros);     
         //respuesta del modelo de prueba
         //res.status(200).json(librosActuales);
     }
     
    async getLibrosById(req, res){
        const id = req.params.id;
        try {
            const libro = await libroModel.findById(id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo encontrar el libro con id: ${id}`});
        }
        //const id= Number(req.params.id);
        //solicitud del modelo de pruebas
        //const index = buscaLibro(Number(req.params.id));
        //res.status(200).json(librosActuales[index]);
    }

    async createLibros(req, res){
        try {
            const nuevoLibro = await libroModel.create(req.body);
            res.status(201).json({
                result:true,
                nuevoLibro: nuevoLibro
            });            
        } catch (error) {
            res.status(500).json({
                error:`Error: ${error.message}`,
                message:`No se pudo guardar el libro`
            });
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
}


export default libroController = new libroController();