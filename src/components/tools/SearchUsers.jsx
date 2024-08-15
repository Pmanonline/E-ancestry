// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchUsers } from "../../features/UserFeature/UserAction";
// import Search from "../../assets/images/Search.gif";
// import NoResult from "../../assets/images/noResult.png";

// // Ensure backendURL is defined
// const backendURL =
//   process.env.NODE_ENV !== "production"
//     ? "http://localhost:8080"
//     : "https://your-backend-url";

// export default function SearchUsers() {
//   const [surname, setSurname] = useState("");
//   const [submitted, setSubmitted] = useState(false); // Track if search has been submitted
//   const [spinnerVisible, setSpinnerVisible] = useState(false); // Ensures spinner is visible for at least 1 second
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Access users state from Redux store
//   const {
//     users = { Users: [] },
//     loading,
//     error,
//   } = useSelector((state) => state.userSearch);
//   console.log(users);

//   useEffect(() => {
//     let spinnerTimer;

//     if (loading) {
//       // Show spinner after 1 second if loading continues
//       spinnerTimer = setTimeout(() => {
//         setSpinnerVisible(true);
//       }, 1000); // 1 second minimum display time
//     } else {
//       // Hide spinner immediately when loading stops
//       setSpinnerVisible(false);
//       clearTimeout(spinnerTimer);
//     }

//     return () => clearTimeout(spinnerTimer); // Clean up timer on component unmount or before next effect
//   }, [loading]);

//   useEffect(() => {
//     // If loading has stopped, check results after 1 second to hide spinner
//     if (!loading && submitted) {
//       const hideSpinnerTimer = setTimeout(() => {
//         setSpinnerVisible(false);
//       }, 1000); // Ensure spinner hides after 1 second
//       return () => clearTimeout(hideSpinnerTimer);
//     }
//   }, [loading, submitted]);

//   // Extract first names from Users array if it exists
//   const Image = users.Users ? users.Users.map((user) => user.image) : [];
//   console.log(Image); // Logs an array of first names

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (surname.trim()) {
//       console.log(`Form submitted with surname: ${surname}`);
//       dispatch(fetchUsers(surname));
//       setSubmitted(true); // Mark as submitted
//     }
//   };

//   const handleChange = (e) => {
//     setSurname(e.target.value);
//     setSubmitted(false); // Reset submitted state when user starts typing
//   };

//   const handleResultClick = (userId) => {
//     navigate(`/familytree/${userId}`);
//   };

//   // Safeguard against undefined or null users.Users
//   const hasResults = users.Users && users.Users.length > 0;
//   const noResults = submitted && surname && !hasResults; // Show "No results" only if search has been submitted

//   const mainPerson = users.Users?.find((user) => user.role === "main");
//   const relatedPersons = users.Users?.filter((user) => user.role !== "main");

//   console.log("mainPerson:", mainPerson?.role);
//   console.log("relatedPersons:", relatedPersons);

//   return (
//     <section className="my-[3rem]">
//       <div className="flex justify-center">
//         <form onSubmit={handleSubmit} className="flex">
//           <input
//             type="text"
//             value={surname}
//             onChange={handleChange}
//             placeholder="Search for a user..."
//             className="border p-2 w-full px-6 sm:w-[26rem] py-2 focus:outline-none focus:ring-1 focus:ring-green text-black bg-NavClr"
//           />

//           <button
//             type="submit"
//             className="focus:ring-1 focus:ring-green bg-NavClr px-4 py-2 hover:bg-green-600 rounded-tr-xl rounded-br-xl"
//           >
//             Search
//           </button>
//         </form>
//       </div>

//       {/* Display spinner while loading */}
//       {spinnerVisible && (
//         <div className="flex justify-center mt-4">
//           <Spinner showOverlay={false} />
//         </div>
//       )}

//       {/* Display error message */}
//       {error && (
//         <div className="text-center mt-4 text-red-500">
//           <p>Error: {error}</p>
//         </div>
//       )}

//       {/* Display when no results */}
//       {noResults ? (
//         <div className="text-center mt-4">
//           <div className="flex flex-col items-center">
//             <img src={NoResult} alt="No Results" className="w-24 h-24 mb-4" />
//             <p className="text-lg font-semibold mb-2">No results found</p>
//             <p className="text-gray-500">
//               Try a different search term or check the spelling.
//             </p>
//           </div>
//         </div>
//       ) : hasResults ? (
//         <div className="text-start mt-4">
//           <p className="text-lg font-semibold mb-4 text-center">
//             Related Searches
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             {users.Users.map((result) => (
//               <div
//                 key={result._id}
//                 class="md:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700"
//               >
//                 <a href="#">
//                   <img
//                     class="rounded-t-lg w-[10rem] h-[10rem] rounded-xl"
//                     src={`${backendURL}/${result.image}`}
//                     alt="images"
//                   />
//                 </a>
//                 <div class="p-5">
//                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     Full name:
//                     <span className="text-white ml-2">
//                       {result.firstName} {result.lastName}
//                     </span>
//                   </p>
//                   {result.gender && (
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                       Gender:
//                       <span className="text-white ml-2">{result.gender}</span>
//                     </p>
//                   )}
//                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     Date of Birth:
//                     <span className="text-white ml-2">
//                       {new Date(result.DOB).toLocaleDateString()}
//                     </span>
//                   </p>

//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     {result.role === "main" ? (
//                       <span className="text-white ">Family Tree Creator</span>
//                     ) : (
//                       <span className="text-white ">{result.role}</span>
//                     )}
//                   </p>
//                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  ">
//                     <span className="italic"> Created by:</span>
//                     <span className="text-white ml-2">{result.userName}</span>
//                   </p>
//                   <a
//                     onClick={handleResultClick}
//                     class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg  focus:ring-4 focus:outline-none"
//                   >
//                     Go to Profile
//                     <svg
//                       class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 5h12m0 0L9 1m4 4L9 9"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : null}
//     </section>
//   );
// }
// function Spinner({ showOverlay }) {
//   return (
// <div className="relative flex justify-center items-center mt-4">
//   {showOverlay && (
//     <div className="absolute inset-0 bg-transparent opacity-50 z-10"></div>
//   )}
//   <img
//     src={Search}
//     alt="Searching..."
//     className="w-32 h-32 relative z-20"
//   />
// </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../features/UserFeature/UserAction";
import Search from "../../assets/images/Search.gif";
import NoResult from "../../assets/images/noResult.png";

// Ensure backendURL is defined
const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://your-backend-url";

export default function SearchUsers() {
  const [surname, setSurname] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track if search has been submitted
  const [spinnerVisible, setSpinnerVisible] = useState(false); // Ensures spinner is visible for at least 1 second
  const [showOverlay, setShowOverlay] = useState(true); // Manage overlay visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access users state from Redux store
  const {
    users = { Users: [] },
    loading,
    error,
  } = useSelector((state) => state.userSearch);
  console.log(users);

  useEffect(() => {
    let spinnerTimer;

    if (loading) {
      setShowOverlay(true); // Show overlay while loading
      // Show spinner after 1 second if loading continues
      spinnerTimer = setTimeout(() => {
        setSpinnerVisible(true);
      }, 1000); // 1 second minimum display time
    } else {
      // Hide spinner immediately when loading stops
      setSpinnerVisible(false);
      setShowOverlay(false); // Hide overlay when loading stops
      clearTimeout(spinnerTimer);
    }

    return () => clearTimeout(spinnerTimer); // Clean up timer on component unmount or before next effect
  }, [loading]);

  useEffect(() => {
    // If loading has stopped, check results after 1 second to hide spinner
    if (!loading && submitted) {
      const hideSpinnerTimer = setTimeout(() => {
        setSpinnerVisible(false);
      }, 1000); // Ensure spinner hides after 1 second
      return () => clearTimeout(hideSpinnerTimer);
    }
  }, [loading, submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (surname.trim()) {
      console.log(`Form submitted with surname: ${surname}`);
      dispatch(fetchUsers(surname));
      setSubmitted(true); // Mark as submitted
    }
  };

  const handleChange = (e) => {
    setSurname(e.target.value);
    setSubmitted(false); // Reset submitted state when user starts typing
  };

  const handleResultClick = (userId) => {
    navigate(`/FamilyTree-feeds/${userId}`);
  };

  // Safeguard against undefined or null users.Users
  const hasResults = users.Users && users.Users.length > 0;
  const noResults = submitted && surname && !hasResults; // Show "No results" only if search has been submitted

  const mainPerson = users.Users?.find((user) => user.role === "main");
  const relatedPersons = users.Users?.filter((user) => user.role !== "main");

  console.log("mainPerson:", mainPerson?.role);
  console.log("relatedPersons:", relatedPersons);

  return (
    <section className="my-[3rem]">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={surname}
            onChange={handleChange}
            placeholder="Search for a user..."
            className="border p-2 w-full px-6 sm:w-[26rem] py-2 focus:outline-none focus:ring-1 focus:ring-green text-black bg-NavClr"
          />

          <button
            type="submit"
            className="focus:ring-1 focus:ring-green bg-NavClr px-4 py-2 hover:bg-green-600 rounded-tr-xl rounded-br-xl"
          >
            Search
          </button>
        </form>
      </div>

      {/* Display spinner while loading */}
      {spinnerVisible && <Spinner showOverlay={showOverlay} />}

      {/* Display error message */}
      {error && (
        <div className="text-center mt-4 text-red-500">
          <p>Error: {error}</p>
        </div>
      )}

      {/* Display when no results */}
      {noResults ? (
        <div className="text-center mt-4">
          <div className="flex flex-col items-center">
            <img src={NoResult} alt="No Results" className="w-24 h-24 mb-4" />
            <p className="text-lg font-semibold mb-2">No results found</p>
            <p className="text-gray-500">
              Try a different search term or check the spelling.
            </p>
          </div>
        </div>
      ) : hasResults ? (
        <div className="text-start mt-4">
          <p className="text-lg font-semibold mb-4 text-center">
            Related Searches
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {users.Users.map((result) => (
              <div
                key={result._id}
                className="md:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-[10rem] h-[10rem] rounded-xl"
                    src={`${backendURL}/${result.image}`}
                    alt="images"
                  />
                </a>
                <div className="p-5">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Full name:
                    <span className="text-white ml-2">
                      {result.firstName} {result.lastName}
                    </span>
                  </p>
                  {result.gender && (
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Gender:
                      <span className="text-white ml-2">{result.gender}</span>
                    </p>
                  )}
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Date of Birth:
                    <span className="text-white ml-2">
                      {new Date(result.DOB).toLocaleDateString()}
                    </span>
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {result.role === "main" ? (
                      <span className="text-white ">Family Tree Creator</span>
                    ) : (
                      <span className="text-white ">{result.role}</span>
                    )}
                  </p>
                  {result.role !== "main" ? (
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="italic">Related to:</span>
                      <span className="text-white ml-2">{result.userName}</span>
                    </p>
                  ) : (
                    ""
                  )}

                  <a
                    onClick={() => handleResultClick(result.userId)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg focus:ring-4 focus:outline-none cursor-pointer  transition ease-in-out duration-200 transform hover:scale-105"
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
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Spinner({ showOverlay }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {showOverlay && (
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 z-10"></div>
      )}
      <img
        src={Search}
        alt="Searching..."
        className="w-32 h-32 relative z-20"
      />
    </div>
  );
}
