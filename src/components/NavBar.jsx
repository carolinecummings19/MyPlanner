/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import config from "../../config.json";

import {
  UserCircleIcon,
  UserRoundIcon,
  LogOutIcon,
  Menu,
  Sparkles,
  Notebook,
} from "lucide-react";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useParams();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const rootURL = config.serverRootURL;

  useEffect(() => {
    if (!image) return;
    console.log(image[0]);
    const newImageURL = URL.createObjectURL(image[0]);
    setImageURL(newImageURL);
  }, [image]);

  const handleLogOut = async () => {
    try {
      const response = await axios.post(`${rootURL}/logout`);

      if (response.status == 200) {
        socket.emit("userDisconnect");
        navigate("/");
      } else {
        alert("Log out failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Log out failed.");
    }
  };

  const isActive = (pathname) => {
    return location.pathname === pathname ? true : false;
  };

  // const isActive = (pathname) => {
  // 	const loc = location.pathname.split('/');
  // 	return '/' + loc[2] === pathname || '/' + loc[1] === pathname
  // 		? true
  // 		: false;
  // };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const home = () => {
    navigate("/");
  };

  const customize = () => {
    navigate("/customize");
  };

  const profile = () => {
    navigate("/profile");
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div
      className={`fixed bg-[--champagne] text-[--black] border-r-[3px] border-gray ${
        isExpanded ? "w-25" : "w-1"
      } h-full left-0 bottom-0 bg-[--champagne] flex flex-col border-r-[3px] border-gray`}
    >
      <div
        onClick={toggleSidebar}
        className="flex flex-row mx-auto items-center w-[200px] py-[25px] px-[15px] text-[--black] hover:text-slate-500 rounded-md transition "
      >
        <div><Menu className="my-auto mx-[10px]" size={30} /></div>
		<div className='font-bold text-xl mx-[10px] my-[15px]'>MyPlanner</div>
      </div>
      <div>
        {isExpanded && (
          <div>
            <div>
              {isActive("/login") ? (
                <div
				className="flex flex-row mx-auto h-1/6 w-[200px] py-[15px] px-[25px] text-[--black] bg-[--khaki] hover:bg-[--champagne] hover:text-white rounded-md transition text-center"
                  onClick={login}
                >
                  <UserRoundIcon className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px] ">Login</p>
                </div>
              ) : (
                <div
                  className="flex flex-row mx-auto h-1/6 w-[200px] py-[15px] px-[25px] text-[--black] hover:bg-[--khaki] hover:text-white rounded-md transition text-center"
                  onClick={login}
                >
                  <UserRoundIcon className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px] ">Login</p>
                </div>
              )}
              {isActive("/home") ? (
                <div
                  className="flex flex-row mx-auto h-1/6 w-[200px] py-[15px] px-[25px] text-[--black] bg-[--khaki] hover:bg-[--champagne] hover:text-white rounded-md transition text-center"
                  onClick={home}
                >
                  <Notebook className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px]">Planner</p>
                </div>
              ) : (
                <div
                  className="flex flex-row mx-auto h-1/6 w-[200px] py-[15px] px-[25px] text-[--black] hover:bg-[--khaki] hover:text-white rounded-md transition text-center"
                  onClick={home}
                >
                  <Notebook className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px]">Planner</p>
                </div>
              )}

              {isActive("/customize") ? (
                <div
                  className="flex flex-row mx-auto h-1/6 w-[200px] py-[15px] px-[25px] text-[--black] bg-[--khaki] hover:bg-[--champagne] hover:text-white rounded-md transition text-center"
                  onClick={customize}
                >
                  <Sparkles className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px] ">Customize</p>
                </div>
              ) : (
                <div
                  className="flex flex-row mx-auto h-1/6 w-[200px] py-[15px] px-[25px] text-[--black] hover:bg-[--khaki] hover:text-white rounded-md transition text-center"
                  onClick={customize}
                >
                  <Sparkles className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px] ">Customize</p>
                </div>
              )}
              {isActive("/profile") ? (
                <div
                  className="flex flex-row mx-auto h-1/8 w-[200px] py-[15px] px-[25px] text-[--black] bg-[--khaki] hover:bg-[--champagne] hover:text-white rounded-md transition text-center"
                  onClick={profile}
                >
                  <UserCircleIcon className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px] ">Profile</p>
                </div>
              ) : (
                <div
                  className="flex flex-row mx-auto h-1/8 w-[200px] py-[15px] px-[25px] text-[--black] hover:bg-[--khaki] hover:text-white rounded-md transition text-center"
                  onClick={profile}
                >
                  <UserCircleIcon className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px] ">Profile</p>
                </div>
              )}
              <div
                className="flex flex-row mx-auto h-1/8 w-[200px] py-[15px] px-[25px] text-[--black] hover:bg-[--khaki] hover:text-white rounded-md transition text-center"
                onClick={handleLogOut}
              >
                  <LogOutIcon className="my-auto " size={30} />
                  <p className="mt-[3px] px-[15px] ">Logout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
