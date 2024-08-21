// // export default Viewers;
// import React from "react";
// import backgroundImage from "../../../assets/images/backgroundImage.png";
// import { CgProfile } from "react-icons/cg";
// import LayoutNAv from "../../../components/layoutNAv";

// const viewersList = [
//   { name: "John Brown" },
//   { name: "Jane Smith" },
//   { name: "Alice Johnson" },
//   { name: "Alice Johnson" },
//   { name: "Alice Johnson" },
//   { name: "Alice Johnson" },
//   // Add more viewers as needed
// ];

// const Viewers = () => {
//   return (
//     <section
//       className="p-8 relative bg-cover bg-no-repeat h-full w-full Nlg:max-w-[40rem] Nlg:mx-auto"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-opacity-50 pointer-events-none"></div>
//       <span className="w-full flex justify-center">
//         <LayoutNAv />
//       </span>
//       <h2 className="text-xl font-bold mb-4">
//         {viewersList.length} People have viewed your tree
//       </h2>

//       {/* list */}
//       <div className="flex flex-row flex-wrap">
//         {viewersList.map((viewer, index) => (
//           <div key={index} className="flex flex-row mb-2 w-1/2">
//             <div className="mr-2">
//               <CgProfile className="w-6 h-6" />
//             </div>
//             <div>
//               <p>{viewer.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Viewers;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import backgroundImage from "../../../assets/images/backgroundImage.png";
import { CgProfile } from "react-icons/cg";
import LayoutNAv from "../../../components/layoutNAv";
import { fetchVisit } from "../../../features/UserFeature/inviteAction";

const Viewers = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { visits, loading, error } = useSelector((state) => state.invite);

  useEffect(() => {
    if (userId) {
      dispatch(fetchVisit(userId));
    } else {
      console.error("User ID is undefined");
    }
  }, [dispatch, userId]);

  console.log("Fetched visits:", visits);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    const errorMessage =
      typeof error === "object" && error.message ? error.message : error;
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <section
      className="p-8 relative bg-cover bg-no-repeat h-full w-full Nlg:max-w-[40rem] Nlg:mx-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-opacity-50 pointer-events-none"></div>
      <span className="w-full flex justify-center">
        <LayoutNAv />
      </span>
      <h2 className="text-xl font-bold mb-4">
        {visits.length} People have viewed your tree
      </h2>
      <div className="flex flex-row flex-wrap">
        {visits.length > 0 ? (
          visits.map((visit, index) => (
            <div key={index} className="flex flex-row mb-2 w-1/2">
              <div className="mr-2">
                <CgProfile className="w-6 h-6" />
              </div>
              <div>
                <p>User ID: {visit.userId}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No visits recorded</p>
        )}
      </div>
    </section>
  );
};

export default Viewers;
