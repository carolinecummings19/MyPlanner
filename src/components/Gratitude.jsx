import React, { useState } from "react";

const Gratitude = () => {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="h-[90px] w-[276px] mx-auto p-1 bg-white border border-slate-500 shadow rounded">
      <h2 className="font-bold mb-2 bg-[--champagne] p-0.5 px-2 border shadow rounded-sm w-full">
        Today I am grateful for ...
      </h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        className="flex-grow p-1 h-[44px] w-full resize-none"
        style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
      />
    </div>
  );
};

export default Gratitude;
