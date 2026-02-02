import React, { useState } from "react";
import {
  SmileIcon,
  FrownIcon,
  MehIcon,
  LaughIcon,
  AngryIcon,
  AnnoyedIcon,
} from "lucide-react";

const MOODS = [
  { id: "very happy", label: "Very happy", icon: LaughIcon, color: "#22c55e" },
  { id: "happy", label: "Happy", icon: SmileIcon, color: "#14b8a6" },
  { id: "meh", label: "Meh", icon: MehIcon, color: "#38bdf8" },
  { id: "sad", label: "Sad", icon: FrownIcon, color: "#6366f1" },
  { id: "annoyed", label: "Annoyed", icon: AnnoyedIcon, color: "#f59e0b" },
  { id: "angry", label: "Angry", icon: AngryIcon, color: "#ef4444" },
];

const MoodTracker = () => {
  const [moods, setMoods] = useState([]);

  const toggleMood = (moodId) => {
    setMoods((prev) =>
      prev.includes(moodId)
        ? prev.filter((id) => id !== moodId)
        : [...prev, moodId]
    );
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Mood
      </h2>
      <div className="flex flex-col gap-2 flex-1 p-2">
        <div className="grid grid-cols-3 gap-2">
          {MOODS.map((option) => {
            const Icon = option.icon;
            const isActive = moods.includes(option.id);
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => toggleMood(option.id)}
                className={`flex items-center gap-2 px-2 py-2 rounded border-2 text-left transition ${
                  isActive
                    ? ""
                    : "border-slate-200 hover:bg-slate-50"
                }`}
                style={isActive ? { borderColor: option.color, backgroundColor: option.color + "15" } : {}}
              >
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                >
                  <Icon color={isActive ? option.color : "#94a3b8"} size={20} />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
