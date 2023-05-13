const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    data: process.env.MY_SUPER_SECRET,
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
