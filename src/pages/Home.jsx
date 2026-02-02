/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import BottomBar from "../components/BottomBar.jsx";
import Book from "../components/Book.jsx";

export default function Home() {
  const { username } = useParams();
  const rootURL = config.serverRootURL;

  const navigate = useNavigate();

  const fetchData = async () => {
    // fetch posts data and set appropriate state variables
    try {
      const responseFeed = await axios.get(`${rootURL}/${username}/feed`);
      setPosts(responseFeed.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen bg-[--light-taupe-grey] flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* <NavBar></NavBar> */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <NavBar></NavBar>
          <div className="flex-1 overflow-auto flex items-center justify-center p-3 ml-12 mb-4">
            <Book></Book>
          </div>
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
