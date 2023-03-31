const util = require("util");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

const getAll = util.promisify(db.all).bind(db);
const get = util.promisify(db.get).bind(db);
const createRun = (stmt) => util.promisify(stmt.run).bind(stmt);

module.exports = {
  getTasks,
  getTask,
  createTask,
  replaceTask,
  updateTask,
  deleteTask,
};

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

async function getTasks() {
  const rows = await getAll("SELECT rowid AS id, text, completed FROM tasks");
  return rows.map((row) => ({ ...row, completed: !!row.completed }));
}

async function getTask(id) {
  const row = await get(
    "SELECT rowid AS id, text, completed FROM tasks WHERE rowid = :id",
    id
  );

  return { ...row, completed: !!row.completed };
}

async function createTask(body) {
  const stmt = db.prepare("INSERT INTO tasks VALUES (?, ?)");
  const run = createRun(stmt);
  await run(Object.values(body));
  return { ...body, id: stmt.lastID };
}

async function replaceTask(id, body) {
  const stmt = db.prepare(
    "UPDATE tasks SET text = ?, completed = ? WHERE rowid = ?",
    [body.text, body.completed, id]
  );
  const run = createRun(stmt);
  await run();

  return getTask(id);
}

async function updateTask(id, patch) {
  const stmt = db.prepare(
    `UPDATE tasks SET ${createKeysString(patch)} WHERE rowid = ?`,
    [...Object.values(patch), id]
  );
  const run = createRun(stmt);
  await run();

  return getTask(id);
}

async function deleteTask(id) {
  const row = await getTask(id);

  const stmt = db.prepare("DELETE FROM tasks WHERE rowid = ?", id);
  const run = createRun(stmt);
  await run();

  return row;
}

function createKeysString(patch) {
  return Object.keys(patch)
    .map((key) => `${key} = ?`)
    .join(", ");
}
