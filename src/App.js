import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function App() {
  return (
    <div className="container">
      <article>
        <TasksHeader tasks />
        <TasksList
          tasks
          toggleTask
          deleteTask
        />
        <footer>
          <TaskForm addTask/>
        </footer>
      </article>
    </div>
  );
}
