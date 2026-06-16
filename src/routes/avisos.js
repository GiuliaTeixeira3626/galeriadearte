var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.post("/cadastrar", function (req, res) {
    avisoController.cadastrar(req, res);
});

module.exports = router;