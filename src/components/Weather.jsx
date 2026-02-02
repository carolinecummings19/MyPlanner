import React, { useState } from "react";
import {
  SunIcon,
  CloudSunIcon,
  CloudyIcon,
  CloudRainIcon,
  CloudLightningIcon,
  SnowflakeIcon,
} from "lucide-react";

const Weather = () => {
  const [weather, setWeather] = useState("");

  const handleWeatherClick = (selectedWeather) => {
    setWeather(selectedWeather);
  };

  return (
    <div className="w-full h-28 sm:h-32 flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Weather
      </h2>
      <div className="flex justify-center items-center gap-2 flex-1 flex-wrap p-1">
        <SunIcon
          color={weather === "sunny" ? "#fd6" : "#ccc"}
          size={32}
          onClick={() => handleWeatherClick("sunny")}
          style={{ cursor: "pointer" }}
        />
        <CloudSunIcon
          color={weather === "cloudy-sun" ? "#ec9" : "#ccc"}
          size={32}
          onClick={() => handleWeatherClick("cloudy-sun")}
          style={{ cursor: "pointer" }}
        />
        <CloudyIcon
          color={weather === "cloudy" ? "#99a" : "#ccc"}
          size={40}
          onClick={() => handleWeatherClick("cloudy")}
          style={{ cursor: "pointer" }}
        />
        <CloudRainIcon
          color={weather === "rainy" ? "#9df" : "#ccc"}
          size={40}
          onClick={() => handleWeatherClick("rainy")}
          style={{ cursor: "pointer" }}
        />
        <CloudLightningIcon
          color={weather === "lightning" ? "#66c" : "#ccc"}
          size={40}
          onClick={() => handleWeatherClick("lightning")}
          style={{ cursor: "pointer" }}
        />
        <SnowflakeIcon
          color={weather === "snowy" ? "#ddf" : "#ccc"}
          size={40}
          onClick={() => handleWeatherClick("snowy")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Weather;