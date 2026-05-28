const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get("*", (req, res) => {
  let filePath = path.join(__dirname, req.path);

  if (req.path === "/") {
    filePath = path.join(__dirname, "index.html");
  }

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("404 page not found");
    }
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("SERVER STARTED ON " + PORT);
});
