/** @format */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
import NavBar from "../components/NavBar.jsx";
import BottomBar from '../components/BottomBar.jsx';

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const rootURL = config.serverRootURL;

  useEffect(() => {
    if (!image) return;
    console.log(image[0]);
    const newImageURL = URL.createObjectURL(image[0]);
    setImageURL(newImageURL);
  }, [image]);

  const handleSubmit = async () => {
    // check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // send registration request to backend
      const response = await axios.post(`${rootURL}/signup`, {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
        affiliation: affiliation,
        birthday: bday,
        photo: "",
      });

      if (response.status == 200) {
        navigate("/home");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    }
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen bg-[--light-taupe-grey] overflow-scroll flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="w-[30%] min-w-[340px]">
        <div className="rounded-md bg-[--champagne] text-black p-8 space-y-2 w-full ">
          <div className="font-bold flex w-full justify-center text-2xl mb-4 text-[--black]">
            <p>
              Sign Up to <i>MyPLanner</i>
            </p>
          </div>
          <div className="flex space-x-4 items-center justify-between px-4">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="outline-none bg-white rounded-md border border-slate-100 p-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-4 items-center justify-between px-4">
            <label htmlFor="first_name" className="font-semibold">
              First Name
            </label>
            <input
              id="first_name"
              type="text"
              className="outline-none bg-white rounded-md border border-slate-100 p-3 "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-4 items-center justify-between px-4">
            <label htmlFor="last_name" className="font-semibold">
              Last Name
            </label>
            <input
              id="last_name"
              type="text"
              className="outline-none bg-white rounded-md border border-slate-100 p-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-4 items-center justify-between px-4">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="outline-none bg-white rounded-md border border-slate-100 p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-4 items-center justify-between px-4">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="outline-none bg-white rounded-md border border-slate-100 p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-4 items-center justify-between px-4">
            <label htmlFor="confirmPassword" className="font-semibold">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="outline-none bg-white rounded-md border border-slate-100 p-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="flex flex-row mt-4 items-center justify-between p-3">
                <label htmlFor="selfie" className="font-semibold">
                  Profile picture (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  capture="camera"
                  className="w-auto text-center p-3"
                  onChange={(e) => setImage(e.target.files)}
                />
              </div>
              <div>
                {image && (
                  <img src={imageURL} className="max-h-[170px] my-[10px]" />
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center px-4">
            <button
              type="submit"
              className="px-4 py-3 w-full my-2 rounded-md bg-[--cambridge-blue] hover:bg-[--khaki] outline-none font-bold text-white"
            >
              Sign up
            </button>
          </div>
          <p class="text-center">Already have an account?</p>
            <div className="w-full flex justify-center px-4">
              <button
                type="button"
                className="px-4 py-3 w-full rounded-md bg-[--cambridge-blue] hover:bg-[--khaki] outline-none font-bold text-white"
                onClick={login}
              >
                Login
              </button>
            </div>
        </div>
      </form>
      <NavBar></NavBar>
	  <BottomBar></BottomBar>
    </div>
  );
}