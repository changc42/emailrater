const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  app.use((req, res, next) => {
    if (req.url === "/manifest.json") {
      // console.log("manifest.json does not need cookie.");
      next();
    } else if (!req.headers.cookie) {
      // console.log("no existing cookie. give new cookie", req.url, req.headers);
      res.writeHead(302, {
        "set-cookie": `emailrater=${uuidv4()}`,
        location: req.url,
      });
      console.log(req.url);
      res.end();
    } else {
      // console.log("already have cookie", req.url, req.headers);
      // console.log(res.getHeaders());
      next();
    }
  });
};
