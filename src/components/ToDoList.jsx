import React, { useState } from "react";
import { XIcon, CheckIcon } from "lucide-react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(
    Array(5)
      .fill(0)
      .map(() => ({ text: "", completed: false }))
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

  const adjustHeight = (element) => {
    element.style.height = "initial";
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        To-Do List
      </h2>
      <div className="overflow-y-auto flex-1">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center mb-2 px-1 py-1">
            <div className="relative">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
                className="appearance-none bg-white border border-slate-600 shadow mx-1 h-4 w-4"
                style={{
                  backgroundColor: task.completed ? "#839788ff" : "transparent",
                }}
              />
              {task.completed && (
                <div className="absolute top-0.5 left-0 flex items-center justify-center mx-1 h-4 w-4">
                  <CheckIcon onClick={() => handleToggleComplete(index)} />
                </div>
              )}
            </div>
            <textarea
              type="text"
              value={task.text}
              onChange={(e) => handleTaskChange(index, e)}
              onInput={(e) => adjustHeight(e.target)}
              className={`flex-grow p-1 mx-1 border resize-none h-[35px] ${
                task.completed ? "line-through" : ""
              }`}
              placeholder={`Task ${index + 1}`}
            />
            <button
              onClick={() => handleRemoveTask(index)}
              className="mr-1 text-red-400 hover:text-red-800 "
            >
              <XIcon size={16} />
            </button>
          </div>
        ))}
        <div classname="flex flex-row">
          <button
            onClick={handleAddTask}
            className="m-2 px-3 py-1 bg-[--cambridge-blue] text-white rounded hover:bg-[--khaki]"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
