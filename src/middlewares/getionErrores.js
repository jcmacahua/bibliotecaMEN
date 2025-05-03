/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import ErrorRequisicion from "../errors/ErrorRequisicion.js";
import ErrorValidacion from "../errors/ErrorValidacion.js";
import Error404 from "../errors/Error404.js";

//Creación de un middleware para gestionar errores
function gestionErrores(error, req, res, next){
    if(error instanceof mongoose.Error.CastError){
            new ErrorRequisicion(error.value).sendResponse(res);                
        }else if(error instanceof mongoose.Error.ValidationError){
            const messageError = Object.values(error.errors).map((e)=> e.message).join(";");
            new ErrorValidacion(messageError).sendResponse(res);
        }else if(error instanceof Error404){
            new Error404().sendResponse(res);
        }else{
         new ErrorBase(error.message, error.status).sendResponse(res);
        }
}

export default gestionErrores;