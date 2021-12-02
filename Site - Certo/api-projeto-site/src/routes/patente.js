var express = require("express");
var router = express.Router()

var patenteController = require("../controllers/patenteController");

router.get("/", function(req, res) {
    patenteController.testar(req, res);
});

router.post("/patente", function(req, res) {
    patenteController.patente(req, res);
})

module.exports = router;