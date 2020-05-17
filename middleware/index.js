let setupCookies = require("./cookie");
let setupRoutes = require("./routes");
module.exports = (app) => {
  setupCookies(app);
  setupRoutes(app);
};
