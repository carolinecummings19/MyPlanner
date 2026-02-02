import React, { useState } from "react";
import { DropletIcon } from "lucide-react";

const WaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  const handleWaterClick = (index) => {
    setWaterIntake(index + 1);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Water Tracker
      </h2>
      <div className="flex justify-center items-center gap-1 flex-1 flex-wrap p-1">
        {[...Array(8)].map((_, index) => (
          <DropletIcon
            key={index}
            color={index < waterIntake ? "#59f" : "#ccc"}
            fill={index < waterIntake ? "#59f" : "#fff"}
            size={24}
            onClick={() => handleWaterClick(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterTracker;
