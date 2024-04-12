import React, { useState, useEffect } from "react";

import { HiOutlineLogout } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { CiViewList } from "react-icons/ci";
import { LuFileTerminal } from "react-icons/lu";
import { TbUnlink } from "react-icons/tb";
import { LuBookTemplate } from "react-icons/lu";
import { MdPlaylistAdd } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/auth/authSlice";
import classNames from "classnames";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const active = true;
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="lg:flex lg:flex-col lg:w-[20rem] lg:min-w-[15rem] lg:bg-purple lg:p-3  lg:text-xs  text-white mod:absolute  h-screen overflow-y-auto">
      <div className="lg:flex hidden lg:gap-0.5 lg:py-3  justify-between  h-20 px-2 2xl:px-16  flex-col flex-1 ">
        <div className="flex flex-1 flex-col">
          <h2>R REKODA</h2>
          <p>Documentation, And SAAS product for your business</p>
          <Link
            to="/MyDashBoard"
            style={{
              color: "white",
              backgroundColor:
                activeLink === "/MyDashBoard" ? "#ffffff66 " : "",
            }}
            className="my-5 flex gap-3 rounded-md p-2"
            onClick={() => handleLinkClick("/MyDashBoard")}
          >
            <RxDashboard className="text-white w-6 h-6" />
            <span className="text-[16px] my-auto">Dashboard</span>
          </Link>

          {/* Links */}
          <div className="">
            <h3 className="ml-5 uppercase my-5   text-[14px] font-medium">
              Operations
            </h3>
            <Link
              to="/AddSales"
              style={{
                color: "white",
                backgroundColor: activeLink === "/AddSales" ? "#ffffff66 " : "",
              }}
              className="mb-3 flex gap-3 rounded-md p-2"
              onClick={() => handleLinkClick("/AddSales")}
            >
              <MdPlaylistAdd className="text-white w-6 h-6" />
              <span className="text-[16px] my-auto">Add Sales</span>
            </Link>
            <Link
              to="/AddExpenses"
              style={{
                color: "white",
                backgroundColor:
                  activeLink === "/AddExpenses" ? "#ffffff66 " : "",
              }}
              className="mb-3 flex gap-3 rounded-md p-2"
              onClick={() => handleLinkClick("/AddExpenses")}
            >
              <LuFileTerminal className="text-white w-6 h-6" />
              <span className="text-[16px] my-auto">Add Expenses</span>
            </Link>
            <Link
              to="/GeneralReport"
              style={{
                color: "white",
                backgroundColor:
                  activeLink === "/GeneralReport" ? "#ffffff66 " : "",
              }}
              className="mb-3 flex gap-3 rounded-md p-2"
              onClick={() => handleLinkClick("/GeneralReport")}
            >
              <TbUnlink className="text-white w-6 h-6" />
              <span className="text-[16px] my-auto">General Report</span>
            </Link>
            <Link
              to="/GetTemplate"
              style={{
                color: "white",
                backgroundColor:
                  activeLink === "/GetTemplate" ? "#ffffff66 " : "",
              }}
              className="mb-3 flex gap-3 rounded-md p-2"
              onClick={() => handleLinkClick("/GetTemplate")}
            >
              <LuBookTemplate className="text-white w-6 h-6" />
              <span className="text-[16px] my-auto">Get Templates</span>
            </Link>
            <Link
              to="/GetTemplate"
              style={{
                color: "white",
                backgroundColor:
                  activeLink === "/ActivityLog" ? "#ffffff66 " : "",
              }}
              className="mb-3 flex gap-3 rounded-md p-2"
              onClick={() => handleLinkClick("/ActivityLog")}
            >
              <CiViewList className="text-white w-6 h-6" />
              <span className="text-[16px] my-auto">Activity Log</span>
            </Link>
            <Link
              to="/Profile"
              style={{
                color: "white",
                backgroundColor: activeLink === "/Profile" ? "#ffffff66 " : "",
              }}
              className="mb-3 flex gap-3 rounded-md p-2"
              onClick={() => handleLinkClick("/Profile")}
            >
              <IoPerson className="text-white w-6 h-6" />
              <span className="text-[16px] my-auto">Profile</span>
            </Link>
            <Link
              to="/GetTemplate"
              style={{
                color: "white",
                backgroundColor:
                  activeLink === "/GetTemplate" ? "#ffffff66 " : "",
              }}
              className="mb-3 flex gap-3 rounded-md p-2"
              onClick={() => handleLinkClick("/GetTemplate")}
            >
              <IoMdNotificationsOutline className="text-white w-6 h-6" />
              <span className="text-[16px] my-auto">Notifications</span>
            </Link>
          </div>

          {/* Links */}
        </div>
        <hr className="border-t border-gray-200 my-4" />
        <div className="mt-auto">
          <div
            style={{
              color: "white",
              backgroundColor: "#ffffff ",
            }}
            className="my-5 flex gap-3 rounded-md p-2 cursor-pointer"
            onClick={handleLogout}
          >
            <HiOutlineLogout className="text-red-500 w-6 h-6" />
            <span className="text-[16px] my-auto text-red-500">Sign out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
