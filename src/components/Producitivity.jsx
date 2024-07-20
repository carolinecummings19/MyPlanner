import React, { useState } from "react";
import { ZapIcon } from "lucide-react";

const Productivity = () => {
  const [productivity, setProductivity] = useState(0);

  const handleProductivityClick = (index) => {
    setProductivity(index + 1);
  };

  return (
    <div className="h-[90px] w-[276px] mx-auto p-1 bg-white border border-slate-500 shadow rounded">
      <h2 className="font-bold mb-2 bg-[--champagne] p-0.5 px-2 border shadow rounded-sm w-full">
        Productivity
      </h2>
      <div
        className="mb-2"
        style={{ display: "flex", justifyContent: "center", gap: "2px" }}
      >
        {[...Array(8)].map((_, index) => (
          <ZapIcon
            key={index}
            color={index < productivity ? "#fd6" : "#ccc"}
            fill={index < productivity ? "#fd6" : "#fff"}
            size={40}
            onClick={() => handleProductivityClick(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Productivity;
