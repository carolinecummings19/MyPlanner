import React, { useState } from "react";
import { XIcon, CheckIcon, StarIcon } from "lucide-react";

const Priorities = () => {
  const [tasks, setTasks] = useState(
    Array(3)
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
        Priorities
      </h2>
      <div className="overflow-y-auto flex-1">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center mb-2 px-1 py-1">
            <div className="relative">
              {/* <input
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
                  <StarIcon onClick={() => handleToggleComplete(index)} />
                </div>
              )} */}
              <StarIcon
                onClick={() => handleToggleComplete(index)}
                className={`mx-0.5`}
                size={20}
                color={task.completed ? "#fd6" : "#ccc"}
                fill={task.completed ? "#fd6" : "#fff"}
                style={{ cursor: "pointer" }}
              />
            </div>
            <textarea
              type="text"
              value={task.text}
              onChange={(e) => handleTaskChange(index, e)}
              onInput={(e) => adjustHeight(e.target)}
              className={`flex-grow p-1 mx-1 h-[35px] border resize-none ${
                task.completed ? "line-through" : ""
              }`}
              placeholder={`Priority ${index + 1}`}
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

export default Priorities;
