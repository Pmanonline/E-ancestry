// import React from "react";
// import { useParams } from "react-router-dom";
// import { FamilyTreeStructure } from "../components/FamilyTreeStructure";
// import AboutImageTree2 from "../assets/images/AboutImageTree3.png";

// const backendURL =
//   process.env.NODE_ENV !== "production"
//     ? "http://localhost:8080"
//     : "https://gekoda-api.onrender.com";

// export const ViewTree = () => {
//   const { userId } = useParams();
//   useEffect(() => {
//     if (userId) {
//       axios
//         .post(`${backendURL}/api/record-visit`, { userId })
//         .then((response) => {
//           console.log("Visit recorded:", response.data);
//         })
//         .catch((error) => {
//           console.error("Error recording visit:", error);
//         });
//     }
//   }, [userId]);

//   return (
//     <div className="view-tree-page min-h-screen p-4 ">
//       <div className="flex justify-center mb-4">
//         <img
//           src={AboutImageTree2}
//           alt="Family tree illustration"
//           className="w-24 h-24 object-cover"
//         />
//       </div>
//       <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
//         Family Tree
//       </h1>

//       {userId ? (
//         <div className="relative w-full h-full max-w-6xl mx-auto overflow-x-auto overflow-y-auto">
//           <div className="min-w-[40rem] max-w-[50rem] w-full mx-auto">
//             <FamilyTreeStructure userId={userId} />
//           </div>
//         </div>
//       ) : (
//         <p className="text-center text-red-600">User ID not found</p>
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FamilyTreeStructure } from "../components/FamilyTreeStructure";
import AboutImageTree2 from "../assets/images/AboutImageTree3.png";
import Spinner from "../components/tools/Spinner";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

export const ViewTree = () => {
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      axios
        .post(`${backendURL}/api/record-visit`, { userId })
        .then((response) => {
          console.log("Visit recorded:", response.data);
        })
        .catch((error) => {
          console.error("Error recording visit:", error);
          setError("Failed to record visit.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId]);

  return (
    <div className="view-tree-page min-h-screen p-4 bg-gray-100">
      <div className="flex justify-center mb-6">
        <img
          src={AboutImageTree2}
          alt="Family tree illustration"
          className="w-24 h-24 object-cover"
        />
      </div>
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-900">
        Family Tree
      </h1>

      {loading ? (
        <div className="text-center text-gray-600">
          <Spinner />
        </div>
      ) : error ? (
        <div className="text-center text-red-600">{error}</div>
      ) : userId ? (
        <div className="relative w-full h-full max-w-6xl mx-auto overflow-x-auto overflow-y-auto">
          <div className="min-w-[40rem] max-w-[50rem] w-full mx-auto">
            <FamilyTreeStructure userId={userId} />
          </div>
        </div>
      ) : (
        <p className="text-center text-red-600">User ID not found</p>
      )}
    </div>
  );
};
