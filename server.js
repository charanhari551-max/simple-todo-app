const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from current folder
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
  console.log(`Todo app running at http://localhost:${PORT}`);
});
