import React, { useState } from "react";
import {
  DropletIcon,
} from "lucide-react";

const WaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  const handleWaterClick = (index) => {
    setWaterIntake(index + 1);
  };

  return (
    <div className="h-[90px] w-[276px] mx-auto p-1 bg-white border border-slate-500 shadow rounded">
      <h2 className="font-bold mb-2 bg-[--champagne] p-0.5 px-2 border shadow rounded-sm w-full">
        Water Tracker
      </h2>
      <div
        className="mb-2"
        style={{ display: "flex", justifyContent: "center", gap: "2px" }}
      >
        {[...Array(8)].map((_, index) => (
          <DropletIcon
            key={index}
            color={index < waterIntake ? "#59f" : "#ccc"}
            fill={index < waterIntake ? "#59f" : "#fff"}
            size={40}
            onClick={() => handleWaterClick(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterTracker;
