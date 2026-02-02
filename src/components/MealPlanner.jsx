import React, { useState } from "react";

const MealPlanner = () => {
  const [meals, setMeals] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",
  });

  const handleMealChange = (mealType, value) => {
    setMeals((prev) => ({
      ...prev,
      [mealType]: value,
    }));
  };

  const mealTypes = [
    { key: "breakfast", label: "Breakfast" },
    { key: "lunch", label: "Lunch" },
    { key: "dinner", label: "Dinner" },
    { key: "snacks", label: "Snacks" },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Meal Planner
      </h2>
      <div className="overflow-y-auto flex-1">
        <div className="flex flex-col divide-y divide-slate-300">
          {mealTypes.map((meal) => (
            <div key={meal.key} className="flex flex-col px-3 py-2">
              <label className="font-semibold text-slate-700 mb-1 text-sm">
                {meal.label}
              </label>
              <textarea
                value={meals[meal.key]}
                onChange={(e) => handleMealChange(meal.key, e.target.value)}
                className="p-1.5 border border-slate-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="2"
                placeholder={`Add ${meal.label.toLowerCase()} items...`}
                style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
