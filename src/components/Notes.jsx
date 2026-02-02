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
        className="flex-grow p-1 resize-none text-sm overflow-y-auto"
        placeholder="Type your notes/ideas here..."
        style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
      />
    </div>
  );
};

export default Notes;
