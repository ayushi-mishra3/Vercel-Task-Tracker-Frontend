import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleStatus,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data.tasks);
    } catch (error) {
      toast.error("Unable to fetch tasks.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    try {
      await createTask(taskData);
      toast.success("Task Added Successfully");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const editTask = async (taskData) => {
    try {
      await updateTask(editingTask._id, taskData);

      toast.success("Task Updated Successfully");

      setEditingTask(null);

      fetchTasks();
    } catch (error) {
      toast.error("Unable to update task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);

      toast.success("Task Deleted");

      fetchTasks();
    } catch (error) {
      toast.error("Unable to delete task");
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleStatus(id);

      toast.success("Status Updated");

      fetchTasks();
    } catch (error) {
      toast.error("Unable to update status");
    }
  };

  const filteredTasks = useMemo(() => {
    let updatedTasks = [...tasks];

    if (filter !== "All") {
      updatedTasks = updatedTasks.filter(
        (task) => task.status === filter
      );
    }

    switch (sort) {
      case "Newest":
        updatedTasks.sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;

      case "Oldest":
        updatedTasks.sort(
          (a, b) =>
            new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;

      case "Due Date":
        updatedTasks.sort(
          (a, b) =>
            new Date(a.dueDate || 0) -
            new Date(b.dueDate || 0)
        );
        break;

      default:
        break;
    }

    return updatedTasks;
  }, [tasks, filter, sort]);

  return (
    <>
      <Navbar />

      <ToastContainer position="top-right" autoClose={2000} />

      <main className="dashboard">
        <section className="left-panel">
          <TaskForm
            addTask={addTask}
            editTask={editTask}
            editingTask={editingTask}
          />
        </section>

        <section className="right-panel">
          <TaskList
            tasks={filteredTasks}
            onDelete={handleDelete}
            onEdit={setEditingTask}
            onToggle={handleToggle}
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
        </section>
      </main>
    </>
  );
}

export default App;