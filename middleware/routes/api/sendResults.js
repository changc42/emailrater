module.exports = function sendResults(req, res, db) {
  console.log("LMAO");
  let toSend = {};
  toSend.myMessageList = db[req.headers.cookie].myMessageList;
  res.writeHead(200, { "Content-Type": "application/json" });
  console.log(JSON.stringify(toSend), "test");
  res.end(JSON.stringify(toSend));
};
