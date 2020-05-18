const url = require("url");
const https = require("https");
const fs = require("fs");

const { client_id, client_secret } = require("../../../config/keys");
const { redirect_uri } = require("../../../config/devVProd");

module.exports = (req, res, db) => {
  // takes in empty accessToken object as parameter and inserts accessToken into it
  // after get access token, sends user a form
  let authCode = url.parse(req.url, true).query.code;
  let query = {
    client_id: client_id,
    client_secret: client_secret,
    code: authCode,
    grant_type: "authorization_code",
    redirect_uri: redirect_uri,
  };
  let queryString = new URLSearchParams(query).toString();
  const options = {
    method: "POST",
    hostname: "oauth2.googleapis.com",
    path: "/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // "Content-Length": Buffer.byteLength(queryString),
    },
  };
  let sb = "";
  let tokenReq = https.request(options, (tokenRes) => {
    tokenRes.on("data", (chunk) => {
      sb += chunk.toString();
    });
    tokenRes.on("end", () => {
      let authObj = JSON.parse(sb);
      // let currentTime = Date.now();
      // authObj.expiration = currentTime + 3600000;

      // fs.writeFile(
      //   "./cache/accessToken.txt",
      //   JSON.stringify(authObj),
      //   (err) => {
      //     if (err) throw err;
      //     console.log("finished caching accessToken");
      //   }
      // );

      let cookieId = req.headers.cookie;
      db[cookieId] = {
        accessToken: authObj.access_token,
        myMessageList: [],
      };
      res.redirect("/query");
    });
  });
  tokenReq.end(queryString);
};
