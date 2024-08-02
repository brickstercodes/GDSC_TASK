const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.get("/sample", (req, res) => {
  res.json({ message: "This is a sample JSON response" });
});

app.post("/submit", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received", receivedData: data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
