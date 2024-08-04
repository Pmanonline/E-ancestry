import React, { useState } from "react";
import PropTypes from "prop-types";
import { DirectionButton1 } from "../components/d-button";
import {
  NameMeaningCard1,
  NameMeaningCard2,
} from "../components/Cards/NameMeaningCards";
import { useNavigate } from "react-router-dom";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

export default function NameMeaning() {
  const [surname, setSurname] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with surname:", surname);
    if (surname.trim()) {
      const response = await fetch(`${backendURL}/api/search?query=${surname}`);
      const data = await response.json();
      setSearchResults(data.names);
    }
    setSurname("");
  };

  const handleChange = (e) => {
    setSurname(e.target.value);
  };

  const handleResultClick = (name) => {
    navigate(`/names/${name}`);
  };

  return (
    <section className="my-[3rem] ">
      <div className="text-center">
        <h1 className="text-3xl mod:text-lg font-bold mb-6 font-Montserrat text-center">
          Discover the meaning and history behind <br /> your last name
        </h1>
        <p className="text-lg mb-4 mod:text-sm text-center">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, Corem ipsum dolor
        </p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Enter your surname or the prefered surname"
            value={surname}
            onChange={handleChange}
            className="px-6 sm:w-[26rem] py-2 focus:outline-none focus:ring-1 focus:ring-green text-black bg-NavClr rounded-tl-xl rounded-bl-xl"
            aria-label="Surname input"
          />
          <button
            type="submit"
            className=" focus:ring-1 focus:ring-green  bg-NavClr px-4 py-2 hover:bg-green-600 rounded-tr-xl rounded-br-xl"
          >
            <DirectionButton1 />
          </button>
        </form>
      </div>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="text-center mt-4">
          <p className="text-lg mb-2">Related Searches</p>
          <div className="flex flex-wrap justify-center space-x-2">
            {searchResults.map((result) => (
              <button
                key={result._id}
                onClick={() => handleResultClick(result.name)}
                className="bg-gray-100 hover:bg-gray-300 px-4 py-2 rounded"
              >
                {result.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="text-center mt-5">Or browse surnames alphabetically:</p>
      <div className="flex justify-center mb-[5rem]">
        <AlphabeticalSearchButton
          onClick={(letter) => console.log(`Selected letter: ${letter}`)}
        />
      </div>

      <div className="sm:flex justify-around">
        <NameMeaningCard1 />
        <NameMeaningCard2 />
      </div>
      <div className="text-center py-[4rem]">
        <h3 className="text-2xl font-bold mod:text-xl">
          See what interesting facts you’ll learn about your{" "}
          <span className="break-header"></span> surname on Ancestry.
        </h3>
        <p>
          With the world's largest collection of online family history records,
          Ancestry helps you find the details of your family story.
        </p>
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
          className="text-gray-700 hover:text-green hover:font-bold focus:outline-none"
          aria-label={`Search by ${letter.toUpperCase()}`}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
