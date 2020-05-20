const path = require("path");
const fs = require("fs");
let apiAuth = require("./api/auth");
const apiAuthredirect = require("./api/authredirect");
const apiGetAndAssessMessages = require("./api/getAndAssessMessages");
const sendResults = require("./api/sendResults");
const express = require("express");
const url = require("url");

module.exports = (app, db) => {
  // app.use((req, res, next) => {
  //   console.log("\n past cookie middleware", req.url);
  //   next();
  // });
  app.get("/api/auth", (req, res) => {
    apiAuth(req, res, db);
  });

  app.get("/api/authredirect", (req, res) => {
    apiAuthredirect(req, res, db);
  });

  app.get("/api/getAndAssessMessages", (req, res) => {
    apiGetAndAssessMessages(req, res, db);
  });

  app.get("/api/sendResults", (req, res) => {
    sendResults(req, res, db);
  });

  app.get("/api/dummy", (req, res) => {
    res.end("at dummy bbbb");
  });

  app.use(express.static(path.resolve(__dirname, "../../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
  });
};
