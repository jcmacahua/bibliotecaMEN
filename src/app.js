import express from "express";
import dbConnection from "./config/dbConnection.js";
import libroModel from "./models/libros.js";

//servidor local
const app = express();
app.use(express.json());

//conexion a la base de datos
const db = await dbConnection();

db.on('error',(e)=>{
    console.log('Error en la conexion', e);
})
.once('open',()=>{
    console.log('Conexión a la base de datos exitosa');
});


//Rutas de la api
const buscaLibro = (id)=>{
    return librosActuales.findIndex((libro)=>libro.id===id);
}


app.get('/',(req,res)=>{
    res.status(200).send('Formacion node +Express + mongodb --desde express');
});

app.get('/libros',async (req, res)=>{
   const listaLibros = await libroModel.find({});
   res.status(200).json(listaLibros);

    //respuesta del modelo de prueba
    //res.status(200).json(librosActuales);
});

app.get('/libros/:id',(req, res)=>{
    //const id= Number(req.params.id);
    const index = buscaLibro(Number(req.params.id));
    res.status(200).json(librosActuales[index]);
});

app.post('/libros',(req, res)=>{
    librosActuales.push(req.body);
    res.status(200).send('Libro registrado correctamente');
});

app.put('/libros/:id',(req,res)=>{
    const index = buscaLibro(Number(req.params.id));
    librosActuales[index].titulo = req.body.titulo;
    res.status(200).json(librosActuales);
});

app.delete('/libros/:id',(req, res)=>{
    const index = buscaLibro(Number(req.params.id));
    librosActuales.splice(index,1);
    res.status(200).send('Libro borrado con exito');
});

export default app;


//modelo de prueba para las peticiones
/* const librosActuales=[
    {
        id:1,
        titulo:"Don Quijote"
    },
    {
        id:2,
        titulo:"El señor de los anillos"
    },
]; */