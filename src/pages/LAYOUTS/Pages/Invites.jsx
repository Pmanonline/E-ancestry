import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/backgroundImage.png";
import { DirectionButton1 } from "../../../components/d-button";
import LayoutNAv from "../../../components/layoutNAv";

const Invites = () => {
  const [invites, setInvites] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="p-8 relative bg-cover  bg-no-repeat h-full w-full Nlg:max-w-[40rem] Nlg:mx-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="relative px-8 flex flex-col items-center lg:items-start lg:flex-row">
        {/* Nav */}
        <span className="lg:hidden w-full flex justify-center">
          <LayoutNAv />
        </span>
        {/* Nav */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center lg:items-start w-full"
        >
          <div className="p-">
            <h2 className="text-xl font-bold mb-12">Send Invites</h2>
          </div>
          <div className="flex items-center space-x-2 pb-24 w-full justify-center lg:justify-start">
            <input
              type="text"
              id="invites"
              name="invites"
              onChange={(e) => setInvites(e.target.value)}
              value={invites}
              className="py-2 mt-1 block w-full lg:w-[66%] border-b-2 border-gray-500 focus:ring-green focus:border-green bg-opacity-90 text-black placeholder-black sm:text-md focus:outline-none bg-transparent"
              placeholder="Type name of recipient"
            />
          </div>

          <Link to="" className="w-full flex justify-center lg:justify-start">
            <button className="border border-green w-full lg:w-[70%] flex items-center bg-green-500 bg-white px-4 py-2 hover:bg-green-600 rounded-3xl">
              <span className="mx-auto text-green ">Send invite</span>
              <DirectionButton1 />
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Invites;
