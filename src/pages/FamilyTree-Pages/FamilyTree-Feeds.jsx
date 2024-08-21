import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import FeedImage from "../../assets/images/feedImage.png";
import BirtdayFrame from "../../assets/images/birthdayFrame.png";
import birthdayframeM1 from "../../assets/images/birthdayframeM1.png";
import birthdayframeM2 from "../../assets/images/birthdayframeM2.png";
import FamilyImage from "../../assets/images/FamilyImage.png";
import noProfile from "../../assets/images/noProfile.png";
import { DirectionButton2 } from "../../components/d-button";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  getAllProfiles,
} from "../../features/UserFeature/UserAction";
import { fetchStateDetails } from "../../features/Statefeature/stateAction";
import moment from "moment";
import Spinner from "../../components/tools/Spinner";
import { calculateBirthdayCountdown } from "../../components/tools/birthdayCountdown";
import { NameProfileCard } from "../../components/Cards/NameProfileCard";
import SearchUsers from "../../components/tools/SearchUsers";
import { RecentSearches } from "../../components/tools/SearchUsers";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

function ChildFeed() {
  const dispatch = useDispatch();
  const [surname, setSurname] = useState("");
  const [Loading, setLoading] = useState(true);
  const [selectedReligionDescription, setSelectedReligionDescription] =
    useState("");
  const { profile, profiles, loading, error } = useSelector(
    (state) => state.person
  );
  // Debugging output
  const { userId } = useParams();
  console.log("User ID prop:", userId);
  console.log("Profile from state:", profile);

  // Fetch user data from API or other source

  // Fetch current profile when userId changes
  useEffect(() => {
    if (userId) {
      dispatch(getProfile(userId));
    }
  }, [dispatch, userId]);

  // Fetch all profiles
  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  // Log the state to console
  useEffect(() => {
    console.log("Current Profile:", profile?.role);
    console.log("All Profiles:", profiles);
    console.log("Loading:", loading);
    console.log("Error:", error);
  }, [profile, profiles, loading, error]);

  // If profile data is available, use its name for filtering profiles
  const relatedProfiles = profiles.filter(
    (p) =>
      p.firstName === profile?.firstName || p.lastName === profile?.lastName
  );

  const { allStates, religions, tribes } = useSelector((state) => state.state);

  if (error) {
    console.error("Error fetching data:", error);
  }

  // Find the state based on the user's selected state
  const stateName = profile?.state;
  const ReligionNam = profile?.religion;
  const TribeName = profile?.tribe;
  console.log("Profile State:", stateName, ReligionNam, TribeName);

  // Format the state name to match the names in allStates
  const formattedStateName = stateName ? `${stateName} State` : "";
  console.log("Formatted State Name:", formattedStateName);

  // Find the state based on the formatted state name
  const userStateOfOrigin = allStates?.find(
    (state) => state.name === formattedStateName
  );
  console.log("User State of Origin:", userStateOfOrigin);
  // Create the complete state name if needed

  // check and display religions details
  const ReligionDetails = religions?.find(
    (state) => state.religionName === ReligionNam
  );

  // check and display tribes details
  const TribesDetails = tribes?.find((tribe) => tribe?.tribeName === TribeName);

  useEffect(() => {
    dispatch(fetchStateDetails()) // Fetch all states
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>No profile data available.</div>;
  }

  const formattedDate = profile.DOB
    ? moment(profile.DOB).format("DD MMMM YYYY")
    : "Date not available";
  const daysUntilBirthday = calculateBirthdayCountdown(formattedDate);

  const imageSrc = profile?.image
    ? `${backendURL}/${profile.image}`
    : noProfile;
  const imageSrc2 = profile?.image2
    ? `${backendURL}/${profile.image2}`
    : noProfile; // Same logic for image2
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with surname:", surname);
    setSurname("");
  };
  const handleChange = (e) => {
    setSurname(e.target.value);
  };

  return (
    <section className="mx-auto px-4 py-8">
      <h2 className="text-black mb-9 text-2xl md:text-xl font-bold uppercase font-Montserrat text-center">
        ABOUT {profile.lastName} {profile.firstName} {profile.middlename}
      </h2>
      <div className="lg:flex flex-row Nlg:mx-auto Nlg:flex-col Nlg:justify-center">
        <div className="mb-6 lg:mr-6 lg:mb-0 lg:w-[45rem] mx-auto flex justify-center">
          <img
            src={imageSrc} // Use dynamic image source
            alt="Profile"
            className="rounded-lg shadow-md w-[25rem] h-[25rem] object-cover"
          />
        </div>
        <div className="w-full">
          <div className="text-start text-black">
            <h2 className="text-lg mb-2 px-6">
              {profile.lastName} {profile.firstName} {profile.middlename}
            </h2>
          </div>
          <div className="flex mb-2 px-6">
            <div className="space-x-3">
              <button className="bg-[#d9f8de] text-xs px-5 py-2 rounded-sm">
                {profile.profession}
              </button>
              <button className="bg-[#d9f8de] text-xs px-5 py-2 rounded-sm">
                Classic
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0 mx-3">
              <div className="flex space-x-4 mt-2">
                <a
                  href={profile.twitter}
                  target="_blank"
                  aria-label="twitter"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-4 h-auto text-[#A60505]" />
                </a>
                <a
                  href={`https://wa.me/${profile.phoneNumber}`}
                  target="_blank"
                  aria-label="whatsapp"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp className="w-4 h-auto text-[#A60505]" />
                </a>
                <a
                  href={profile.facebook}
                  target="_blank"
                  aria-label="facebook"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="w-4 h-auto text-[#A60505]" />
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  aria-label="instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-4 h-auto text-[#A60505]" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row items-center">
            <div className="p-6 rounded-lg max-w-md w-full">
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">Home Address:</h3>
                <p className="text-gray-700 text-sm whitespace-normal text-end">
                  {profile.streetAddress}
                </p>
              </div>
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">Phone No:</h3>
                <p className="text-gray-700 text-sm">{profile.phoneNumber}</p>
              </div>
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">Email:</h3>
                <p className="text-gray-700 text-sm">{profile.email}</p>
              </div>
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">DOB:</h3>
                <p className="text-gray-700 text-sm">{formattedDate}</p>
              </div>
            </div>

            <div className="p-6 rounded-lg max-w-md w-full">
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">State of Origin:</h3>
                <p className="text-gray-700 text-sm">{profile.state}</p>
              </div>
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">Local Government:</h3>
                <p className="text-gray-700 text-sm">{profile.lga}</p>
              </div>
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">Autonomous Community:</h3>
                <p className="text-gray-700 text-sm">{profile.autonomous}</p>
              </div>
              <div className="mb-4 flex justify-between">
                <h3 className="text-sm font-bold">Kindred:</h3>
                <p className="text-gray-700 text-sm">{profile.kindred}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <Link to={`/view-tree/${userId}`}>
            <button className="bg-green text-white rounded-2xl w-[9rem] py-2 flex items-center justify-center transition ease-in-out duration-200 transform hover:scale-105">
              Go to Tree
              <span className="ml-2">
                <DirectionButton2 />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {profile.about && (
        <div className="mt-20">
          <h3 className="text-black text-lg mod:text-sm font-bold uppercase text-start mb-2">
            Background
          </h3>
          <div>
            <p className="text-black text-sm font-normal">
              {getText(profile.about)}
            </p>
          </div>
        </div>
      )}
      {userStateOfOrigin?.origin && (
        <div className="mt-10">
          <h3 className="text-black text-lg font-bold uppercase text-start mb-2">
            State of origin
          </h3>
          <div>
            <p className="text-black text-sm font-normal">
              {userStateOfOrigin?.origin || "State description not available"}
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-center my-7">
        <Link to={`/genealogy/${formattedStateName}`}>
          <button className="bg-green text-white rounded-2xl w-auto py-2 px-3 flex items-center justify-center transition ease-in-out duration-200 transform hover:scale-105">
            view more on state & culture
            <span className="ml-2">
              <DirectionButton2 />
            </span>
          </button>
        </Link>
      </div>
      {/* birthdayFrame
       largescreen  */}
      <div className="relative Nlg:hidden">
        <img src={BirtdayFrame} alt="birthdayframe" className="h-[15rem]" />
        <p className="absolute top-0 left-0 w-full h-full flex items-start mt-[3.5rem] justify-center text-black text-lg font-bold">
          {profile.lastName} {profile.firstName} {profile.middlename}'s birthday
          is in {daysUntilBirthday} {daysUntilBirthday === 1 ? "day" : "days"}
        </p>
        <p className="absolute top-[2rem] lg:px-24 left-0 w-full h-full flex items-start mt-[3.5rem] justify-center text-black text-sm font-normal">
          On days like this Essential Groups advices visitors like yourself to
          find a way to wish this personnel a happy birthday. You can maximize
          our social media handle keys we provided, and if this personnel is
          deceased you can still get through to any of the family member through
          our platform here
        </p>
      </div>
      {/* mobile screen */}
      <div className="bg-[#F8D9D9] lg:hidden py-2">
        <div className="p-3">
          <img src={birthdayframeM1} alt="" className="h-auto w-[45vw] mb-3" />
          <img src={birthdayframeM2} alt="" className="h-auto w-[35vw]" />
        </div>
        <p className="w-full h-full flex items-start px-5  text-black text-lg mb-3 font-bold">
          {profile.lastName} {profile.firstName} {profile.middlename}'s birthday
          is in {daysUntilBirthday} {daysUntilBirthday === 1 ? "day" : "days"}
        </p>

        <p className="w-full h-full flex items-start px-5  text-black text-sm font-normal">
          On days like this Essential Groups advices visitors like yourself to
          find a way to wish this personnel a happy birthday. You can maximize
          our social media handle keys we provided, and if this personnel is
          deceased you can still get through to any of the family member through
          our platform here
        </p>
      </div>
      {/* familyDetails?  */}
      <div className="lg:grid grid-cols-10 my-6">
        <div className=" col-span-4">
          <img src={imageSrc2} alt="" className="w-full" />
        </div>
        <div className="flex mx-3 flex-col justify-start items-start col-span-6 ">
          <div className="">
            {/* childrensCard */}
            <div className="flex flex-wrap space-x-2 Nlg:my-3 gap-2 mb-9">
              <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
                child1
              </button>
              <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
                Child2
              </button>
              <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
                Child3
              </button>
              <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
                Child4
              </button>
              <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
                Chid5
              </button>
            </div>

            {profile.religion && (
              <>
                <h3 className="text-black text-lg font-bold uppercase mb-3">
                  State religion
                </h3>
                <button className="text-white bg-green text-lg font-bold uppercase mb-1 p-1 rounded-xs">
                  {profile.religion}
                </button>
                <div className="">
                  <p className="text-black text-sm font-normal">
                    {ReligionDetails?.description ||
                      "Religion description not available"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Tribe  */}
      {profile.tribe && (
        <div className="mt-10">
          <h3 className="text-black  text-lg font-bold uppercase  text-start mb-4">
            Tribe
          </h3>
          <button className="text-white bg-green text-lg font-bold uppercase mb-1 p-1 rounded-xs">
            {profile.tribe}
          </button>
          <div className="">
            <p className="text-black text-sm font-normal">
              {TribesDetails?.description || "Tribe description not available"}
            </p>
          </div>
        </div>
      )}

      {/* Greate people bearing this name */}
      <div className="mt-10">
        <div className="mt-24">
          <h3 className="text-black  text-lg font-bold  text-start mb-4">
            Greate people bearing this name
          </h3>

          <div className="flex flex-wrap justify-center lg:justify-start">
            {relatedProfiles.map((profile) => (
              <div
                key={profile._id}
                className="overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg max-w-[15rem] w-full m-4"
              >
                {/* Image */}
                <div className="overflow-hidden bg-transparent shadow-none bg-clip-border">
                  <img
                    src={
                      profile.image
                        ? `${backendURL}/${profile.image}`
                        : noProfile // Use default image if profile.image is empty
                    }
                    alt="profile"
                    className="w-full h-[15rem] object-cover"
                  />
                </div>
                {/* Name */}
                <div className="px-4 mb-3">
                  <h3 className="font-sans text-lg font-bold mod:text-sm py-2">
                    {profile.lastName} {profile.firstName} {profile.middlename}
                  </h3>
                </div>
                {/* Gender and Position */}
                <div className="flex justify-between px-4 pb-3">
                  <h3 className="font-sans text-base mod:text-sm font-normal">
                    {profile.profession}
                  </h3>
                  <h3 className="font-sans text-base mod:text-sm font-normal bg-NavClr py-">
                    {profile.gender}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* search */}
      <div className="mt-24">
        <h4 className="text-black my-4 text-sm  font-bold   text-center">
          Dont Find What You Are Looking For?
        </h4>
        <p className="mt-4 text-center lg:max-w-[35rem] mx-auto">
          should lead to more on culture and town, religion, tribe family
          photograph, highlight position of people on the photo
        </p>

        {/* form */}
        <SearchUsers />
        {/* form */}

        {/* related searches */}
        <RecentSearches />
        {/* related searches */}
      </div>
    </section>
  );
}

const FamilyTreeFeeds = () => {
  const { userId } = useParams();

  return <ChildFeed userId={userId} />;
};

export default FamilyTreeFeeds;
