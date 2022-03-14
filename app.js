const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.get("/new", (req, res) => {
  res.status(200).json({ message: "This is a new route" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
