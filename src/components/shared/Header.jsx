import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <>
      <div onClick={handleNav} className="sm:hidden m-3 flex ">
        <MdOutlineDashboard
          size={25}
          className="cursor-pointer hover:scale-125"
        />
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[60%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10">
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <IoClose className="text-xl text-red-500" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            {/* Your mobile menu items */}
            <Link
              onClick={() => setIsNavOpen(false)}
              to="/transactions&earnings"
              style={{ color: "green" }}
              className="text-black lg:mb-5 flex lg:focus:text-[#166534] lg:active:text-[#166534] flex-1"
            >
              <span>
                <TbMoneybag className="text-[15px] mr-2 mid:mt-1" />
              </span>
              <p>Transactions & Earnings</p>
            </Link>
          </div>
        </div>
      )}
      {/* Mobile Menu */}

      {/* Large Screen Links */}
      <div className="hidden sm:flex items-center justify-between px-4 border-1 border-gray-100 shadow-lg">
        {/* Start of the screen */}
        <div>
          <p className=" font-bold text-lg">Dashboard</p>
        </div>
        <div>
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="my-3 block w-[25rem] p-4 ps-10 text-sm border border-gray-300 rounded-lg focus:border-purple outline-none"
                placeholder="Search Here"
                required
              />

              <button
                type="submit"
                className="text-gray-200 absolute end-2.5 bottom-2.5 hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {/* End of the screen */}

        {/* Start of the screen */}
        <div>
          <IoMdNotificationsOutline className="w-8 h-8 text-purple" />
        </div>

        {/* End of the screen */}

        {/* profile */}

        <div className="relative flex">
          <div className="flex flex-col items-center mr-2">
            <div className="text-gray-600 hover:text-gray-900 block font-bold">
              {userInfo && (
                <div>
                  <p>{userInfo.firstName}</p>
                  {/* Render user-specific content */}
                </div>
              )}
            </div>
            <div className="text-gray-600 hover:text-gray-900 block text-sm">
              Admin
            </div>
          </div>

          <Menu as="div" className=" right-0">
            <div className="flex">
              <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                <span className="sr-only">Open user menu</span>
                <div
                  className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/80x80?face")',
                  }}
                >
                  <span className="sr-only text-black">Marc Backes</span>
                </div>
              </Menu.Button>
              <Menu.Button className="">
                <IoMdArrowDropdown className="ml-1 h-8 w-8 text-gray-900" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/profile")}
                      className={classNames(
                        active && "bg-gray-100",
                        "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      Your Profile
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/settings")}
                      className={classNames(
                        active && "bg-gray-100",
                        "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      Settings
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={handleLogout}
                      className={classNames(
                        active && "bg-gray-100",
                        "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      Sign out
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* profile */}
      </div>
      {/* Large Screen Links */}
    </>
  );
}

export default Header;
