import React, { useState, useRef, useEffect } from "react";

const Schedule = () => {

  // 30-min increments for more granularity
  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const min = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${min}`;
  });

  const [events, setEvents] = useState([]);

  // Get current time
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeIndex = currentHour * 2 + (currentMinutes >= 30 ? 1 : 0);
  const slotHeight = 56; // px

  // Scroll to current time on mount
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = Math.max(0, slotHeight * (currentTimeIndex - 3));
    }
  }, []);


  const addEvent = (startIndex) => {
    const newEvent = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      startIndex,
      durationSlots: 2, // default 30 min (2 x 15-min blocks)
      title: "",
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  const updateEvent = (id, updates) => {
    setEvents((prev) =>
      prev.map((event) => (event.id === id ? { ...event, ...updates } : event))
    );
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };


  // For auto-resize (optional, can be removed if not needed)
  const adjustHeight = (element) => {
    element.style.height = "inherit";
    element.style.height = `${element.scrollHeight}px`;
  };


  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Daily Schedule
      </h2>
      <div
        className="relative flex-1 overflow-y-auto"
        ref={scrollRef}
        style={{ background: "#f8fafc" }}
      >
        {/* Current time indicator */}
        <div
          className="absolute left-0 right-0 z-10 pointer-events-none"
          style={{
            top: `${currentTimeIndex * slotHeight +
              (currentMinutes % 30) * (slotHeight / 30)}px`,
            height: "1px",
            background: "rgba(250, 204, 21, 0.7)",
            boxShadow: "0 0 2px rgba(250, 204, 21, 0.35)",
          }}
        />
        <div className="relative">
          <div className="flex flex-col">
            {timeSlots.map((time, index) => (
              <div
                key={time}
                className="flex items-center border-b border-slate-200 bg-white group relative"
                style={{ minHeight: slotHeight, height: slotHeight }}
              >
                <div className="w-16 text-right pr-3 text-xs text-slate-500 select-none font-mono">
                  {time}
                </div>
                <div className="flex-1 h-full border-l border-slate-200 relative">
                  <button
                    type="button"
                    onClick={() => addEvent(index)}
                    className="absolute top-1/2 -translate-y-1/2 left-3 text-xs text-slate-400 hover:text-slate-700 opacity-0 group-hover:opacity-100 transition"
                    aria-label={`Add event at ${time}`}
                  >
                    + Add event
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Events overlay */}
          <div className="absolute left-16 right-3 top-0">
            {events.map((event) => (
              <div
                key={event.id}
                className="absolute"
                style={{
                  top: event.startIndex * slotHeight,
                  height: event.durationSlots * (slotHeight / 2),
                }}
              >
                <div className="h-full bg-blue-50 border border-blue-300 rounded-lg shadow-sm px-2 py-1 flex flex-col">
                  <textarea
                    value={event.title}
                    onChange={(e) =>
                      updateEvent(event.id, { title: e.target.value })
                    }
                    onInput={(e) => adjustHeight(e.target)}
                    className="w-full bg-transparent rounded border border-transparent focus:border-blue-300 text-sm resize-none px-1 py-0.5 flex-grow"
                    style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
                    placeholder="Event title"
                  />
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-1">
                    <span>Duration</span>
                    <select
                      value={event.durationSlots}
                      onChange={(e) =>
                        updateEvent(event.id, {
                          durationSlots: Number(e.target.value),
                        })
                      }
                      className="bg-white border border-slate-200 rounded px-1 py-0.5"
                    >
                      {Array.from({ length: 24 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n * 15} min
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => deleteEvent(event.id)}
                      className="ml-auto text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
