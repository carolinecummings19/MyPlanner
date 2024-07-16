/** @format */

import { useState } from "react";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar.jsx';
import BottomBar from '../components/BottomBar.jsx';

export default function Login() {
  const navigate = useNavigate();

  // set appropriate state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const rootURL = config.serverRootURL;

  const handleLogin = async () => {
    // check username and password using /login route

    try {
      // send registration request to backend
      const response = await axios.post(`${rootURL}/`, {
        username: username,
        password: password,
      });
      console.log(response.status);

      if (response.status == 200) {
        console.log("response 200");
        navigate(`/home`);
      } else {
        alert("Log in failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Log in failed.");
    }
  };

  const signup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="w-screen h-screen bg-[--light-taupe-grey] overflow-scroll flex flex-col items-center justify-center">
        <form>
          <div className="rounded-md bg-[--champagne] p-20 space-y-2 w-full">
            <p className="font-bold flex w-full justify-center text-4xl mb-10 text-[--black]">
              <i>MyPlanner</i>
            </p>
            <div className="flex space-x-6 items-center justify-between">
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="outline-none bg-white rounded-md border border-slate-100 p-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex space-x-4 items-center justify-between">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="outline-none bg-white rounded-md border border-slate-100 p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="px-4 py-3 w-full mt-2 mb-1 rounded-md bg-[--cambridge-blue] hover:bg-[--khaki] outline-none font-bold text-white"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
			<p class="text-center">Don't have an account?</p>
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="px-4 py-3 w-full rounded-md bg-[--cambridge-blue] hover:bg-[--khaki] outline-none font-bold text-white"
                onClick={signup}
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
	  <NavBar></NavBar>
	  <BottomBar></BottomBar>
    </div>
  );
}
