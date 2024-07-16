/** @format */

import { useState } from "react";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import BottomBar from "../components/BottomBar.jsx";
import Book from "../components/Book.jsx";
import { SearchIcon } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const rootURL = config.serverRootURL;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="w-screen h-screen bg-[--light-taupe-grey]">
        <div className="h-full mx-auto text-center my-[40px] ml-[100px] max-w-[1800px] flex flex-col items-center overflow-scroll">
          <div className="flex flex-row w-1/2 mx-auto items-center">
            <SearchIcon
              size={40}
              className="my-auto mx-[10px] stroke-[--cambridge-blue]"
            ></SearchIcon>{" "}
            <input
              type="text"
              placeholder="Search for items to add to your planner..."
              value={searchQuery}
              className="placeholder:text-[#0000004a] text-[18px] transition-all hover:bg-[#cfe5c7] w-full h-[55px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[--cambridge-blue] p-2"
            />
            <button className="px-4 py-2 my-auto mx-[15px] rounded-lg bg-[--cambridge-blue] hover:bg-[--khaki] outline-none font-bold text-white">
              Search
            </button>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
      <BottomBar></BottomBar>
    </div>
  );
}