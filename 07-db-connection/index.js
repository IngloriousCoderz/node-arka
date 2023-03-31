const express = require("express");
const cors = require("cors");

const {
  getTasks,
  getTask,
  createTask,
  replaceTask,
  updateTask,
  deleteTask,
} = require("./db");

const DEFAULT_PORT = 3000;

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/tasks", async (req, res) => {
  const tasks = await getTasks();
  res.send(tasks);
});

app.get("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const task = await getTask(id);
  res.send(task);
});

app.post("/tasks", async (req, res) => {
  const newTask = await createTask(req.body);
  res.send(newTask);
});

app.put("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const replacedTask = await replaceTask(id, req.body);
  res.send(replacedTask);
});

app.patch("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updatedTask = await updateTask(id, req.body);
  res.send(updatedTask);
});

app.delete("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const deletedTask = await deleteTask(id);
  res.send(deletedTask);
});

app.listen(process.env.SERVER_PORT || DEFAULT_PORT, () => {
  console.log("Server is listening!");
});
