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
    <div className="h-[90px] w-[276px] mx-auto p-1 bg-white border border-slate-500 shadow rounded">
      <h2 className="font-bold mb-2 bg-[--champagne] p-0.5 px-2 border shadow rounded-sm w-full">
        Mood 
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <LaughIcon
          color={mood === "very happy" ? "#3c3" : "#ccc"}
          size={40}
          onClick={() => handleMoodClick("very happy")}
          style={{ cursor: "pointer" }}
        />
        <SmileIcon
          color={mood === "happy" ? "#3da" : "#ccc"}
          size={40}
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
