import mongoose from "mongoose";

//Creación de validación global
mongoose.Schema.Types.String.set('validate',{
    validator:(valor)=>valor.trim()!='',
    message: ({path}) => `El campo ${path} es necesario`
});