const express = require("express");

const setupMW = require("./middleware");

let app = express();

setupMW(app);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
