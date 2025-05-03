 

import Error404 from "../errors/Error404.js";

function gestion404(req, res, next){
    next(new Error404)
    /* res.status(404).json({
        error: 'Página no encontrada'
    }); */
}

export default gestion404;