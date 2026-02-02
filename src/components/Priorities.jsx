import React, { useState } from "react";
import { Trash2, Plus, Star } from "lucide-react";

const Priorities = () => {
  const [priorities, setPriorities] = useState([
    { id: 1, text: "", completed: false, importance: "high" },
    { id: 2, text: "", completed: false, importance: "medium" },
    { id: 3, text: "", completed: false, importance: "low" },
  ]);
  const [nextId, setNextId] = useState(4);

  const handleTextChange = (id, text) => {
    setPriorities(
      priorities.map((p) => (p.id === id ? { ...p, text } : p))
    );
  };

  const handleToggleComplete = (id) => {
    setPriorities(
      priorities.map((p) =>
        p.id === id ? { ...p, completed: !p.completed } : p
      )
    );
  };

  const handleImportanceChange = (id, importance) => {
    setPriorities(
      priorities.map((p) => (p.id === id ? { ...p, importance } : p))
    );
  };

  const handleAddPriority = () => {
    setPriorities([
      ...priorities,
      { id: nextId, text: "", completed: false, importance: "medium" },
    ]);
    setNextId(nextId + 1);
  };

  const handleRemovePriority = (id) => {
    setPriorities(priorities.filter((p) => p.id !== id));
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const completedCount = priorities.filter((p) => p.completed).length;

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      {/* Header */}
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Priorities
      </h2>

      {/* Priority List */}
      <div className="overflow-y-auto flex-1 px-3 py-2 space-y-2">
        {priorities.length === 0 ? (
          <div className="flex items-center justify-center h-full text-slate-400">
            <p>No priorities yet. Add one to get started!</p>
          </div>
        ) : (
          priorities.map((priority) => (
            <div
              key={priority.id}
              className={`group flex items-start gap-2 p-3 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all ${
                priority.completed ? "opacity-60" : ""
              }`}
            >
              {/* Importance Indicator */}
              <button
                onClick={() => {
                  const importances = ["high", "medium", "low"];
                  const currentIndex = importances.indexOf(priority.importance);
                  const nextImportance =
                    importances[(currentIndex + 1) % importances.length];
                  handleImportanceChange(priority.id, nextImportance);
                }}
                className={`flex-shrink-0 mt-1 ${getImportanceColor(
                  priority.importance
                )} hover:scale-110 transition-transform`}
                title={`Importance: ${priority.importance}`}
              >
                <Star size={18} fill="currentColor" />
              </button>

              {/* Text Input */}
              <input
                type="text"
                value={priority.text}
                onChange={(e) => handleTextChange(priority.id, e.target.value)}
                placeholder="Add a priority..."
                className={`flex-grow bg-transparent border-b border-slate-200 focus:border-[--cambridge-blue] focus:outline-none px-2 py-1 text-sm ${
                  priority.completed
                    ? "line-through text-slate-400"
                    : "text-slate-700"
                }`}
              />

              {/* Completion Checkbox */}
              <input
                type="checkbox"
                checked={priority.completed}
                onChange={() => handleToggleComplete(priority.id)}
                className="flex-shrink-0 mt-1 cursor-pointer w-5 h-5 accent-[--cambridge-blue]"
              />

              {/* Delete Button */}
              <button
                onClick={() => handleRemovePriority(priority.id)}
                className="flex-shrink-0 mt-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                title="Delete priority"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Add Button */}
      <div className="border-t border-slate-200 px-3 py-2 bg-slate-50 flex-shrink-0">
        <button
          onClick={handleAddPriority}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[--cambridge-blue] text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm shadow-sm"
        >
          <Plus size={16} />
          Add Priority
        </button>
      </div>
    </div>
  );
};

export default Priorities;
