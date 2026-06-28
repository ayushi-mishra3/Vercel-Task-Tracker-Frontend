import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-backend-peach.vercel.app/api/tasks",
});

export const getTasks = () => API.get("/");
export const createTask = (taskData) => API.post("/", taskData);
export const updateTask = (id, taskData) => API.put(`/${id}`, taskData);
export const deleteTask = (id) => API.delete(`/${id}`);
export const toggleStatus = (id) => API.patch(`/${id}/status`);