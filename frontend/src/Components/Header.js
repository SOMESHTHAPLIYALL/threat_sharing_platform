import React from "react";
import { Link } from "react-router-dom";
import Logo from "../utils/logo.png";
import { FcAbout } from "react-icons/fc";
import { IoIosCreate } from "react-icons/io";
import { LuFileStack, LuHistory } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { PiUsersThreeFill } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <div className="bg-black text-white font-bold p-4">
        <div className="content flex justify-between items-center">
          <div className="heading flex justify-center items-center gap-2">
            <img className="h-16" src={Logo} />
            <h1 className="font-bold text-4xl">ThreatTracker</h1>
          </div>
          <div className="links flex gap-10 text-lg mr-2">
            <Link
              to="/about"
              className="cursor-pointer hover:scale-105 flex justify-center items-center gap-1"
            >
              <FcAbout size={30} />
              About
            </Link>
            <Link
              to="/create"
              className="cursor-pointer hover:scale-105 flex justify-center items-center gap-1"
            >
              <IoIosCreate size={30} />
              Create Threat
            </Link>

            <Link
              to="/threats"
              className="cursor-pointer hover:scale-105 flex justify-center items-center gap-1"
            >
              <LuFileStack size={30} />
              Threats
            </Link>
            <Link
              to="/history"
              className="cursor-pointer hover:scale-105 flex justify-center items-center gap-1"
            >
              <LuHistory size={30} />
              History
            </Link>
            <Link
              to="/users"
              className="cursor-pointer hover:scale-105 flex justify-center items-center gap-1"
            >
              <PiUsersThreeFill size={30} />
              Users
            </Link>
            <Link
              to="/"
              className="cursor-pointer hover:scale-105 flex justify-center items-center gap-1"
            >
              <CiLogout size={30} />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
