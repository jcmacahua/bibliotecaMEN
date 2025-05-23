import express from "express";
import dbConnection from "./config/dbConnection.js";
import indexRoutes from "./routes/index.js";
import gestionErrores from "./middlewares/getionErrores.js";
import gestion404 from "./middlewares/gestion404.js";
//import libroModel from "./models/libros.js";

//servidor local
const app = express();

indexRoutes(app);
//llamado al middleware para gestionar error 404
app.use(gestion404);
//Llamado del middleware para gestionar errores
app.use(gestionErrores);

//conexion a la base de datos
const db = await dbConnection();

db.on('error',(e)=>{
    console.log('Error en la conexion', e);
})
.once('open',()=>{
    console.log('Conexión a la base de datos exitosa');
});


//Rutas de la api
/* const buscaLibro = (id)=>{
    return librosActuales.findIndex((libro)=>libro.id===id);
}
 */
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