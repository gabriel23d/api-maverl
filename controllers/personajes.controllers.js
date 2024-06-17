
const {request , response} = require("express");
const { personajes } = require ("../personajes");
const getpersonajes = (req, res ) => {

    return res.json({
        ok:true,
        statusCode:200,
        personajes
    });
}
const getpersonajesById = (req = request , res = response) => {

    let id = parseInt(req.params.id);

    let personajesAbuscar = "";

    personajesAbuscar = personajes.find((personajes)=> {
        return personajes.id === id;
    });

    if(personajesAbuscar){
        return res.json({
            ok:true,
            statusCode:200,
            personajesAbuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay personajes con ese id"
        });
    }
    
}
module.exports = {
    getpersonajes,
    getpersonajesById
}