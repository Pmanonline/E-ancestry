import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNameDetails } from "../features/nameFeature/nameAction";
import Spinner from "../components/tools/Spinner";
import CardImage2 from "../assets/images/CardImage1.png";
import CultureImage from "../assets/images/stateAndcultureImage1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DirectionButton2 } from "../components/d-button";
import { NameProfileCard } from "../components/Cards/NameProfileCard";

function NameDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { specificName, loading, error } = useSelector((state) => state.name);

  // State for search input
  const [surname, setSurname] = useState("");

  useEffect(() => {
    if (name) {
      dispatch(fetchNameDetails(name));
    }
  }, [dispatch, name]);

  // Handle form input changes
  const handleChange = (event) => {
    setSurname(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (surname.trim()) {
      navigate(`/names/${encodeURIComponent(surname)}`);
      setSurname("");
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  if (!specificName) return <p>No details found for the specified name.</p>;

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-black mb-9 text-2xl mod:text-xl font-bold uppercase font-Montserrat text-center">
        About {specificName.name}
      </h2>
      <div>
        <h3 className="text-black my-4 text-lg mod:text-sm font-bold uppercase text-start">
          Meaning
        </h3>
        <div className="mb-8">
          <p>{specificName.meaning}</p>
        </div>
      </div>
      <h3 className="text-black my-4 text-lg mod:text-sm font-bold uppercase text-start">
        Background
      </h3>
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="lg:w-3/5 pr-4 mb-4 lg:mb-0">
          <p>{specificName.background}</p>
        </div>
        <div className="lg:w-2/5 flex justify-center relative overflow-hidden bg-transparent shadow-none bg-clip-border">
          <img src={CardImage2} alt="Sample" className="w-[95%]" />
          <div className="absolute top-[6rem] left-0 w-full h-full flex items-center justify-center">
            <h2 className="text-white text-lg mod:text-sm text-center font-normal">
              Image of {specificName.name}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <p>{specificName.background}</p>
      </div>
      {/* Tribes that use the name */}
      <h3 className="text-black mb-4 mt-12 text-lg mod:text-sm font-bold uppercase text-start">
        Tribes that use {specificName.name}
      </h3>
      <div className="mb-8">
        <p>{specificName.tribeDescribe}</p>
      </div>
      <IlajeContent />
      <div className="h-[0.5px] bg-gray-400 w-full mb-4"></div>
      {/* Other extensions */}
      <div className="mt-24">
        <h3 className="text-black my-4 text-lg mod:text-sm font-bold uppercase text-start">
          OTHER EXTENSIONS OF {specificName.name}
        </h3>

        {specificName.extensions && specificName.extensions.length > 0 && (
          <div>
            {specificName.extensions.map((extension) => (
              <div className="mb-8 mx-4" key={extension._id}>
                <p>
                  <span className="inline-block ml-[-0.4rem] text-sm font-bold mr-2 list-disc">
                    {extension.extensionName}
                  </span>
                  {extension.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Cards */}
      <div className="mt-24">
        <h3 className="text-black my-4 text-lg mod:text-sm font-bold text-start">
          Great people bearing this name
        </h3>

        <NameProfileCard />
      </div>

      {/* Search Form */}
      <div className="mt-24">
        <h4 className="text-black my-4 text-sm font-bold text-center">
          Don't Find What You Are Looking For?
        </h4>
        <p className="mt-4 text-center lg:max-w-[35rem] mx-auto">
          Should lead to more on culture and town, religion, tribe family
          photograph, highlight position of people on the photo
        </p>
        <div className="flex justify-center mt-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center w-full sm:w-auto"
          >
            <input
              type="surname"
              placeholder="Customize your search more"
              value={surname}
              onChange={handleChange}
              className="px-6 py-2 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-[26rem] focus:outline-none focus:ring-2 focus:ring-green text-black bg-NavClr rounded-xl rounded-bl-xl"
            />
            <button className="text-white flex items-center justify-center bg-green-500 px-4 py-2 bg-green hover:bg-green-600 rounded-xl rounded-br-xl  sm:w-auto">
              <span className="mr-2">Search</span>
              <DirectionButton2 className="ml-2" />
            </button>
          </form>
        </div>
      </div>
      {/* Related Searches */}
      <div className="mt-24 mx-4">
        <h3 className="text-black my-4 text-lg mod:text-sm font-bold text-start mb-3">
          Related Searches
        </h3>
        <ul className="list-disc">
          <li>Jame John</li>
          <li>Jame John</li>
          <li>Jame John</li>
          <li>Jame John</li>
        </ul>
      </div>
    </div>
  );
}

export default NameDetails;

export function IlajeContent() {
  const [activeState, setActiveState] = useState(null);
  const [activeTribe, setActiveTribe] = useState(null);
  const { specificName, loading, error } = useSelector((state) => state.name);

  const toggleStateContent = (stateName) => {
    setActiveState(activeState === stateName ? null : stateName);
    setActiveTribe(null); // Reset activeTribe when changing state
  };

  const toggleTribeContent = (tribeName) => {
    setActiveTribe(activeTribe === tribeName ? null : tribeName);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {specificName?.states?.map((state) => (
        <div key={state.stateName}>
          {/* State dropdown starts */}
          <div className="flex justify-start ml-7 mb-5">
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleStateContent(state.stateName)}
                className="flex  justify-between px-5 w-[19rem] py-3 mt-1  rounded-full bg-opacity-90 bg-[#e7fae7]  sm:text-md font-bold "
              >
                <li className=" list-none">{state.stateName}</li>
                <RiArrowDropDownLine
                  className={`h-5 w-5 ml-2 ${
                    activeState === state.stateName
                      ? "transform rotate-180"
                      : ""
                  }`}
                />
              </button>
            </div>
          </div>
          {/* Extended State Content */}
          {activeState === state.stateName && (
            <>
              {state.tribes?.map((tribe) => (
                <div key={tribe.tribeName} className="ml-10">
                  {/* Tribe dropdown starts */}
                  <div className="flex justify-start ml-7 mb-5">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => toggleTribeContent(tribe.tribeName)}
                        className="flex justify-between px-5 w-[19rem] py-3 mt-1 rounded-full bg-opacity-90 sm:text-sm font-semibold"
                      >
                        <li>{tribe.tribeName}</li>
                        <RiArrowDropDownLine
                          className={`h-5 w-5 ml-2 ${
                            activeTribe === tribe.tribeName
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  {/* Extended Tribe Content */}
                  {activeTribe === tribe.tribeName && (
                    <>
                      <div className="my-8">
                        <p>{tribe.description}</p>
                      </div>
                      {/* searchMore Button */}
                      <div className="flex justify-center">
                        <button className="bg-green text-white py-2 px-6 hover:bg-green-600 flex rounded-2xl">
                          View more on State and Culture
                          <span className="mx-2">
                            <DirectionButton2 />
                          </span>
                        </button>
                      </div>
                      {/* image */}
                      <img
                        src={tribe.image || CultureImage}
                        alt={tribe.tribeName}
                        className="w-full my-7"
                      />
                    </>
                  )}
                  {/* Tribe dropdown ends */}
                </div>
              ))}
            </>
          )}
          {/* State dropdown ends */}
        </div>
      ))}
    </>
  );
}
