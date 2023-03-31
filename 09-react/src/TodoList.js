import classes from "./todo-list.module.css";

function TodoList({ theme }) {
  const style = {
    color: theme === "light" ? "blue" : "green",
  };

  return (
    <>
      <form>
        <input placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        <li>
          <span className={classes.completed} style={style}>
            Learn React
          </span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Look for a job</span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Forget everything</span>
          &nbsp;
          <button>x</button>
        </li>
      </ul>
    </>
  );
}

export default TodoList;
