import ErrorBase from "./ErrorBase.js";


class ErrorValidacion extends ErrorBase{
    constructor(message='', status = 400){
        super();                
        this.message = `Error - Faltan datos obligatorios ${message}`;
        this.status = status;
    }
}

export default ErrorValidacion;


/* import ErrorBase from "./ErrorBase.js";

class ErrorRequisicion extends ErrorBase{
    constructor(value='',message='', status=400){
        super();
        if(message==''){
            message=`Error: Valor del ID del documento no corresponde - ID:${value}`
            this.message = message;
            this.status= status;
        }
    }

    /* res.status(400).json({
        error:`Error: Valor del ID del documento no corresponde - ID:${error.value}`,
        }); */


