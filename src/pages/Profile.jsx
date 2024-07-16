/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import NavBar from "../components/NavBar.jsx";
import BottomBar from "../components/BottomBar.jsx";
import { MailIcon, SettingsIcon, XIcon, SquareUserIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

export default function Profile() {
  // set state variables for user data
  const [userData, setUserData] = useState({
    username: "Jane Doe",
    email: "janedoe@gmail.com",
    picture:
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
  });
  const [email, setEmail] = useState("user@gmail.com");
  const [currPassword, setCurrPassword] = useState("1234567");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const rootURL = config.serverRootURL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${rootURL}/profile`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // handle user logout
    axios
      .post(`${rootURL}/logout`)
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error logging out", error);
      });
  };

  const handleAccountSubmit = async () => {
    if (email !== "" && email !== userData.email) {
      setUserInfo({
        ...userData,
        email: email,
      });

      const response = await axios.post(`${rootURL}/changeEmail`, {
        username: username,
        email: email,
      });

      if (response.status != 200) {
        alert("Email change failed.");
      } else {
        console.log(response.message);
        setEmail(email);
      }
    }
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== "") {
      if (confirmPassword !== newPassword) {
        alert("Passwords do not match");
      } else {
        //setCurrPassword('');
        //setNewPassword('');
        //setConfirmPassword('');
        try {
          const response = await axios.post(`${rootURL}/changePassword`, {
            username: username,
            current: currPassword,
            newPassword: newPassword,
          });

          setNewPassword(newPassword);
          setUserData({
            ...userData,
            password: newPassword,
          });
        } catch (error) {
          if (error.response.status === 401) {
            alert("Current password does not match your password");
          } else if (error.response.status === 400) {
            alert("New password cannot be the same as your current password!");
          } else {
            alert("Password change failed.");
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="w-screen h-screen bg-[--light-taupe-grey] overflow-scroll flex flex-col items-center justify-center">
        <div className="relative rounded-md bg-[--champagne] py-10 space-y-2 w-2/5">
          <p className="font-bold flex w-full justify-center text-4xl my-6 text-[--black]">
            <i>MyPlanner</i>
          </p>
          <img
            src={userData.picture}
            className="w-[120px] h-[120px] mx-auto object-cover rounded-full"
          />
          <p className="text-center p-4 font-bold text-2xl mb-[20px] ">
            {userData.username}
          </p>
          <div className="w-3/4 text-left mx-auto">
            <div className="flex place-items-center text-wrap break-words mx-auto bg-white p-[10px] my-[15px] rounded-md">
              <SquareUserIcon size={30}></SquareUserIcon>
              <label
                htmlFor="username"
                className="font-semibold w-1/3 ml-[10px]"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="text-[--cambridge-blue] w-1/2"
                value={userData.username}
                readOnly
              />
            </div>
            <div className="flex place-items-center text-wrap break-words mx-auto bg-white p-[10px] my-[15px] rounded-md">
              <MailIcon size={30} />
              <label htmlFor="email" className="font-semibold w-1/3 ml-[10px]">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="text-[--cambridge-blue] w-1/2"
                value={userData.email}
                readOnly
              />
            </div>
            <div className="w-full flex justify-center pt-4">
              <button
                type="button"
                className="px-4 py-3 w-1/2 rounded-md bg-[--cambridge-blue] hover:bg-[--khaki] outline-none font-bold text-white"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
          <Dialog.Root>
            <Dialog.Trigger>
              <SettingsIcon
                size={40}
                className="absolute top-6 right-6 hover:stroke-[--cambridge-blue] transition"
              />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] min-h-[510px] min-w-[350px] w-[40vw] text-[--cambridge-blue] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[--champagne]  p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="mb-[20px] text-[20px] text-center text-black font-bold">
                  Change Your Profile
                </Dialog.Title>
                <Tabs.Root className="flex flex-col" defaultValue="tab1">
                  <Tabs.List
                    className="shrink-0 flex border-b border-gray"
                    aria-label="Manage your account"
                  >
                    <Tabs.Trigger
                      className="px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none bg-[--cambridge-blue] text-white hover:text-[--champagne] select-none rounded-none rounded-tr-md data-[state=active]:border-b-[2px] data-[state=active]:border-b-black outline-none cursor-pointer"
                      value="tab1"
                    >
                      Password
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      className="px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none bg-[--cambridge-blue] text-white hover:text-[--champagne] select-none rounded-none rounded-tl-md data-[state=active]:border-b-[2px] data-[state=active]:border-b-black outline-none cursor-pointer"
                      value="tab2"
                    >
                      Email
                    </Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content
                    className="p-5 bg-white rounded-b-md outline-none"
                    value="tab2"
                  >
                    <fieldset className="mb-[15px] flex flex-col items-center gap-1">
                      <label
                        htmlFor="email"
                        className="text-left w-full font-semibold"
                      >
                        Change Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        maxLength="80"
                        className="bg-white rounded-md border-[2px] border-[--khaki] p-2 w-full text-[--khaki]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </fieldset>
                    <div className="mt-[25px] flex justify-end">
                      <Dialog.Close asChild>
                        <button
                          onClick={handleAccountSubmit}
                          className="m-auto w-1/3 hover:bg-[--khaki] bg-[--cambridge-blue] text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-bold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                        >
                          Save Changes
                        </button>
                      </Dialog.Close>
                    </div>
                  </Tabs.Content>
                  <Tabs.Content
                    className="p-5 bg-white h-[400px] rounded-b-md outline-none"
                    value="tab1"
                  >
                    <p className="mb-3 text-mauve11 text-[15px] text-center leading-normal">
                      Change your password here.
                    </p>
                    <form onSubmit={handlePasswordSubmit}>
                      <fieldset className="mb-[15px] flex flex-col items-center gap-1">
                        <label
                          htmlFor="password"
                          className="text-left w-full font-semibold"
                        >
                          Current Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          minLength="6"
                          className="bg-white rounded-md border-[2px] border-[--khaki] p-2 w-full text-[--khaki]"
                          value={currPassword}
                          onChange={(e) => setCurrPassword(e.target.value)}
                          required
                        />
                      </fieldset>
                      <fieldset className="mb-[15px] flex flex-col items-center gap-1">
                        <label
                          htmlFor="newPassword"
                          className="text-left w-full font-semibold"
                        >
                          New Password
                        </label>
                        <input
                          id="newPassword"
                          type="password"
                          minLength="6"
                          className="bg-white rounded-md border-[2px] border-[--khaki] p-2 w-full text-[--khaki]"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                        />
                      </fieldset>
                      <fieldset className="mb-[15px] flex flex-col items-center gap-1">
                        <label
                          htmlFor="confirm"
                          className="text-left w-full font-semibold"
                        >
                          Confirm Password
                        </label>
                        <input
                          id="confirm"
                          type="password"
                          minLength="6"
                          className="bg-white rounded-md border-[2px] border-[--khaki] p-2 w-full text-[--khaki]"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </fieldset>
                      <div className="mt-[25px] flex justify-end">
                        <button
                          type="submit"
                          className="m-auto w-1/3 hover:bg-[--khaki] bg-[--cambridge-blue] text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-bold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </Tabs.Content>
                </Tabs.Root>

                <Dialog.Close asChild>
                  <button
                    className="hover:bg-[--khaki] absolute top-[10px] right-[10px] inline-flex h-[27px] w-[27px] p-0 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                  >
                    <XIcon className="w-[20px] my-auto mx-auto stroke-[--cambridge-blue]" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <NavBar></NavBar>
      <BottomBar></BottomBar>
    </div>
  );
}
