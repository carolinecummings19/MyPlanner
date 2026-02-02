import React, { useState } from "react";
import { XIcon, CheckIcon, Plus } from "lucide-react";

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

      <div className="overflow-y-auto flex-1 px-3 py-2 space-y-2">
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-full text-slate-400 text-sm">
            <p>No tasks yet. Add one to get started!</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className={`group flex items-start gap-2 p-3 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all ${
                task.completed ? "opacity-70" : ""
              }`}
            >
              <button
                onClick={() => handleToggleComplete(index)}
                className={`flex-shrink-0 mt-1 w-5 h-5 border rounded-md flex items-center justify-center transition-colors ${
                  task.completed
                    ? "bg-[--cambridge-blue] border-[--cambridge-blue]"
                    : "bg-white border-slate-300"
                }`}
                aria-label={
                  task.completed ? "Mark as incomplete" : "Mark as complete"
                }
              >
                {task.completed && (
                  <CheckIcon size={14} className="text-white" />
                )}
              </button>

              <textarea
                type="text"
                value={task.text}
                onChange={(e) => handleTaskChange(index, e)}
                onInput={(e) => adjustHeight(e.target)}
                className={`flex-grow bg-transparent border-b border-slate-200 focus:border-[--cambridge-blue] focus:outline-none px-1 py-1 text-sm resize-none min-h-[32px] ${
                  task.completed
                    ? "line-through text-slate-400"
                    : "text-slate-700"
                }`}
                placeholder={`Task ${index + 1}`}
              />

              <button
                onClick={() => handleRemoveTask(index)}
                className="flex-shrink-0 mt-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                title="Delete task"
              >
                <XIcon size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-slate-200 px-3 py-2 bg-slate-50 flex-shrink-0">
        <button
          onClick={handleAddTask}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[--cambridge-blue] text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm shadow-sm"
        >
          <Plus size={16} />
          Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
