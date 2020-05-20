const { client_id, state } = require("../../../config/keys");
const scopes = require("../../../config/scopes");
const endpoints = require("../../../config/endpoints");
const url = require("url");
const fs = require("fs");
const { redirect_uri } = require("../../../config/devVProdRoutes");

module.exports = (req, res, db) => {
  let { protocol, host, path } = url.parse(redirect_uri);
  new_redirect_uri = protocol + "//" + host + req.baseUrl + path;

  let query = {
    client_id: client_id,
    redirect_uri: new_redirect_uri,
    response_type: "code",
    scope: scopes.read,
    state: state,
  };

  let queryString = new URLSearchParams(query).toString();
  res.writeHead(302, { Location: `${endpoints.oauth}?${queryString}` });
  res.end();
};
