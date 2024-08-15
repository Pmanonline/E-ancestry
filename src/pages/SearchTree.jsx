import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../features/UserFeature/UserAction";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { DirectionButton2 } from "../components/d-button";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { RiFilter2Line } from "react-icons/ri";
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
  const [viewMore, setviewMore] = useState(false);
  const [category, setCategory] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState("");
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("recentSearches")) || []
  );

  const toggleViewMore = () => {
    setviewMore(!viewMore);
  };

  const resultsPerPage = 9;

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
  console.log("Current Results:", currentResults);

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

  const [modalType, setModalType] = useState(null);

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
      // Add to recent searches
      addRecentSearch(`${firstName} ${lastName}`);
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

  // const hasResults = users.Users && users.Users.length > 0;
  // const noResults = submitted && !hasResults;
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

  const addRecentSearch = (search) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [search, ...prevSearches].slice(0, 10); // Store up to 10 searches
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      return updatedSearches;
    });
  };

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
                  className="px-6  py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
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
                  onChange={handleChange}
                  value={lastName}
                  className="px-6  py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
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
                  onChange={handleChange}
                  value={placeLived}
                  className="px-6  py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
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
                  onChange={handleChange}
                  value={dob}
                  className="px-6  py-4 focus:outline-none focus:ring-1 focus:ring-green text-black bg-[#e7fae7] rounded-lg text-sm w-full hover:ring-1 hover:ring-green"
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
            <div className="flex justify-between mt-5">
              <div>
                <button className="bg-green text-white  py-2 px-6  hover:bg-green-600 flex rounded-2xl transition ease-in-out duration-200 transform hover:scale-105">
                  Search
                  <span className="mx-2">
                    <DirectionButton2 />
                  </span>
                </button>
              </div>
            </div>
          </form>
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

            {/* Category 1*/}
            <div className="my-3">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    id="sub-category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    displayEmpty // Ensures the placeholder is displayed when no value is selected
                    className="bg-[#e7fae7] text-black text-sm w-full focus:outline-green focus:ring-green hover:ring-green rounded-4xl"
                    MenuProps={{
                      PaperProps: {
                        className: "bg-white",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Category
                    </MenuItem>
                    <MenuItem value={"Tree creators"}>Tree creators</MenuItem>
                    <MenuItem value={"With Image"}>With Images</MenuItem>
                    <MenuItem value={"Still Living"}>Still Living</MenuItem>
                    <MenuItem value={"Deseased"}>Deseased</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            {/* SubCategory 1*/}
            <div className="mt-6">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    id="sub-category"
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                    displayEmpty // Ensures the placeholder is displayed when no value is selected
                    className="bg-[#e7fae7] text-black text-sm w-full focus:outline-green focus:ring-green hover:ring-green rounded-4xl"
                    MenuProps={{
                      PaperProps: {
                        className: "bg-white",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select SubCategory
                    </MenuItem>
                    <MenuItem value={"Tree creators"}>Tree creators</MenuItem>
                    <MenuItem value={"With Image"}>With Images</MenuItem>
                    <MenuItem value={"Still Living"}>Still Living</MenuItem>
                    <MenuItem value={"Deseased"}>Deseased</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          {/* Last section */}

          <div className="bg-NavClr p-4 rounded-lg">
            {/* <div className="flex justify-start">
              <p className="block text-sm font-bold text-black">
                Recently searched
              </p>
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
            </div> */}
            <section className="my-[3rem]">
              {/* Other code for search form */}

              {/* Recently Searched Section */}
              <div className="bg-NavClr p-4 rounded-lg mt-6">
                <div className="block text-sm font-bold text-black mb-2">
                  Recently Searched
                </div>

                <ul className="list-none space-y-2">
                  {(viewMore ? recentSearches : recentSearches.slice(0, 3)).map(
                    (search, index) => (
                      <li key={index} className="bg-[#e7fae7] p-2 rounded-lg">
                        {search}
                      </li>
                    )
                  )}
                </ul>

                {recentSearches.length > 3 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={toggleViewMore}
                      className="text-green-600 hover:text-green-800"
                    >
                      <span className="text-black">
                        {" "}
                        {viewMore ? "View Less" : "View More"}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* dropdown 1*/}
          </div>
        </div>

        {!spinnerVisible && modalType === "results" && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-full h-full max-w-full max-h-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg text-center mb-3 font-bold">
                Search Results
              </h2>
              <div className="flex justify-end mr-2">
                <button
                  onClick={closeModal}
                  className="mt-4 border-red-500 border text-red-500 py-1 px-4 rounded-lg  transition ease-in-out duration-200 transform hover:scale-105"
                >
                  <IoMdClose size={24} />
                </button>
              </div>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentResults.map((result) => (
                  <li
                    key={result._id}
                    className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 flex flex-col"
                    style={{ flex: "1 1 30%" }}
                  >
                    <a href="#">
                      <img
                        className="rounded-t-lg w-full h-[10rem] object-cover rounded-xl mb-4"
                        src={`${backendURL}/${result.image}`}
                        alt="images"
                      />
                    </a>
                    <div className="p-3 flex flex-col space-y-2">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Full name:
                        <span className="text-white ml-2">
                          {result.firstName} {result.lastName}
                        </span>
                      </p>
                      {result.gender && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Gender:
                          <span className="text-white ml-2">
                            {result.gender}
                          </span>
                        </p>
                      )}
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Date of Birth:
                        <span className="text-white ml-2">
                          {new Date(result.DOB).toLocaleDateString()}
                        </span>
                      </p>

                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {result.role === "main" ? (
                          <span className="text-white ">
                            Family Tree Creator
                          </span>
                        ) : (
                          <span className="text-white ">{result.role}</span>
                        )}
                      </p>

                      {result.Lstatus === "Deceased" && (
                        <span className="text-white">
                          <span className="block mb-2">{result.Lstatus}</span>
                          {new Date(result.DOB).getFullYear()} to{" "}
                          {result.yearDeceased
                            ? new Date(result.yearDeceased).getFullYear()
                            : "Unknown year"}
                        </span>
                      )}

                      {result.role !== "main" && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          <span className="italic">Related to:</span>
                          <span className="text-white ml-2">
                            {result.userName}
                          </span>
                        </p>
                      )}

                      <a
                        onClick={() => handleResultClick(result.userId)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white border-2 border-green  bg-green rounded-lg focus:ring-4 focus:outline-none cursor-pointer transition ease-in-out duration-200 transform hover:scale-105"
                      >
                        Go to
                        {result.role !== "main" ? (
                          <>
                            <span className="font-medium mx-1">
                              {result.userName}
                            </span>
                            's Profile
                          </>
                        ) : (
                          " Profile"
                        )}
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="mt-4 border-gray-800 border text-gray-800 py-1 px-4 rounded-lg  transition ease-in-out duration-200 transform hover:scale-105"
                >
                  <GrChapterPrevious size={24} />
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="mt-4 border-gray-800 border text-gray-800 py-1 px-4 rounded-lg  transition ease-in-out duration-200 transform hover:scale-105"
                >
                  <GrChapterNext size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Results and No Results Modals ends*/}
        {!spinnerVisible && modalType === "noResults" && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center px-3 mx-3"
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to parent
            >
              <h2 className="text-lg font-bold">No Results Found</h2>
              <img
                src={NoResult}
                alt="No Results"
                className="w-24 mx-auto my-4"
              />
              <p className="text-center">
                No results found for "{firstName}
                {lastName} {placeLived}". Please try again with a different name
                or criteria.
              </p>
              <button
                onClick={closeModal}
                className="mt-4 border-red-500 border text-red-500 py-2 px-3 rounded-lg  transition ease-in-out duration-200 transform hover:scale-105"
              >
                <IoMdClose size={12} />
              </button>
            </div>
          </div>
        )}

        {/* Spinner */}
        {spinnerVisible && showOverlay && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            {/* <div className="animate-spin h-16 w-16 border-t-4 border-blue-500 border-solid rounded-full"></div> */}
            <img
              src={Search}
              alt="Searching..."
              className="w-32 h-32 relative z-20"
            />
          </div>
        )}
      </div>
    </section>
  );
}
