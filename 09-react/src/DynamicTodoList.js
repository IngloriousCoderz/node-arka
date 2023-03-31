import classes from "./todo-list.module.css";

const tasks = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList() {
  return (
    <>
      <form>
        <input placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li>
            <span className={task.completed ? classes.completed : null}>
              {task.text}
            </span>
            &nbsp;
            <button>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
