import React, { useState } from "react";

const Schedule = () => {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const [schedule, setSchedule] = useState(
    hours.map((hour) => ({ hour, task1: "", task2: "" }))
  );

  // Get current hour
  const currentHour = new Date().getHours();
  const currentHourFormatted = `${currentHour}:00`;
  const currentMinutes = new Date().getMinutes();

  const handleTask1Change = (index, event) => {
    const newSchedule = [...schedule];
    newSchedule[index].task1 = event.target.value;
    setSchedule(newSchedule);
  };

  const handleTask2Change = (index, event) => {
    const newSchedule = [...schedule];
    newSchedule[index].task2 = event.target.value;
    setSchedule(newSchedule);
  };

  const adjustHeight = (element) => {
    element.style.height = "inherit";
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <div className="h-[590px] w-[276px] mx-auto p-1 bg-white border border-slate-500 shadow rounded ">
      <h2 className="font-bold mb-0.5 bg-[--champagne] p-0.5 px-2 border shadow rounded-sm w-full">
        Daily Schedule
      </h2>
      <div className="overflow-scroll h-[550px]">
        {schedule.map((entry, index) => (
          <div key={index} className="flex items-center my-1 p-0.5 border-2">
            <div className="px-2 text-center">{entry.hour}</div>
            <div className="flex flex-col border-l-2">
              <textarea
                type="text"
                value={entry.task1}
                onChange={(e) => handleTask1Change(index, e)}
                onInput={(e) => adjustHeight(e.target)}
                className={`flex flex-grow mx-1 border-b-2 h-[35px] mb-0.5 resize-none ${
                  entry.hour === currentHourFormatted ? "bg-yellow-200" : ""
                }`}
                style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
              />
              <textarea
                type="text"
                value={entry.task2}
                onChange={(e) => handleTask2Change(index, e)}
                onInput={(e) => adjustHeight(e.target)}
                className={`flex flex-grow mx-1 resize-none h-[35px] ${
                  entry.hour === currentHourFormatted ? "bg-yellow-200" : ""
                }`}
                style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
