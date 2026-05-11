const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5500;
const publicDir = __dirname;

app.use(express.static(publicDir, {
  extensions: ["html"],
  maxAge: "1h"
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`WebNexus website running at http://localhost:${PORT}`);
});
