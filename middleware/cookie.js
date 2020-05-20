const { v4: uuidv4 } = require("uuid");

let requiresAuth = [
  "/query",
  "/api/getandassessmessages",
  "/api/sendresults",
  "/results",
];
module.exports = (app, db) => {
  app.use((req, res, next) => {
    // console.log("\n in cookie middleware", req.url);
    if (req.url === "/manifest.json") {
      // console.log("manifest.json does not need cookie.");
      next();
    } else if (!req.headers.cookie) {
      // console.log("no existing cookie. give new cookie", req.url);
      res.writeHead(302, {
        "set-cookie": `emailrater=${uuidv4()}; Path=/`,
        location: req.baseUrl + req.url,
      });
      res.end();
    } else {
      // console.log("already have cookie", req.url);
      // console.log("db in cookie ", db);
      if (
        db[req.headers.cookie] ||
        !requiresAuth.includes(req.url.toLowerCase())
      ) {
        // if (db[req.headers.cookie])
        //   console.log("cookie has entry in db. continue to app. ", req.url);
        // else if (!requiresAuth.includes(req.url.toLowerCase()))
        //   console.log(
        //     "cookie is not in db, but requested page does not need auth ",
        //     req.url
        //   );
        next();
      } else {
        // console.log(
        //   "cookie does not have entry in db, and requested page requires auth. send unauthorized info page ",
        //   req.url
        // );
        res.redirect(req.baseUrl + "/unauthorized");
      }
    }
  });
};
