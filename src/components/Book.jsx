import React from "react";
import { PlusIcon, ChevronLeft, ChevronRight } from "lucide-react";
import ToDoList from "./ToDoList";
import Schedule from "./Schedule";
import Priorities from "./Priorities";
import Notes from "./Notes";
import MoodTracker from "./MoodTracker";
import WaterTracker from "./WaterTracker";
import Weather from "./Weather";
import Productivity from "./Producitivity";
import Gratitude from "./Gratitude";
import MealPlanner from "./MealPlanner";

const AbstractBook = () => {
  // Create a Date object
  const currentDate = new Date();

  // Format the date.
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="justify-center items-center min-h-screen h-screen bg-gray-100 overflow-scroll">
      <div className="bg-white shadow-md rounded overflow-auto w-[1250px] h-[670px] flex mb-14 mt-8 ml-36 mr-24 border border-gray-400">
        {/* Left Panel */}
        <div className="w-1/2 p-6">
          <div className="flex justify-between items-center mb-2">
            <ChevronLeft className="text-gray-600 cursor-pointer" size={24} />
            <div className="font-bold text-xl text-[--cambridge-blue] mr-auto">
              {formattedDate}
            </div>
            <PlusIcon className="text-gray-600" size={24} />
          </div>
          <div className="flex flex-row justify-between">
            <Schedule />
            <div className="flex flex-col justify-between">
              <Priorities />
              <ToDoList />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-6 pr-9 border-l border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <PlusIcon className="text-gray-600" size={24} />
            <div className="font-bold text-xl text-[--cambridge-blue] mr-auto"></div>
            <ChevronRight className="text-gray-600 cursor-pointer " size={24} />
          </div>
          <div className="flex flex-row" style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <div className="flex flex-col" style={{ display: "flex", justifyContent: "top", gap: "10px" }}>
              <Notes />
              <Gratitude />
              <Productivity />
              <WaterTracker />
            </div>
            <div className="flex flex-col" style={{ display: "flex", gap: "10px" }}>
              <Weather />
              <MoodTracker />
              <MealPlanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractBook;
