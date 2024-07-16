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
    <div className="w-screen h-screen bg-[--light-taupe-grey]">
      <div className="h-full mx-auto my-[10px] ml-[150px] max-w-[1800px] flex flex-col items-center overflow-scroll">
        <div className="w-screen h-screen bg-[--light-taupe-grey] overflow-scroll flex items-center justify-center">
          <Book></Book>
        </div>
      </div>
      <NavBar></NavBar>
      <BottomBar></BottomBar>
    </div>
  );
}
