const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/:page", (req, res) => {
  const page = req.params.page;

  if (page.includes(".")) {
    return res.sendFile(path.join(__dirname, page));
  }

  res.sendFile(path.join(__dirname, page + ".html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("UserrTM site running on port " + PORT);
});
