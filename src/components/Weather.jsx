import React, { useEffect, useMemo, useState } from "react";
import {
  SunIcon,
  CloudSunIcon,
  CloudyIcon,
  CloudRainIcon,
  CloudLightningIcon,
  SnowflakeIcon,
} from "lucide-react";

const WEATHER_CODE_MAP = {
  0: { label: "Clear", icon: SunIcon, color: "#fbbf24" },
  1: { label: "Mostly clear", icon: CloudSunIcon, color: "#f59e0b" },
  2: { label: "Partly cloudy", icon: CloudSunIcon, color: "#f59e0b" },
  3: { label: "Overcast", icon: CloudyIcon, color: "#94a3b8" },
  45: { label: "Fog", icon: CloudyIcon, color: "#94a3b8" },
  48: { label: "Rime fog", icon: CloudyIcon, color: "#94a3b8" },
  51: { label: "Light drizzle", icon: CloudRainIcon, color: "#38bdf8" },
  53: { label: "Drizzle", icon: CloudRainIcon, color: "#38bdf8" },
  55: { label: "Heavy drizzle", icon: CloudRainIcon, color: "#38bdf8" },
  56: { label: "Freezing drizzle", icon: CloudRainIcon, color: "#38bdf8" },
  57: { label: "Freezing drizzle", icon: CloudRainIcon, color: "#38bdf8" },
  61: { label: "Light rain", icon: CloudRainIcon, color: "#38bdf8" },
  63: { label: "Rain", icon: CloudRainIcon, color: "#38bdf8" },
  65: { label: "Heavy rain", icon: CloudRainIcon, color: "#0ea5e9" },
  66: { label: "Freezing rain", icon: CloudRainIcon, color: "#38bdf8" },
  67: { label: "Freezing rain", icon: CloudRainIcon, color: "#38bdf8" },
  71: { label: "Light snow", icon: SnowflakeIcon, color: "#e2e8f0" },
  73: { label: "Snow", icon: SnowflakeIcon, color: "#e2e8f0" },
  75: { label: "Heavy snow", icon: SnowflakeIcon, color: "#e2e8f0" },
  77: { label: "Snow grains", icon: SnowflakeIcon, color: "#e2e8f0" },
  80: { label: "Rain showers", icon: CloudRainIcon, color: "#38bdf8" },
  81: { label: "Heavy showers", icon: CloudRainIcon, color: "#0ea5e9" },
  82: { label: "Violent showers", icon: CloudRainIcon, color: "#0ea5e9" },
  85: { label: "Snow showers", icon: SnowflakeIcon, color: "#e2e8f0" },
  86: { label: "Heavy snow showers", icon: SnowflakeIcon, color: "#e2e8f0" },
  95: { label: "Thunderstorm", icon: CloudLightningIcon, color: "#818cf8" },
  96: { label: "Thunderstorm", icon: CloudLightningIcon, color: "#818cf8" },
  99: { label: "Thunderstorm", icon: CloudLightningIcon, color: "#818cf8" },
};

const DEFAULT_WEATHER = {
  label: "Unknown",
  icon: CloudyIcon,
  color: "#94a3b8",
};

const Weather = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const condition = useMemo(() => {
    if (!current) {
      return DEFAULT_WEATHER;
    }
    return WEATHER_CODE_MAP[current.weather_code] || DEFAULT_WEATHER;
  }, [current]);

  const Icon = condition.icon;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchWeather = async (latitude, longitude) => {
      setStatus("loading");
      setError("");

      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current:
          "temperature_2m,apparent_temperature,weather_code,is_day",
        temperature_unit: "fahrenheit",
        timezone: "auto",
      });

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Weather service is unavailable.");
        }

        const data = await response.json();
        if (!data?.current) {
          throw new Error("Weather data is incomplete.");
        }

        if (isMounted) {
          setCurrent({
            temperature: data.current.temperature_2m,
            feelsLike: data.current.apparent_temperature,
            weather_code: data.current.weather_code,
            is_day: data.current.is_day,
          });
          setStatus("success");
        }
      } catch (err) {
        if (!isMounted || err?.name === "AbortError") {
          return;
        }
        setError(err?.message || "Unable to fetch weather.");
        setStatus("error");
      }
    };

    const requestLocation = () => {
      if (!navigator.geolocation) {
        setError("Location access is not supported by this browser.");
        setStatus("error");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          if (!isMounted) {
            return;
          }
          const message =
            err.code === err.PERMISSION_DENIED
              ? "Location permission was denied. Enable it to see local weather."
              : "Unable to access your location.";
          setError(message);
          setStatus("error");
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
      );
    };

    requestLocation();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [refreshKey]);

  return (
    <div className="w-full h-full flex flex-col bg-white border border-slate-500 shadow rounded overflow-hidden">
      <h2 className="font-bold bg-[--champagne] px-2 py-1 border-b border-slate-500 shadow-sm w-full flex-shrink-0">
        Weather
      </h2>
      <div className="flex flex-col gap-3 flex-1 p-3">
        {status === "loading" && (
          <div className="flex flex-col items-center justify-center gap-2 rounded border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-600">
            <span className="font-semibold">Fetching local weather...</span>
            <span>Checking your location and loading live data.</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col gap-3 rounded border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-700">
            <p className="font-semibold">Unable to load weather</p>
            <p>{error}</p>
            <button
              type="button"
              onClick={() => setRefreshKey((prev) => prev + 1)}
              className="self-start rounded border border-rose-200 bg-white px-3 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-100"
            >
              Try again
            </button>
          </div>
        )}

        {status === "success" && current && (
          <div className="flex flex-col gap-3 rounded border border-slate-200 bg-slate-50 px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Icon color={condition.color} size={26} />
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-slate-800">
                  {Math.round(current.temperature)}°F
                </span>
                <span className="text-xs text-slate-500">
                  {condition.label} · Feels like {Math.round(current.feelsLike)}°F
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;