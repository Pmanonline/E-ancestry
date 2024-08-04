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

const AlphabeticalSearchButton = ({ onClick }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="flex space-x-1">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => onClick(letter)}
          className="text-gray-700 hover:text-green hover:font-bold focus:outline-none underline"
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

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
