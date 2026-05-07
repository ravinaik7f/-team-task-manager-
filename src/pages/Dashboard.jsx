import { useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([
    { name: "Design UI", status: "Completed" },
    { name: "Build API", status: "Pending" },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      { name: newTask, status: "Pending" }
    ]);

    setNewTask("");
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const changeStatus = (index) => {
    const updated = [...tasks];

    updated[index].status =
      updated[index].status === "Pending"
        ? "Completed"
        : "Pending";

    setTasks(updated);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginTop: "20px",
            width: "300px"
          }}
        >
          <h3>{task.name}</h3>

          <p>Status: {task.status}</p>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>

          <button
            onClick={() => changeStatus(index)}
            style={{ marginLeft: "10px" }}
          >
            Change Status
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;