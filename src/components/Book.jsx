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
    <div className="w-full h-full bg-gray-100 overflow-hidden p-2">
      <div className="bg-white shadow-md rounded w-full h-full flex flex-col lg:flex-row border border-gray-400 overflow-hidden">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 p-2 lg:p-3 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <ChevronLeft className="text-gray-600 cursor-pointer" size={20} />
            <div className="font-bold text-sm lg:text-base text-[--cambridge-blue] flex-1 text-center">
              {formattedDate}
            </div>
            <PlusIcon className="text-gray-600" size={20} />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 flex-1 overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <Schedule />
            </div>
            <div className="flex flex-col gap-2 flex-1 overflow-hidden">
              <div className="flex-1 overflow-hidden">
                <Priorities />
              </div>
              <div className="flex-1 overflow-hidden">
                <ToDoList />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 p-2 lg:p-3 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <PlusIcon className="text-gray-600" size={20} />
            <div className="font-bold text-sm lg:text-base text-[--cambridge-blue] flex-1"></div>
            <ChevronRight className="text-gray-600 cursor-pointer" size={20} />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-hidden">
              <div className="flex-none h-48 sm:h-52 overflow-hidden">
                <Notes />
              </div>
              <div className="flex-none h-20 sm:h-24 overflow-hidden">
                <Gratitude />
              </div>
              <div className="flex-none h-36 sm:h-40 overflow-hidden">
                <Weather />
              </div>
              <div className="flex-none h-20 sm:h-24 overflow-hidden">
                <WaterTracker />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-hidden">
              <div className="flex-none h-20 sm:h-24 overflow-hidden">
                <Productivity />
              </div>
              <div className="flex-none h-36 sm:h-40 overflow-hidden">
                <MoodTracker />
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <MealPlanner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractBook;
