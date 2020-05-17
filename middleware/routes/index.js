const path = require("path");
const fs = require("fs");
let apiAuth = require("./api/auth");
const apiAuthredirect = require("./api/authredirect");
const express = require("express");
const url = require("url");

let db = {
  accessToken: null,
  myMessageList: [],
  myMessageListCache: [],
};

module.exports = (app) => {
  app.get("/api/auth", (req, res) => {
    console.log("molaka", url.parse(req.headers.referer));
    apiAuth(req, res, db);
  });

  app.get("/api/authredirect", (req, res) => {
    apiAuthredirect(req, res, db);
  });

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    console.log("here");
    res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
  });

  // app.get("/api/getAndAssessMessages", (req, res) => {
  //   apiGetAndAssessMessages(req, res, db);
  // });

  // app.get("/api/sendResults", (req, res) => {
  //   sendResults(req, res, db);
  // });
};
// module.exports = (server) => {
//   server.on("request", (req, res) => {
//     if (req.url === "/") {
//       landing(req, res, db);
//     } else if (req.url == "/api/auth") {
//       apiAuth(req, res, db);
//     } else if (req.url.startsWith("/api/authredirect")) {
//       apiAuthredirect(req, res, db);
//     } else if (req.url.startsWith("/api/getAndAssessMessages")) {
//       apiGetAndAssessMessages(req, res, db);
//     } else if (req.url === "/api/sendResults") {
//       sendResults(req, res, db);
//     } else if (req.url.startsWith("/subpath")) {
//       let splitUrl = req.url.split("/");
//       let splitDesiredPath = splitUrl.filter((e) => e !== "subpath");
//       let desiredPath = splitDesiredPath.join("/");
//       console.log("Test1");
//       let target = path.join(__dirname, "../client/build", desiredPath);

//       if (fs.existsSync(target)) {
//         let staticFile = fs.createReadStream(target);
//         staticFile.pipe(res);
//       } else {
//         res.end("404 not found errrrror");
//       }
//     } else {
//       let target = path.join(__dirname, "static", req.url);
//       let target2 = path.join(__dirname, "../client/build", req.url);
//       if (fs.existsSync(target)) {
//         let staticFile = fs.createReadStream(target);
//         staticFile.pipe(res);
//       } else if (fs.existsSync(target2)) {
//         let staticFile = fs.createReadStream(target2);
//         staticFile.pipe(res);
//       } else {
//         res.write("404");
//         res.end();
//       }
//     }
//   });
// };
