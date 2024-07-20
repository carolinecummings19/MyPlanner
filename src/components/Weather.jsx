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
    <div className="h-[90px] w-[276px] mx-auto p-1 bg-white border border-slate-500 shadow rounded">
      <h2 className="font-bold mb-2 bg-[--champagne] p-0.5 px-2 border shadow rounded-sm w-full">
        Weather
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <SunIcon
          color={weather === "sunny" ? "#fd6" : "#ccc"}
          size={40}
          onClick={() => handleWeatherClick("sunny")}
          style={{ cursor: "pointer" }}
        />
        <CloudSunIcon
          color={weather === "cloudy-sun" ? "#ec9" : "#ccc"}
          size={40}
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