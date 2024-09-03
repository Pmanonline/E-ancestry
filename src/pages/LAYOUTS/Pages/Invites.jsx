import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendInvite } from "../../../features/UserFeature/inviteAction";
import { resetSuccess } from "../../../features/UserFeature/inviteSlice";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/backgroundImage.png";
import { DirectionButton1 } from "../../../components/d-button";
import LayoutNAv from "../../../components/layoutNAv";
import Error from "../../../components/tools/Error";
import Spinner from "../../../components/tools/Spinner";
import { ToastContainer, toast } from "react-toastify";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

const Invites = () => {
  const [recipient, setRecipient] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.invite);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(sendInvite({ inviteType: "email", recipient, name }));
  };
  useEffect(() => {
    if (success) {
      toast.success("Invite sent successfully!!");
      dispatch(resetSuccess());
      setName("");
      setRecipient("");
    }
  }, [success, dispatch]);

  return (
    <section
      className="p-8 relative bg-cover bg-no-repeat h-full w-full Nlg:max-w-[40rem] Nlg:mx-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Nav */}
      <span className="w-full flex justify-center">
        <LayoutNAv />
      </span>
      {/* Nav */}
      <div className="relative px-8 flex flex-col items-center lg:items-start lg:flex-row">
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
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="py-2 mt-1 block w-full lg:w-[66%] border-b-2 border-gray-500 focus:ring-green focus:border-green bg-opacity-90 text-black placeholder-black sm:text-md focus:outline-none bg-transparent"
              placeholder="Type name of recipient"
            />
          </div>

          <div className="flex items-center space-x-2 pb-24 w-full justify-center lg:justify-start">
            <input
              type="email"
              id="recipient"
              name="recipient"
              onChange={(e) => setRecipient(e.target.value)}
              value={recipient}
              className="py-2 mt-1 block w-full lg:w-[66%] border-b-2 border-gray-500 focus:ring-green focus:border-green bg-opacity-90 text-black placeholder-black sm:text-md focus:outline-none bg-transparent"
              placeholder="Enter email address"
            />
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <button
              type="submit"
              className="border border-green w-full lg:w-[70%] flex items-center bg-green-500 bg-white px-4 py-2 hover:bg-green-600 rounded-3xl"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <span className="mx-auto text-green">Send invite</span>
                  <DirectionButton1 />
                </>
              )}
            </button>
            {error && <Error>{error}</Error>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Invites;
