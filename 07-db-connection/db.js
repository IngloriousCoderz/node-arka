const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

module.exports = { getTasks, getTask };

db.serialize(() => {
  const tasks = [
    { id: 1, text: "Learn Nodejs", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];

  db.run("CREATE TABLE tasks (text TEXT, completed INTEGER)");

  const stmt = db.prepare("INSERT INTO tasks VALUES (?, ?)");
  tasks.forEach((task) => {
    stmt.run([task.text, task.completed]);
  });
  stmt.finalize();
});

function getTasks() {
  return new Promise((resolve, reject) => {
    db.all("SELECT rowid AS id, text, completed FROM tasks", (err, rows) => {
      if (err) {
        return reject(err);
      }

      resolve(rows.map((row) => ({ ...row, completed: !!row.completed })));
    });
  });
}

function getTask(id) {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT rowid AS id, text, completed FROM tasks WHERE rowid = :id",
      id,
      (err, row) => {
        if (err) {
          return reject(err);
        }

        resolve({ ...row, completed: !!row.completed });
      }
    );
  });
}
