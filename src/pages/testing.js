import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DirectionButton1 } from "../components/d-button";
import { NameMeaningCard1 } from "../components/Cards/NameMeaningCards";
import { NameMeaningCard2 } from "../components/Cards/NameMeaningCards";
import { DirectionButton2 } from "../components/d-button";
import { RiFilter2Line } from "react-icons/ri";

export function SearchTree() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMore, setviewMore] = useState(false);
  const [category, setCategory] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleView = () => {
    setviewMore(!viewMore);
  };
  const toggleCategory = () => {
    setCategory(!category);
  };
  return (
    <section className="my-[3rem]">
      <div className="text-center">
        <h1 className="text-3xl mod:text-lg font-bold mb-6  font-Montserrat  text-center ">
          Family tree Family tree Family tree Family tree
        </h1>
        <p className="text-lg mb-4  mod:text-sm text-center">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, Corem ipsum dolor
        </p>
      </div>
      <p className="text-center mt-5">Or browse surnames alphabetically:</p>

      <div className="flex justify-center mb-[5rem]">
        <AlphabeticalSearchButton />
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <FormMain />
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="bg-NavClr p-4 rounded-lg">
            <div className="flex justify-between">
              <div className="block text-sm font-bold text-black">
                Explore by collection
              </div>
              <div className="flex">
                Filter <RiFilter2Line className="mt-1 w-5 h-5" />
              </div>
            </div>

            {/* dropdown 1*/}

            <div className="flex justify-center mb-5">
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleCategory}
                  className="flex  justify-between px-5 w-[19rem] py-3 mt-1  rounded-full bg-opacity-90 bg-[#e7fae7]  sm:text-sm "
                >
                  Sort by categories
                  <RiArrowDropDownLine
                    className={`h-5 w-5 ml-2 ${
                      category ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown content */}
                {category && (
                  <div className="absolute right-0 mt-1 w-full max-w-[12rem] bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 2
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* dropdown 2*/}
            <div className="flex justify-center">
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex  justify-between px-5 w-[19rem] py-3 mt-1  rounded-full bg-opacity-90 bg-[#e7fae7]  sm:text-sm "
                >
                  subcategories
                  <RiArrowDropDownLine
                    className={`h-5 w-5 ml-2 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown content */}
                {isOpen && (
                  <div className="absolute right-0 mt-1 w-full max-w-[12rem] bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 2
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Last section */}

          <div className="bg-NavClr p-4 rounded-lg">
            <div className="flex justify-start">
              <p className="block text-sm font-bold text-black">
                Recently searched
              </p>
            </div>
            <div>
              <ul className="gap-3 my-3">
                <li>John James </li>
                <li>John James John</li>
                <li>James John</li>
              </ul>
            </div>

            {/* dropdown 1*/}

            <div className="flex justify-end mb-5">
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleView}
                  className="flex  justify-between px-3 w-[10rem] py-3 mt-1  rounded-full bg-opacity-90 bg-[#e7fae7]  sm:text-sm "
                >
                  View more
                  <RiArrowDropDownLine
                    className={`h-5 w-5 ml-2 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown content */}
                {viewMore && (
                  <div className="absolute  right-[1rem] bottom-[3rem] mt-1 w-full max-w-[12rem] bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 2
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormMain() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Form */}
      <div className="max-w-screen-lg mx-auto bg-NavClr bg-opacity-9 px-3 py-3 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-bold text-black"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="px-3 py-2 mt-1 block w-full rounded-full  focus:ring-green focus:border-green  bg-opacity-90 bg-[#e7fae7] text-black placeholder-black sm:text-sm focus:outline-none"
                placeholder="Enter First Name"
              />
              {/* checkBox */}
              <div className="mt-2">
                <label
                  htmlFor="firstNameCheckbox"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="firstNameCheckbox"
                    name="firstNameCheckbox"
                    className="form-checkbox h-4 w-4 text-green-500"
                  />
                  <span className="ml-2 text-sm font-medium text-black">
                    Exact word
                  </span>
                </label>
              </div>
              {/* checkBox */}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-bold text-black"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                className="px-3 py-2 mt-1 block w-full rounded-full  focus:ring-green focus:border-green bg-opacity-90 bg-[#e7fae7] text-black placeholder-black sm:text-sm focus:outline-none"
                placeholder="Enter Last Name"
              />
              {/* checkBox */}
              <div className="mt-2">
                <label
                  htmlFor="firstNameCheckbox"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="firstNameCheckbox"
                    name="firstNameCheckbox"
                    className="form-checkbox h-4 w-4 text-green-500"
                  />
                  <span className="ml-2 text-sm font-medium text-black">
                    Exact word
                  </span>
                </label>
              </div>
              {/* checkBox */}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Place Ancestor Lived */}
            <div>
              <label
                htmlFor="placeLived"
                className="block text-sm font-bold text-black"
              >
                Place Your Ancestor Might Have Lived
              </label>
              <input
                type="text"
                id="placeLived"
                name="placeLived"
                onChange={(e) => setPlace(e.target.value)}
                value={place}
                className="px-3 py-2 mt-1 block w-full rounded-full  focus:ring-green focus:border-green bg-opacity-90 bg-[#e7fae7] text-black placeholder-black sm:text-sm focus:outline-none"
                placeholder="Enter Place"
              />
              {/* checkBox */}
              <div className="mt-2">
                <label
                  htmlFor="firstNameCheckbox"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="firstNameCheckbox"
                    name="firstNameCheckbox"
                    className="form-checkbox h-4 w-4 text-green-500"
                  />
                  <span className="ml-2 text-sm font-medium text-black">
                    Exact word
                  </span>
                </label>
              </div>
              {/* checkBox */}
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-bold text-black"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className="px-3 py-2 mt-1 block w-full rounded-full  focus:ring-green focus:border-green bg-opacity-90 bg-[#e7fae7] text-black placeholder-black sm:text-sm focus:outline-none"
                placeholder="Select Date"
              />
              {/* checkBox */}
              <div className="mt-2">
                <label
                  htmlFor="firstNameCheckbox"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="firstNameCheckbox"
                    name="firstNameCheckbox"
                    className="form-checkbox h-4 w-4 text-green-500"
                  />
                  <span className="ml-2 text-sm font-medium text-black">
                    Exact word
                  </span>
                </label>
              </div>
              {/* checkBox */}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center justify-between px-3 py-2 w-full   text-black sm:text-sm focus:outline-none"
              >
                Show More Options
                <RiArrowDropDownLine
                  className={`h-5 w-5 ml-2 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown content */}
              {isOpen && (
                <div className="absolute right-0 mt-1 w-full max-w-[12rem] bg-white rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Option 1
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Option 2
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Option 3
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button className="bg-green text-white  py-2 px-6  hover:bg-green-600 flex rounded-2xl transition ease-in-out duration-200 transform hover:scale-105">
              Search
              <span className="mx-2">
                <DirectionButton2 />
              </span>
            </button>
          </div>
        </form>
      </div>
      {/* End of Form */}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../features/UserFeature/UserAction";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import NoResult from "../assets/images/noResult.png";
import Search from "../assets/images/Search.gif";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://your-backend-url";

export function SearchTree() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [placeLived, setPlaceLived] = useState("");
  const [dob, setDob] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [category, setCategory] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState("");

  const resultsPerPage = 6;

  const {
    users = [], // Updated to default to an empty array
    loading,
    error,
  } = useSelector((state) => state.userSearch);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = users.length
    ? users.slice(indexOfFirstResult, indexOfLastResult)
    : [];
  console.log("Current Results:", currentResults); // Ensure results are logged here

  const totalPages = Math.ceil(users.length / resultsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [modalType, setModalType] = useState(null); // 'results' or 'noResults'

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleView = () => setViewMore(!viewMore);
  const toggleCategory = () => setCategory(!category);
  const closeModal = () => {
    setModalType(null); // Reset modalType to close any open modals
  };

  useEffect(() => {
    let spinnerTimer;

    if (loading) {
      setShowOverlay(true);
      spinnerTimer = setTimeout(() => {
        setSpinnerVisible(true);
      }, 1000);
    } else {
      setSpinnerVisible(false);
      setShowOverlay(false);
      clearTimeout(spinnerTimer);
    }

    return () => clearTimeout(spinnerTimer);
  }, [loading]);

  useEffect(() => {
    if (loading && submitted) {
      setSpinnerVisible(true);
      setModalType(null); // Hide modals while loading
    } else if (!loading && submitted) {
      setSpinnerVisible(false);
      if (users.length > 0) {
        setModalType("results");
        setFirstName("");
        setLastName("");
        setPlaceLived("");
        setDob("");
      } else {
        setModalType("noResults");
      }
    }
  }, [loading, submitted, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() || lastName.trim() || placeLived.trim() || dob) {
      const searchParams = {
        firstName,
        lastName,
        placeLived,
        dob,
      };

      dispatch(fetchUsers(searchParams));
      console.log("Submitted Search with:", searchParams); // Log the search params
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);
    if (name === "placeLived") setPlaceLived(value);
    if (name === "dob") setDob(value);
    setSubmitted(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleResultClick = (userId) => {
    navigate(`/FamilyTree-feeds/${userId}`);
  };

  const hasResults = users.length > 0;
  const noResults = submitted && !hasResults;

  useEffect(() => {
    if (submitted) {
      if (hasResults) {
        setModalType("results");
      } else if (noResults) {
        setModalType("noResults");
      }
    }
  }, [hasResults, noResults, submitted]);

  useEffect(() => {
    console.log("Fetched Users:", users); // Ensure users are logged when fetched
  }, [users]);

  return (
    <section className="my-[3rem]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-bold text-black"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                  className="px-6 py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
                  placeholder="Enter First Name"
                />
                {/* checkBox */}
                <div className="mt-2">
                  <label
                    htmlFor="firstNameCheckbox"
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="firstNameCheckbox"
                      name="firstNameCheckbox"
                      className="form-checkbox h-4 w-4 text-green-500"
                    />
                    <span className="ml-2 text-sm font-medium text-black">
                      Exact word
                    </span>
                  </label>
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-bold text-black"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
                  className="px-6 py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
                  placeholder="Enter Last Name"
                />
                {/* checkBox */}
                <div className="mt-2">
                  <label
                    htmlFor="lastNameCheckbox"
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="lastNameCheckbox"
                      name="lastNameCheckbox"
                      className="form-checkbox h-4 w-4 text-green-500"
                    />
                    <span className="ml-2 text-sm font-medium text-black">
                      Exact word
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Place Lived */}
              <div>
                <label
                  htmlFor="placeLived"
                  className="block text-sm font-bold text-black"
                >
                  Place Lived
                </label>
                <input
                  type="text"
                  id="placeLived"
                  name="placeLived"
                  onChange={handleChange}
                  value={placeLived}
                  className="px-6 py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
                  placeholder="Enter Place Lived"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-bold text-black"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={handleChange}
                  value={dob}
                  className="px-6 py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-[#e7fae7] rounded-lg p-4">
            {spinnerVisible && (
              <div className="flex justify-center items-center">
                <img src={Search} alt="Loading..." className="w-12 h-12" />
              </div>
            )}

            {modalType === "results" && (
              <>
                <h2 className="text-xl font-bold mb-4 text-green-600">
                  Search Results
                </h2>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePreviousPage}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                    disabled={currentPage === 1}
                  >
                    <GrChapterPrevious />
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                    disabled={currentPage === totalPages}
                  >
                    <GrChapterNext />
                  </button>
                </div>
              </>
            )}

            {modalType === "noResults" && (
              <div className="text-center">
                <img
                  src={NoResult}
                  alt="No Results"
                  className="w-24 h-24 mx-auto"
                />
                <p className="text-lg font-semibold mt-4">No Results Found</p>
                <p className="text-sm text-gray-600 mt-2">
                  Try adjusting your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

<div className="bg-NavClr p-4 rounded-lg">
  <div className="flex justify-start">
    <p className="block text-sm font-bold text-black">Recently Searched</p>
  </div>
  <div>
    <ul className="gap-3 my-3">
      {recentSearches.length > 0 ? (
        recentSearches.map((search, index) => (
          <li key={index} className="my-1 text-black">
            {search}
          </li>
        ))
      ) : (
        <li>No recent searches</li>
      )}
    </ul>
  </div>
  <div className="flex justify-end mb-5">
    <div className="relative">
      <button
        type="button"
        onClick={toggleView}
        className="flex justify-between px-3 w-[10rem] py-3 mt-1 rounded-full bg-opacity-90 bg-[#e7fae7] sm:text-sm"
      >
        View more
        <RiArrowDropDownLine
          className={`h-5 w-5 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      {viewMore && (
        <div className="absolute right-[1rem] bottom-[3rem] mt-1 w-full max-w-[12rem] bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            {recentSearches.map((search, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
</div>;
