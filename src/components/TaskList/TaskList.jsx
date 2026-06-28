import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";
import FilterBar from "../FilterBar/FilterBar";

const TaskList = ({
  tasks,
  onDelete,
  onEdit,
  onToggle,
  filter,
  setFilter,
  sort,
  setSort,
}) => {
  return (
    <div className="task-list">
      <div className="task-header">
        <h2>Your Tasks</h2>

        <span className="task-count">
          {tasks.length}
        </span>
      </div>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      {tasks.length === 0 ? (
        <div className="empty-state">
          <h3>No Tasks Yet</h3>
          <p>Add your first task.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;