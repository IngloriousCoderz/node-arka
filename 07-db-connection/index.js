const express = require("express");
const cors = require("cors");

const { getTasks, getTask } = require("./db");

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

app.post("/tasks", (req, res) => {
  const stmt = db.prepare("INSERT INTO tasks VALUES (?, ?)");

  stmt.run(Object.values(req.body), (err) => {
    res.send({ ...req.body, id: stmt.lastID });
  });
});

app.put("/tasks/:id", (req, res) => {
  const stmt = db.prepare(
    "UPDATE tasks SET text = ?, completed = ? WHERE rowid = ?",
    [req.body.text, req.body.completed, Number(req.params.id)]
  );

  stmt.run((err) => {
    db.get(
      "SELECT rowid AS id, text, completed FROM tasks WHERE rowid = :id",
      Number(req.params.id),
      (err, row) => {
        res.send({ ...row, completed: !!row.completed });
      }
    );
  });
});

app.patch("/tasks/:id", (req, res) => {
  const keys = Object.keys(req.body)
    .map((key) => `${key} = ?`)
    .join(", ");
  const stmt = db.prepare(`UPDATE tasks SET ${keys} WHERE rowid = ?`, [
    ...Object.values(req.body),
    Number(req.params.id),
  ]);

  stmt.run((err) => {
    db.get(
      "SELECT rowid AS id, text, completed FROM tasks WHERE rowid = :id",
      Number(req.params.id),
      (err, row) => {
        res.send({ ...row, completed: !!row.completed });
      }
    );
  });
});

app.delete("/tasks/:id", (req, res) => {
  db.get(
    "SELECT rowid AS id, text, completed FROM tasks WHERE rowid = :id",
    Number(req.params.id),
    (err, row) => {
      const stmt = db.prepare(
        "DELETE FROM tasks WHERE rowid = ?",
        Number(req.params.id)
      );

      stmt.run((err) => {
        res.send({ ...row, completed: !!row.completed });
      });
    }
  );
});

app.listen(process.env.SERVER_PORT || DEFAULT_PORT, () => {
  console.log("Server is listening!");
});
