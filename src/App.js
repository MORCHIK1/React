import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const tasksLeft = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="footer">
        <p>{tasksLeft} tasks left</p>
      </div>
    </div>
  );
}

export default App;
