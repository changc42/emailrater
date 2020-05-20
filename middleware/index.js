let setupCookies = require("./cookie");
let setupRoutes = require("./routes");

let express = require("express");
let router = express.Router();

let db = {};

setupCookies(router, db);
setupRoutes(router, db);

module.exports = router;
