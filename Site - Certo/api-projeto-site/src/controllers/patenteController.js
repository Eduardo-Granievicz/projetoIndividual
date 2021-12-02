var patenteModel = require("../models/patenteModel");

function testar (req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function patente(req, res) {
    
    var patente = req.body.patente;

    if (patente == undefined) {
        res.status(400).send("Seu nome está undefined!");
   
    } else {
       patenteModel.patente(patente)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = { 
    testar,
    patente
}