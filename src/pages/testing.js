// import React from "react";
// import { FaTwitter } from "react-icons/fa6";
// import { BsWhatsapp } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import FeedImage from "../../assets/images/feedImage.png";

// function FamilyTreeFeeds() {
//   return (
//     <>
//       <section className="mx-auto px-4 py-8 ">
//         <h2 className="text-black mb-9 text-2xl mod:text-xl font-bold uppercase font-Montserrat text-center">
//           ABOUT ANIMS JOHNSON JAMES
//         </h2>

//         <div className="lg:flex flex-row">
//           {/* Image div */}
//           <div className="p-6">
//             <img
//               src={FeedImage}
//               alt="Profile"
//               className="rounded-lg shadow-md"
//             />
//           </div>
//           <div className="w-full">
//             {/* name */}
//             <div className="text-start mr-auto">
//               <h2 className="text-lg mb-2 px-6">ANIMS JOHNSON JAMES</h2>
//             </div>
//             <div className="flex mb-2 px-6">
//               <div className="space-x-3 ">
//                 <button className="bg-[#d9f8de] text-xs px-5 py-2 rounded-sm">
//                   An enterpreneur
//                 </button>
//                 <button className="bg-[#d9f8de] text-xs px-5 py-2 rounded-sm">
//                   Classic
//                 </button>
//               </div>

//               <div>
//                 {/* Social Media Icons and Website Logo */}
//                 <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0 mx-3">
//                   <div className="flex space-x-4 mt-2">
//                     <a
//                       href="https://twitter.com"
//                       target="blank"
//                       aria-label="twitter"
//                     >
//                       <FaTwitter className="w-4 h-auto text-[#A60505]" />
//                     </a>
//                     <a
//                       href="https://wa.me/+2347062916027"
//                       target="blank"
//                       aria-label="whatsapp"
//                     >
//                       <BsWhatsapp className="w-4 h-auto text-[#A60505]" />
//                     </a>
//                     <a
//                       href="https://facebook.com"
//                       target="blank"
//                       aria-label="facebook"
//                     >
//                       <FaFacebookF className="w-4 h-auto text-[#A60505]" />
//                     </a>
//                     <a
//                       href="https://instagram.com"
//                       target="blank"
//                       aria-label="instagram"
//                     >
//                       <FaInstagram className="w-4 h-auto text-[#A60505]" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Data */}
//             <div className="lg:flex lg:flex-row items-center space-x-4 ">
//               <div className=" p-6 rounded-lg  max-w-md w-full">
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">Home Address:</h3>
//                   <p className="text-gray-700 text-sm">558 Ikorodu Road</p>
//                 </div>
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">Phone No:</h3>
//                   <p className="text-gray-700 text-sm">+234701234567</p>
//                 </div>
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">Email:</h3>
//                   <p className="text-gray-700 text-sm">@gmail.com</p>
//                 </div>
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">DOB:</h3>
//                   <p className="text-gray-700 text-sm">23/09/1980</p>
//                 </div>
//               </div>

//               {/* Second column */}
//               <div className="rounded-lg  max-w-md w-full">
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">State of Origin:</h3>
//                   <p className="text-gray-700 text-sm">Lagos State</p>
//                 </div>
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">Local Government:</h3>
//                   <p className="text-gray-700 text-sm">Ikorodu</p>
//                 </div>
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">Autonomous Community:</h3>
//                   <p className="text-gray-700 text-sm">Igbogbo</p>
//                 </div>
//                 <div className="mb-4 flex justify-between">
//                   <h3 className="text-sm font-bold">Kindred:</h3>
//                   <p className="text-gray-700 text-sm">Iyawowo</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default FamilyTreeFeeds;

// import React, { useState, useEffect } from "react";
// import { FaTwitter } from "react-icons/fa6";
// import { BsWhatsapp } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import FeedImage from "../../assets/images/feedImage.png";
// import { DirectionButton2 } from "../../components/d-button";
// import BirtdayFrame from "../../assets/images/birthdayFrame.png";
// import birthdayframeM1 from "../../assets/images/birthdayframeM1.png";
// import birthdayframeM2 from "../../assets/images/birthdayframeM2.png";
// import FamilyImage from "../../assets/images/FamilyImage.png";
// import { NameProfileCard } from "../../components/Cards/NameProfileCard";
// import { useSelector, useDispatch } from "react-redux";
// import { resetSuccess } from "../../features/UserFeature/getUserSlice";
// import { getProfile } from "../../features/UserFeature/UserAction";
// import moment from "moment";
// const backendURL =
//   process.env.NODE_ENV !== "production"
//     ? "http://localhost:8080"
//     : "https://gekoda-api.onrender.com";

// function FamilyTreeFeeds() {
//   const dispatch = useDispatch();
//   const [surname, setSurname] = useState("");

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Form submitted with surname:", surname);
//   setSurname("");
// };

// const handleChange = (e) => {
//   setSurname(e.target.value);
// };

//   useEffect(() => {
//     dispatch(getProfile());
//   }, [dispatch]);

//   const { loading, error, profile, success } = useSelector(
//     (state) => state.person
//   );
//   useEffect(() => {
//     console.log("Profile:", profile);
//   }, [profile]);

//   useEffect(() => {
//     dispatch(getProfile());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!profile) {
//     return <div>No profile data available.</div>;
//   }
//   const formattedDate = profile.DOB
//     ? moment(profile.DOB).format("DD MMMM YYYY")
//     : "Date not available";
//   const Image = profile?.image;
//   return (
//     <section className="mx-auto px-4 py-8">
//       <h2 className="text-black mb-9 text-2xl md:text-xl font-bold uppercase font-Montserrat text-center">
//         ABOUT {profile.lastName} {profile.firstName} {profile.middlename}
//       </h2>

//       <div className="lg:flex flex-row Nlg:mx-auto Nlg:flex-col Nlg:justify-center">
//         {/* Image div */}
//         <div className="mb-6 lg:mr-6 lg:mb-0 lg:w-[45rem]">
//           <img
//             // src={FeedImage}
//             src={`${backendURL}/${Image}`}
//             alt="Profile"
//             className="rounded-lg shadow-md w-full h-auto"
//           />
//         </div>
//         <div className="w-full ">
//           {/* Name */}
//           <div className="text-start  text-black">
//             <h2 className="text-lg mb-2 px-6">
//               {profile.lastName} {profile.firstName} {profile.middlename}
//             </h2>
//           </div>
//           <div className="flex mb-2 px-6">
//             <div className="space-x-3">
//               <button className="bg-[#d9f8de] text-xs px-5 py-2 rounded-sm">
//                 {profile.profession}
//               </button>
//               <button className="bg-[#d9f8de] text-xs px-5 py-2 rounded-sm">
//                 Classic
//               </button>
//             </div>
//             {/* Social Media Icons and Website Logo */}
//             <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0 mx-3">
//               <div className="flex space-x-4 mt-2">
//                 <a
//                   href={profile.twitter}
//                   target="_blank"
//                   aria-label="twitter"
//                   rel="noopener noreferrer"
//                 >
//                   <FaTwitter className="w-4 h-auto text-[#A60505]" />
//                 </a>
//                 <a
//                   href={`https://wa.me/ ${profile.phoneNumber}`}
//                   target="_blank"
//                   aria-label="whatsapp"
//                   rel="noopener noreferrer"
//                 >
//                   <BsWhatsapp className="w-4 h-auto text-[#A60505]" />
//                 </a>
//                 <a
//                   href={profile.facebook}
//                   target="_blank"
//                   aria-label="facebook"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebookF className="w-4 h-auto text-[#A60505]" />
//                 </a>
//                 <a
//                   href={profile.instagram}
//                   target="_blank"
//                   aria-label="instagram"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagram className="w-4 h-auto text-[#A60505]" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Data */}
//           <div className="lg:flex lg:flex-row items-center">
//             <div className="p-6 rounded-lg max-w-md w-full">
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">Home Address:</h3>
//                 <p className="text-gray-700 text-sm whitespace-normal text-end">
//                   {profile.streetAddress}
//                 </p>
//               </div>
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">Phone No:</h3>
//                 <p className="text-gray-700 text-sm">{profile.phoneNumber}</p>
//               </div>
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">Email:</h3>
//                 <p className="text-gray-700 text-sm">{profile.email}</p>
//               </div>
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">DOB:</h3>
//                 <p className="text-gray-700 text-sm">{formattedDate}</p>
//               </div>
//             </div>

//             {/* Second column */}
//             <div className="p-6 rounded-lg max-w-md w-full">
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">State of Origin:</h3>
//                 <p className="text-gray-700 text-sm">{profile.state}</p>
//               </div>
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">Local Government:</h3>
//                 <p className="text-gray-700 text-sm">{profile.lga}</p>
//               </div>
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">Autonomous Community:</h3>
//                 <p className="text-gray-700 text-sm">{profile.autonomous}</p>
//               </div>
//               <div className="mb-4 flex justify-between">
//                 <h3 className="text-sm font-bold">Kindred:</h3>
//                 <p className="text-gray-700 text-sm">{profile.kindred}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* button */}
//         <div className="ml-2">
//           <button className="bg-green text-white rounded-2xl w-[9rem] py-2 flex items-center justify-center transition ease-in-out duration-200 transform hover:scale-105">
//             Go to Tree
//             <span className="ml-2">
//               <DirectionButton2 />
//             </span>
//           </button>
//         </div>
//       </div>
//       {/* NextSection */}
//       <div className="mt-10">
//         <h3 className="text-black  text-lg mod:text-sm font-bold uppercase  text-start mb-2">
//           Background
//         </h3>
//         <div className="">
//           <p className="text-black text-sm font-normal">{profile.about}</p>
//         </div>
//       </div>
//       {/* NextSection */}
//       <div className="mt-10">
//         <h3 className="text-black  text-lg font-bold uppercase  text-start mb-2">
//           State of origin
//         </h3>
//         <div className="">
//           <p className="text-black text-sm font-normal">
//             AYO is an onvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             b.
//           </p>
//         </div>
//       </div>
//       {/* viewMore-button */}
//       {/* button */}
//       <div className="flex justify-center my-7">
//         <button className="bg-green text-white rounded-2xl w-auto py-2 px-3 flex items-center justify-center transition ease-in-out duration-200 transform hover:scale-105">
//           view more on state & culture
//           <span className="ml-2">
//             <DirectionButton2 />
//           </span>
//         </button>
//       </div>
//       {/* birthdayFrame */}
//       {/* largescreen */}
//       <div className="relative Nlg:hidden">
//         <img src={BirtdayFrame} alt="birthdayframe" className="h-[15rem]" />
//         <p className="absolute top-0 left-0 w-full h-full flex items-start mt-[3.5rem] justify-center text-black text-lg font-bold">
//           Anims Johnson James’ birthday is in 3 days
//         </p>
//         <p className="absolute top-[2rem] lg:px-24 left-0 w-full h-full flex items-start mt-[3.5rem] justify-center text-black text-sm font-normal">
//           On days like this Essential Groups advices visitors like yourself to
//           find a way to wish this personnel a happy birthday. You can maximize
//           our social media handle keys we provided, and if this personnel is
//           deceased you can still get through to any of the family member through
//           our platform here
//         </p>
//       </div>
//       {/* mobile */}
//       <div className="bg-[#F8D9D9] lg:hidden py-2">
//         <div className="p-3">
//           <img src={birthdayframeM1} alt="" className="h-auto w-[45vw] mb-3" />
//           <img src={birthdayframeM2} alt="" className="h-auto w-[35vw]" />
//         </div>
//         <p className="w-full h-full flex items-start px-5  text-black text-lg mb-3 font-bold">
//           Anims Johnson James’ birthday is in 3 days
//         </p>

//         <p className="w-full h-full flex items-start px-5  text-black text-sm font-normal">
//           On days like this Essential Groups advices visitors like yourself to
//           find a way to wish this personnel a happy birthday. You can maximize
//           our social media handle keys we provided, and if this personnel is
//           deceased you can still get through to any of the family member through
//           our platform here
//         </p>
//       </div>

//       {/* familyDetails? */}
//       <div className="lg:grid grid-cols-10 my-6">
//         <div className=" col-span-4">
//           <img src={FamilyImage} alt="" className="w-full" />
//         </div>
//         <div className="flex mx-3 flex-col justify-center items-center col-span-6">
//           <div className="">
//             {/* childrensCard */}
//             <div className="flex flex-wrap space-x-2 Nlg:my-3 gap-2 mb-9">
//               <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
//                 child1
//               </button>
//               <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
//                 Child2
//               </button>
//               <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
//                 Child3
//               </button>
//               <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
//                 Child4
//               </button>
//               <button className="text-black  bg-[#d9f8de] text-sm  p-2 rounded-sm">
//                 Chid5
//               </button>
//             </div>
//             <h3 className="text-black text-lg font-bold uppercase mb-3">
//               State religion
//             </h3>
//             <button className="text-white bg-green text-lg font-bold uppercase mb-1 p-1 rounded-xs">
//               Christianity
//             </button>
//             <div className="">
//               <p className="text-black text-sm font-normal">
//                 AYO is an onvallis. Sed ut vulputate nisi. Integer in felis sed
//                 leo vestibulum venenatis. Curabitur tempor quis eros tempus
//                 lacinia. Nam bionvallis. Sed ut vulputate nisi. Integer in felis
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Tribe */}

//       <div className="mt-10">
//         <h3 className="text-black  text-lg font-bold uppercase  text-start mb-4">
//           Tribe
//         </h3>
//         <button className="text-white bg-green text-lg font-bold uppercase mb-1 p-1 rounded-xs">
//           Igala
//         </button>
//         <div className="">
//           <p className="text-black text-sm font-normal">
//             AYO is an onvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
//             vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
//             b.
//           </p>
//         </div>
//       </div>

//       {/* immediates family members */}
//       <div className="mt-10">
//         <h3 className="text-black text-lg font-bold text-start mb-4">
//           Immediate Family Members
//         </h3>
//         {/* Cards */}
//         <div className="flex flex-wrap gap-4 max-w-full lg:items-start mod:justify-center">
//           <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
//             <div className="w-[4rem] h-[4rem] flex-shrink-0">
//               <img
//                 src={FamilyImage}
//                 alt="Card Image"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//             <div className="ml-2 flex flex-col justify-center">
//               <p className="text-sm font-bold mb-2">John Paul</p>
//               <p className="text-xs">Father</p>
//             </div>
//           </div>
//           <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
//             <div className="w-[4rem] h-[4rem] flex-shrink-0">
//               <img
//                 src={FamilyImage}
//                 alt="Card Image"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//             <div className="ml-2 flex flex-col justify-center">
//               <p className="text-sm font-bold mb-2">Jane Doe</p>
//               <p className="text-xs">Mother</p>
//             </div>
//           </div>
//           <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
//             <div className="w-[4rem] h-[4rem] flex-shrink-0">
//               <img
//                 src={FamilyImage}
//                 alt="Card Image"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//             <div className="ml-2 flex flex-col justify-center">
//               <p className="text-sm font-bold mb-2">Sam Paul</p>
//               <p className="text-xs">Brother</p>
//             </div>
//           </div>
//           <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
//             <div className="w-[4rem] h-[4rem] flex-shrink-0">
//               <img
//                 src={FamilyImage}
//                 alt="Card Image"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//             <div className="ml-2 flex flex-col justify-center">
//               <p className="text-sm font-bold mb-2">Anna Paul</p>
//               <p className="text-xs">Sister</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Greate people bearing this name */}
//       <div className="mt-10">
//         <div className="mt-24">
//           <h3 className="text-black  text-lg font-bold  text-start mb-4">
//             Greate people bearing this name
//           </h3>

//           {/* Cards */}
//           <NameProfileCard />
//         </div>

//         {/* search */}
//         <div className="mt-24">
//           <h4 className="text-black my-4 text-sm  font-bold   text-center">
//             Dont Find What You Are Looking For?
//           </h4>
//           <p className="mt-4 text-center lg:max-w-[35rem] mx-auto">
//             should lead to more on culture and town, religion, tribe family
//             photograph, highlight position of people on the photo
//           </p>

//           {/* form */}
//           <div className="flex justify-center my-3">
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col sm:flex-row items-center w-full sm:w-auto"
//             >
//               <input
//                 type="surname"
//                 placeholder="Customize your search more"
//                 value={surname}
//                 onChange={handleChange}
//                 className="px-6 py-2 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-[26rem] focus:outline-none focus:ring-2 focus:ring-green text-black bg-NavClr rounded-xl rounded-bl-xl"
//               />
//               <button className="text-white flex items-center justify-center bg-green-500 px-4 py-2 bg-green hover:bg-green-600 rounded-xl rounded-br-xl  sm:w-auto">
//                 <span className="mr-2">Search</span>
//                 <DirectionButton2 className="ml-2" />
//               </button>
//             </form>
//           </div>
//           {/* form */}

//           {/* related searches */}
//           <div className="mt-24 mx-4">
//             <h3 className="text-black my-4 text-lg mod:text-sm font-bold   text-start mb-3">
//               Related searches
//             </h3>
//             <ul className=" list-disc">
//               <li>Jame John</li>
//               <li>Jame John</li>
//               <li>Jame John</li>
//               <li>Jame John</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FamilyTreeFeeds;

//  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

<div className="flex justify-center my-7">
  <button className="bg-green text-white rounded-2xl w-auto py-2 px-3 flex items-center justify-center transition ease-in-out duration-200 transform hover:scale-105">
    view more on state & culture
    <span className="ml-2">
      <DirectionButton2 />
    </span>
  </button>
</div>;

/* birthdayFrame */

/* largescreen */

<div className="relative Nlg:hidden">
  <img src={BirtdayFrame} alt="birthdayframe" className="h-[15rem]" />
  <p className="absolute top-0 left-0 w-full h-full flex items-start mt-[3.5rem] justify-center text-black text-lg font-bold">
    Anims Johnson James’ birthday is in 3 days
  </p>
  <p className="absolute top-[2rem] lg:px-24 left-0 w-full h-full flex items-start mt-[3.5rem] justify-center text-black text-sm font-normal">
    On days like this Essential Groups advices visitors like yourself to find a
    way to wish this personnel a happy birthday. You can maximize our social
    media handle keys we provided, and if this personnel is deceased you can
    still get through to any of the family member through our platform here
  </p>
</div>;

/* mobile */

<div className="bg-[#F8D9D9] lg:hidden py-2">
  <div className="p-3">
    <img src={birthdayframeM1} alt="" className="h-auto w-[45vw] mb-3" />
    <img src={birthdayframeM2} alt="" className="h-auto w-[35vw]" />
  </div>
  <p className="w-full h-full flex items-start px-5  text-black text-lg mb-3 font-bold">
    Anims Johnson James’ birthday is in 3 days
  </p>

  <p className="w-full h-full flex items-start px-5  text-black text-sm font-normal">
    On days like this Essential Groups advices visitors like yourself to find a
    way to wish this personnel a happy birthday. You can maximize our social
    media handle keys we provided, and if this personnel is deceased you can
    still get through to any of the family member through our platform here
  </p>
</div>;

/* familyDetails? */

<div className="lg:grid grid-cols-10 my-6">
  <div className=" col-span-4">
    <img src={FamilyImage} alt="" className="w-full" />
  </div>
  <div className="flex mx-3 flex-col justify-center items-center col-span-6">
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
      <h3 className="text-black text-lg font-bold uppercase mb-3">
        State religion
      </h3>
      <button className="text-white bg-green text-lg font-bold uppercase mb-1 p-1 rounded-xs">
        Christianity
      </button>
      <div className="">
        <p className="text-black text-sm font-normal">
          AYO is an onvallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
          bionvallis. Sed ut vulputate nisi. Integer in felis
        </p>
      </div>
    </div>
  </div>
</div>;

/* Tribe */

<div className="mt-10">
  <h3 className="text-black  text-lg font-bold uppercase  text-start mb-4">
    Tribe
  </h3>
  <button className="text-white bg-green text-lg font-bold uppercase mb-1 p-1 rounded-xs">
    Igala
  </button>
  <div className="">
    <p className="text-black text-sm font-normal">
      AYO is an onvallis. Sed ut vulputate nisi. Integer in felis sed leo
      vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
      bionvallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum
      venenatis. Curabitur tempor quis eros tempus lacinia. Nam bionvallis. Sed
      ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Curabitur tempor quis eros tempus lacinia. Nam bionvallis. Sed ut
      vulputate nisi. Integer in felis sed leo vestibulum venenatis. Curabitur
      tempor quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
      Integer in felis sed leo vestibulum venenatis. Curabitur tempor quis eros
      tempus lacinia. Nam b.
    </p>
  </div>
</div>;

/* immediates family members */

<div className="mt-10">
  <h3 className="text-black text-lg font-bold text-start mb-4">
    Immediate Family Members
  </h3>
  {/* Cards */}
  <div className="flex flex-wrap gap-4 max-w-full lg:items-start mod:justify-center">
    <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
      <div className="w-[4rem] h-[4rem] flex-shrink-0">
        <img
          src={FamilyImage}
          alt="Card Image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="ml-2 flex flex-col justify-center">
        <p className="text-sm font-bold mb-2">John Paul</p>
        <p className="text-xs">Father</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
      <div className="w-[4rem] h-[4rem] flex-shrink-0">
        <img
          src={FamilyImage}
          alt="Card Image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="ml-2 flex flex-col justify-center">
        <p className="text-sm font-bold mb-2">Jane Doe</p>
        <p className="text-xs">Mother</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
      <div className="w-[4rem] h-[4rem] flex-shrink-0">
        <img
          src={FamilyImage}
          alt="Card Image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="ml-2 flex flex-col justify-center">
        <p className="text-sm font-bold mb-2">Sam Paul</p>
        <p className="text-xs">Brother</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-full shadow-xl min-w-[15rem]  border border-gray-100 h-[4rem] p-2">
      <div className="w-[4rem] h-[4rem] flex-shrink-0">
        <img
          src={FamilyImage}
          alt="Card Image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="ml-2 flex flex-col justify-center">
        <p className="text-sm font-bold mb-2">Anna Paul</p>
        <p className="text-xs">Sister</p>
      </div>
    </div>
  </div>
</div>;

/* Greate people bearing this name */

<div className="mt-10">
  <div className="mt-24">
    <h3 className="text-black  text-lg font-bold  text-start mb-4">
      Greate people bearing this name
    </h3>

    {/* Cards */}
    <NameProfileCard />
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
    <div className="flex justify-center my-3">
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
    {/* form */}

    {/* related searches */}
    <div className="mt-24 mx-4">
      <h3 className="text-black my-4 text-lg mod:text-sm font-bold   text-start mb-3">
        Related searches
      </h3>
      <ul className=" list-disc">
        <li>Jame John</li>
        <li>Jame John</li>
        <li>Jame John</li>
        <li>Jame John</li>
      </ul>
    </div>
  </div>
</div>;

import React, { useState, useEffect, useRef } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import backgroundImage from "../../assets/images/backgroundImage.png";
import LayoutNAv from "../../components/layoutNAv";
import { useDispatch, useSelector } from "react-redux";
import {
  createFamilyMember,
  editPerson,
  fetchAllDetails,
} from "../../features/UserFeature/UserAction";
import { resetSuccess } from "../../features/UserFeature/UserSlice";
import { resetEditState } from "../../features/UserFeature/EditSlice";
import { resetDeleteState } from "../../features/UserFeature/deleteUserSlice";
import { DirectionButton1 } from "../d-button";
import Error from "../../components/tools/Error";
import Spinner from "../../components/tools/Spinner";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineAddAPhoto } from "react-icons/md";

const PersonalForm = ({ initialState = {}, isEdit = false }) => {
  const [formData, setFormData] = useState({
    firstName: initialState.firstName || "",
    lastName: initialState.lastName || "",
    gender: initialState.gender || "",
    DOB: initialState.DOB || "",
    image: null,
    imagePreview: initialState.image
      ? `${backendURL}/${initialState.image}`
      : null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.form.person);
  const { Eloading, Eerror, Esuccess } = useSelector(
    (state) => state.edit.person
  );

  const formRef = useRef(); // Create a ref for the form
  const fileInputRef = useRef(); // Create a ref for the file input

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.DOB ||
      !formData.gender
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formDataToSubmit = new FormData();
    if (isEdit && initialState._id) {
      formDataToSubmit.append("_id", initialState._id);
    }
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("gender", formData.gender);
    formDataToSubmit.append("DOB", formData.DOB);

    if (formData.image) {
      formDataToSubmit.append("image", formData.image);
    }

    if (isEdit && initialState._id) {
      dispatch(
        editPerson({
          _id: initialState._id,
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          DOB: formData.DOB,
          image: formData.image,
        })
      );

      dispatch(fetchAllDetails());
      dispatch(resetEditState());
    } else {
      dispatch(
        createFamilyMember({
          memberType: "createPerson",
          formData: formDataToSubmit,
        })
      );
      dispatch(fetchAllDetails());
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenderSelect = (selectedGender) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  useEffect(() => {
    if (success) {
      toast.success("Created!!");
      dispatch(resetSuccess());
      setTimeout(() => navigate("/layout/mothers-form"), 2000);
    }
  }, [success, dispatch, navigate]);

  // Function to handle modal submit
  const handleModalSubmit = () => {
    formRef.current.requestSubmit(); // Trigger form submission
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-full w-full Nlg:max-w-[40rem] Nlg:mx-auto"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-opacity-50 pointer-events-none"></div>
        <div className="relative p-8 flex flex-col items-center lg:items-start lg:flex-row">
          <span className="lg:hidden w-full flex justify-center">
            <LayoutNAv />
          </span>
          <form
            onSubmit={handleSubmit}
            ref={formRef} // Attach ref to form
            className="space-y-4 flex flex-col items-center lg:items-start w-full"
          >
            <div className="mb-5">
              <h3 className="text-2xl text-black mb-2">
                {isEdit ? "Edit here" : "Start with yourself"}
              </h3>
              <p>
                Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-3 w-full justify-center lg:justify-start">
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleInputChange}
                value={formData.firstName}
                className="py-2 mt-1 block w-full lg:w-[66%] border-b-2 border-gray-500 focus:ring-green focus:border-green bg-opacity-90 text-black placeholder-black sm:text-md focus:outline-none bg-transparent"
                placeholder="Your first name"
              />
              <IoPersonCircleOutline size={28} className="mt-6" />
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleInputChange}
                value={formData.lastName}
                className="py-2 mt-1 block w-full lg:w-[70%] border-b-2 border-gray-500 focus:ring-green focus:border-green bg-opacity-90 text-black placeholder-black sm:text-md focus:outline-none bg-transparent"
                placeholder="Your last name"
              />
            </div>
            <div className="w-full flex flex-col items-center lg:items-start">
              <label
                htmlFor="gender"
                className="block text-sm font-bold text-black"
              >
                Gender
              </label>
              <div className="flex space-x-4 mt-1">
                <button
                  type="button"
                  onClick={() => handleGenderSelect("male")}
                  className={`py-2 px-4 border-2 rounded-lg focus:outline-none ${
                    formData.gender === "male"
                      ? "bg-green text-white"
                      : "bg-transparent text-black border-gray-500"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderSelect("female")}
                  className={`py-2 px-4 border-2 rounded-lg focus:outline-none ${
                    formData.gender === "female"
                      ? "bg-green text-white"
                      : "bg-transparent text-black border-gray-500"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>
            <div className="flex-col pt-3 pb-7 w-full flex justify-center lg:justify-start">
              <label
                htmlFor="DOB"
                className="block text-sm font-bold text-black"
              >
                DOB
              </label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                onChange={handleInputChange}
                value={formData.DOB}
                className="shadow px-3 mt-1 block w-full lg:w-[50%] py-3 rounded-xl focus:ring-green focus:border-green bg-opacity-90 bg-[#e7fae7] text-black placeholder-black sm:text-sm focus:outline-none"
              />
            </div>
            {isEdit && (
              <div className="w-full flex flex-col items-center lg:items-start">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef} // Attach ref to file input
                />
                <MdOutlineAddAPhoto
                  size={28}
                  className="cursor-pointer"
                  onClick={() => fileInputRef.current.click()} // Trigger file input click
                />
                {formData.imagePreview && (
                  <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="mt-2 w-20 h-20 object-cover rounded-full"
                  />
                )}
              </div>
            )}
            <div className="flex items-center justify-center w-full mt-8">
              <button
                type="submit"
                className="bg-green text-white py-2 px-4 rounded-lg hover:bg-opacity-75"
              >
                {isEdit ? "Update" : "Save"}
              </button>
              {!isEdit && (
                <Link to="/layout/mothers-form">
                  <DirectionButton1 />
                </Link>
              )}
            </div>
            {loading || Eloading ? (
              <Spinner message="Sending request..." />
            ) : error || Eerror ? (
              <Error error={error || Eerror} visible={true} />
            ) : null}
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default PersonalForm;
import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";
import { resetSuccess } from "../features/UserFeature/UserSlice";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { BsPersonBoundingBox } from "react-icons/bs";
import { statesAndLGAs } from "../assets/json-datas/State/LGAs.json";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { createFamilyMember, getProfile } from "../features/UserFeature/UserAction";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

export default function Profile() {
  const dispatch = useDispatch();
  const { loading, error, profile, success } = useSelector((state) => state.person);
  const fileInputRef = useRef(null);
  const familyPictureInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFamilyPictureClick = () => {
    familyPictureInputRef.current.click();
  };

  const Image = profile?.image;
  const FamilyPicture = profile?.familyPicture; // New field for family picture

  const initialFormData = {
    background: "",
    firstName: "",
    lastName: "",
    email: "",
    DOB: "",
    phoneNumber: "",
    streetAddress: "",
    lga: "",
    state: "",
    kindred: "",
    village: "",
    autonomous: "",
    tribe: "",
    religion: "",
    profession: "",
    facebook: "",
    twitter: "",
    instagram: "",
    about: "",
    image: "",
    familyPicture: "", // New field for family picture
    middlename: "",
  };

  useEffect(() => {
    if (profile) {
      setFormData((prevState) => ({
        ...prevState,
        ...profile,
        image: profile.image || formData.image,
        familyPicture: profile.familyPicture || formData.familyPicture, // Preserve existing family picture URL if available
      }));
      setImagePreview(profile.image ? `${backendURL}/${profile.image}` : null);
      setFamilyPicturePreview(profile.familyPicture ? `${backendURL}/${profile.familyPicture}` : null);
    }
  }, [profile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      image: file,
    }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleFamilyPictureChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      familyPicture: file,
    }));
    setFamilyPicturePreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleStateChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      state: value,
      lga: "",
    }));
  };

  const handleLGAChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      lga: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedState = statesAndLGAs.find(
      (state) => state.id === formData.state
    )?.name;
    const selectedLGA = statesAndLGAs
      .find((state) => state.id === formData.state)
      ?.local_governments.find((lga) => lga.id === formData.lga)?.name;

    const data = new FormData();
    for (const key in formData) {
      if (key === "state" && selectedState) {
        data.append(key, selectedState);
      } else if (key === "lga" && selectedLGA) {
        data.append(key, selectedLGA);
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      await dispatch(
        createFamilyMember({
          memberType: "profile",
          formData: data,
        })
      ).unwrap();
      toast.success("Updated! 👍");
      dispatch(resetSuccess());
    } catch (error) {
      toast.error("Failed to create profile. Please try again.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProfile()).unwrap();
      } catch (error) {
        toast.error("Failed to fetch profile data.");
      }
    };
    fetchData();
  }, [dispatch]);

  const [formData, setFormData] = useState(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    return savedFormData || initialFormData;
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [familyPicturePreview, setFamilyPicturePreview] = useState(null);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const states = statesAndLGAs.map((state) => (
    <option key={state.id} value={state.id}>
      {state.name}
    </option>
  ));

  const selectedState = statesAndLGAs.find(
    (state) => state.id === formData.state
  );

  const lgas = selectedState
    ? selectedState.local_governments.map((lga) => (
        <option key={lga.id} value={lga.id}>
          {lga.name}
        </option>
      ))
    : [];

  const handleQuillChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      about: value,
    }));
  };

  return (
    <section className="px-4">
      <form onSubmit={handleSubmit} className="mb-36">
        <div className="">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please fill all fields as accurately as possible
            </p>
          </div>
          <div className="lg:grid grid-cols-10">
            <div className="col-span-4 md:pr-5">
              <div className="border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Profile Picture
                    </label>
                    <div className="mt-1 flex justify-center rounded-lg px-6 py-10">
                      <div className="text-center">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Profile picture preview"
                            className="h-[20rem] w-[20rem] rounded-full object-cover"
                          />
                        ) : (
                          <div
                            onClick={handleIconClick}
                            className="cursor-pointer h-40 w-40 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-full"
                          >
                            <BsPersonBoundingBox
                              aria-hidden="true"
                              className="h-12 w-12 text-gray-300"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span className="hidden">Upload a file</span>
                                <input
                                  ref={fileInputRef}
                                  id="file-upload"
                                  name="image"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                 
                  {/* Other fields in the form */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Save
        </button>
      </form>
    </section>
  );
}




 <section className="px-4">
      <form onSubmit={handleSubmit} className="mb-36">
        <div className="">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please fill all fields as accurately as possible
            </p>
          </div>
          <div className="lg:grid grid-cols-10">
            <div className="col-span-4 md:pr-5">
              <div className="border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center rounded-lg px-6 py-10">
                      <div className="text-center">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Image preview"
                            className="h-[20rem] w-[20rem] rounded-full object-cover"
                          />
                        ) : (
                          <div
                            onClick={() => fileInputRef.current.click()}
                            className="cursor-pointer h-40 w-40 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-full"
                          >
                            <BsPersonBoundingBox
                              aria-hidden="true"
                              className="h-12 w-12 text-gray-300"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span className="hidden">Upload a file</span>
                                <input
                                  ref={fileInputRef}
                                  id="file-upload"
                                  name="image"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo2"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Additional Image
                    </label>
                    <div className="mt-1 flex justify-center rounded-lg px-6 py-10">
                      <div className="text-center">
                        {imagePreview2 ? (
                          <img
                            src={imagePreview2}
                            alt="Additional image preview"
                            className="h-[20rem] w-[20rem] rounded-full object-cover"
                          />
                        ) : (
                          <div
                            onClick={() => fileInputRef2.current.click()}
                            className="cursor-pointer h-40 w-40 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-full"
                          >
                            <PhotoIcon
                              aria-hidden="true"
                              className="h-12 w-12 text-gray-300"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload2"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span className="hidden">Upload an additional file</span>
                                <input
                                  ref={fileInputRef2}
                                  id="file-upload2"
                                  name="image2"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleFileChange2}
                                />
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Existing fields here */}
                  {/* ... */}
                </div>
              </div>
            </div>

            {/* Additional form fields */}
            {/* ... */}
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </form>
    </section>
  );