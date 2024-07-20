import React, { useState } from "react";

const MealPlanner = () => {
  const [breakfast, setBreakfast] = useState("");

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.value);
  };

  const [lunch, setLunch] = useState("");

  const handleLunchChange = (e) => {
    setLunch(e.target.value);
  };

  const [dinner, setDinner] = useState("");

  const handleDinnerChange = (e) => {
    setDinner(e.target.value);
  };

  const [snack, setSnack] = useState("");

  const handleSnackChange = (e) => {
    setSnack(e.target.value);
  };

  const adjustHeight = (element) => {
    element.style.height = "inherit";
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <div className="h-[390px] w-[276px] mx-auto p-1 bg-white border border-slate-500 shadow rounded">
      <h2 className="font-bold mb-2 bg-[--champagne] p-0.5 px-2 border shadow rounded-sm w-full">
        Meal Planner
      </h2>
      <div className="overflow-scroll h-[344px]">
        <div className="flex flex-col">
          <h3 className="bg-gray-200 px-1 border shadow rounded-sm w-min mb-1">
            Breakfast
          </h3>
          <textarea
            value={breakfast}
            onChange={handleBreakfastChange}
            onInput={(e) => adjustHeight(e.target)}
            className="flex flex-grow p-1 w-full resize-none mb-1"
            style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
          />
          <h3 className="bg-gray-200 px-1 border shadow rounded-sm w-min mb-1">
            Lunch
          </h3>
          <textarea
            value={lunch}
            onChange={handleLunchChange}
            onInput={(e) => adjustHeight(e.target)}
            className="flex flex-grow p-1 w-full resize-none mb-1"
            style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
          />
          <h3 className="bg-gray-200 px-1 border shadow rounded-sm w-min mb-1">
            Dinner
          </h3>
          <textarea
            value={dinner}
            onChange={handleDinnerChange}
            onInput={(e) => adjustHeight(e.target)}
            className="flex flex-grow p-1 w-full resize-none mb-1"
            style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
          />
          <h3 className="bg-gray-200 px-1 border shadow rounded-sm w-min mb-1">
            Snack(s)
          </h3>
          <textarea
            value={snack}
            onChange={handleSnackChange}
            onInput={(e) => adjustHeight(e.target)}
            className="flex flex-grow p-1 w-full resize-none"
            style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
