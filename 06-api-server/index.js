const express = require("express");
const cors = require("cors");

const DEFAULT_PORT = 3000;

const tasks = [
  { id: 1, text: "Learn Nodejs", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(tasks.find((task) => task.id === id));
});

app.post("/tasks", (req, res) => {
  const maxId = tasks[tasks.length - 1].id;
  const task = { ...req.body, id: maxId + 1 };
  tasks.push(task);
  res.send(task);
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index] = req.body;
  res.send(tasks[index]);
});

app.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index] = { ...tasks[index], ...req.body };
  res.send(tasks[index]);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  const task = tasks[index];
  tasks.splice(index, 1);
  res.send(task);
});

app.listen(process.env.SERVER_PORT || DEFAULT_PORT, () => {
  console.log("Server is listening!");
});
