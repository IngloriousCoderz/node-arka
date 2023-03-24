const express = require("express");
require("dotenv").config();

const DEFAULT_PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/tasks", (req, res) => {
  res.send([
    { id: 1, text: "Learn Node.js", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ]);
});

app.listen(process.env.SERVER_PORT || DEFAULT_PORT, () => {
  console.log("Server is listening!");
});
