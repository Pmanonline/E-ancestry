import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNameDetails } from "../features/nameFeature/nameAction";
import Spinner from "../components/tools/Spinner";
import CardImage2 from "../assets/images/CardImage1.png";
import NoResult from "../assets/images/noResult.png";
import { DirectionButton2 } from "../components/d-button";
import { NameProfileCard } from "../components/Cards/NameProfileCard";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

const MAX_RECENT_SEARCHES = 3;

function NameDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { specificName, loading, error } = useSelector((state) => state.name);

  const [surname, setSurname] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("recentSearches")) || []
  );

  useEffect(() => {
    if (name) {
      dispatch(fetchNameDetails(name));
    }
  }, [dispatch, name]);

  const handleChange = async (event) => {
    const newValue = event.target.value;
    setSurname(newValue);

    if (newValue.trim()) {
      setIsSearching(true);
      try {
        const response = await fetch(
          `${backendURL}/api/searchUser?query=${newValue}`
        );
        const data = await response.json();
        setSearchResults(data.names);
        setNoResults(data.names.length === 0);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
      setIsSearching(false);
    } else {
      setSearchResults([]);
      setNoResults(false);
    }
  };

  const handleSelectName = (selectedName) => {
    // Update recent searches only when a name is selected
    const updatedSearches = [selectedName, ...recentSearches].slice(
      0,
      MAX_RECENT_SEARCHES
    ); // Keep only the last MAX_RECENT_SEARCHES
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

    // Navigate to the selected name details page
    navigate(`/names/${encodeURIComponent(selectedName)}`);
    setSurname("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (surname.trim()) {
      // Optionally, you can navigate or perform other actions
      navigate(`/names/${encodeURIComponent(surname)}`);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  if (!specificName) return <p>No details found for the specified name.</p>;

  return (
    <div className="mx-auto px-4 py-8">
      {/* ... Other content ... */}

      {/* Search Form */}
      <div className="mt-24">
        <h4 className="text-black my-4 text-sm font-bold text-center">
          Don't Find What You Are Looking For?
        </h4>
        <p className="mt-4 text-center lg:max-w-[35rem] mx-auto">
          Should lead to more on culture and town, religion, tribe family
          photograph, highlight position of people on the photo
        </p>
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center w-full sm:w-auto"
          >
            <input
              type="text"
              placeholder="Customize your search more"
              value={surname}
              onChange={handleChange}
              className="px-6 py-2 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-[26rem] focus:outline-none focus:ring-2 focus:ring-green text-black bg-NavClr rounded-xl rounded-bl-xl"
            />
            <button className="text-white flex items-center justify-center bg-green-500 px-4 py-2 bg-green hover:bg-green-600 rounded-xl rounded-br-xl sm:w-auto">
              <span className="mr-2">Search</span>
              <DirectionButton2 className="ml-2" />
            </button>
          </form>
          {isSearching && (
            <div className="text-center mt-4">
              <p className="text-lg font-semibold mb-2">Searching...</p>
            </div>
          )}
          {noResults && surname.trim() && (
            <div className="text-center mt-4">
              <div className="flex flex-col items-center">
                <img
                  src={NoResult}
                  alt="No Results"
                  className="w-24 h-24 mb-4"
                />
                <p className="text-lg font-semibold mb-2">No results found</p>
                <p className="text-gray-500">
                  Try a different search term or check the spelling.
                </p>
              </div>
            </div>
          )}
          {searchResults.length > 0 && (
            <div className="text-center mt-4">
              <p className="text-lg mb-2">Related Searches</p>
              <div className="flex flex-wrap justify-center space-x-2">
                {searchResults.map((result) => (
                  <button
                    key={result._id}
                    onClick={() => handleSelectName(result.name)}
                    className="bg-gray-100 hover:bg-gray-300 px-4 py-2 rounded"
                  >
                    {result.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recent Searches */}
        <div className="mt-24 mx-4">
          <h3 className="text-black my-4 text-lg mod:text-sm font-bold text-start mb-3">
            Recent Searches
          </h3>
          <ul className="list-disc">
            {recentSearches.length > 0 ? (
              recentSearches.map((search, index) => (
                <li key={index} className="mb-2">
                  {search}
                </li>
              ))
            ) : (
              <li>No recent searches</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NameDetails;
