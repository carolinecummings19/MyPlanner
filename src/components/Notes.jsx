import React, { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Notes
      </h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        className="flex-grow p-4 resize-none text-base overflow-y-auto focus:outline-none"
        placeholder="Start typing your notes..."
        style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
      />
    </div>
  );
};

export default Notes;
