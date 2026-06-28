import "./TaskCard.css";
import {
  FaEdit,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

const TaskCard = ({
  task,
  onDelete,
  onEdit,
  onToggle,
}) => {
  return (
    <div className="task-card">
      <div className="task-top">
        <h3>{task.title}</h3>

        <span
          className={`status ${
            task.status === "Completed"
              ? "completed"
              : "pending"
          }`}
        >
          {task.status}
        </span>
      </div>

      <p className="description">
        {task.description || "No description"}
      </p>

      <p className="date">
        📅 Due:{" "}
        {task.dueDate
          ? new Date(task.dueDate).toLocaleDateString()
          : "No Due Date"}
      </p>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          <FaEdit />
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task._id)}
        >
          <FaTrash />
        </button>

        <button
          className="complete-btn"
          onClick={() => onToggle(task._id)}
        >
          <FaCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;