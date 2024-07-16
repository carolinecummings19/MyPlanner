import React, { useState } from "react";
import { XIcon } from "lucide-react";

const ToDoList = () => {
    const [tasks, setTasks] = useState(
        Array(5)
          .fill(0)
          .map(() => ({ text: '', completed: false }))
      );

  const handleTaskChange = (index, event) => {
    const newTasks = [...tasks];
    newTasks[index].text = event.target.value;
    setTasks(newTasks);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { text: "", completed: false }]);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto p-1 bg-white border border-slate-500 shadow rounded">
      <h2 className="text-xl font-bold mb-4 bg-[--champagne] p-1 px-2 border shadow rounded-sm w-full">
        To-Do List
      </h2>
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center mb-2 px-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleComplete(index)}
            className={`ml-2 h-5 w-5 ${task.completed ? `cambridge-blue` : ``}`}
          />
          <input
            type="text"
            value={task.text}
            onChange={(e) => handleTaskChange(index, e)}
            className={`flex-grow p-2 mx-3 border ${
              task.completed ? "line-through" : ""
            }`}
            placeholder={`Task ${index + 1}`}
          />
          <button
            onClick={() => handleRemoveTask(index)}
            className="mr-1 text-red-400 rounded hover:text-red-800"
          >
           <XIcon/>
          </button>
        </div>
      ))}
      <div classname="flex flex-row">
        <button
          onClick={handleAddTask}
          className="m-2 px-3 py-1 bg-[--cambridge-blue] text-white rounded hover:bg-[--khaki]"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
