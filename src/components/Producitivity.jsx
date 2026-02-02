import React, { useState } from "react";
import { ZapIcon } from "lucide-react";

const Productivity = () => {
  const [productivity, setProductivity] = useState(0);

  const handleProductivityClick = (index) => {
    setProductivity(index + 1);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Productivity
      </h2>
      <div className="flex justify-center items-center gap-1 flex-1 flex-wrap p-1">
        {[...Array(8)].map((_, index) => (
          <ZapIcon
            key={index}
            color={index < productivity ? "#fd6" : "#ccc"}
            fill={index < productivity ? "#fd6" : "#fff"}
            size={28}
            onClick={() => handleProductivityClick(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Productivity;
