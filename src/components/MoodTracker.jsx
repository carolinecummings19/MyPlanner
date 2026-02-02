import React, { useState } from "react";
import {
  SmileIcon,
  FrownIcon,
  MehIcon,
  LaughIcon,
  AngryIcon,
  AnnoyedIcon,
} from "lucide-react";

const MoodTracker = () => {
  const [mood, setMood] = useState("");

  const handleMoodClick = (selectedMood) => {
    setMood(selectedMood);
  };

  return (
    <div className="w-full h-28 sm:h-32 flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Mood
      </h2>
      <div className="flex justify-center items-center gap-2 flex-1 flex-wrap p-1">
        <LaughIcon
          color={mood === "very happy" ? "#3c3" : "#ccc"}
          size={32}
          onClick={() => handleMoodClick("very happy")}
          style={{ cursor: "pointer" }}
        />
        <SmileIcon
          color={mood === "happy" ? "#3da" : "#ccc"}
          size={32}
          onClick={() => handleMoodClick("happy")}
          style={{ cursor: "pointer" }}
        />
        <MehIcon
          color={mood === "meh" ? "#8cf" : "#ccc"}
          size={40}
          onClick={() => handleMoodClick("meh")}
          style={{ cursor: "pointer" }}
        />
        <FrownIcon
          color={mood === "sad" ? "#56d" : "#ccc"}
          size={40}
          onClick={() => handleMoodClick("sad")}
          style={{ cursor: "pointer" }}
        />
        <AnnoyedIcon
          color={mood === "annoyed" ? "#fc0" : "#ccc"}
          size={40}
          onClick={() => handleMoodClick("annoyed")}
          style={{ cursor: "pointer" }}
        />
        <AngryIcon
          color={mood === "angry" ? "#e44" : "#ccc"}
          size={40}
          onClick={() => handleMoodClick("angry")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default MoodTracker;
