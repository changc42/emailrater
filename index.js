const express = require("express");

const appRouter = require("./middleware");

let app = express();

app.use(appRouter);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
