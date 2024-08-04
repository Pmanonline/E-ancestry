// import React from "react";
// import backgroundImage from "../../../assets/images/backgroundImage.png";
// import { TreeProfile } from "../../../components/d-button";

// const Viewers = () => {
//   return (
//     <>
//       <section
//         className="p-8 relative bg-cover  bg-no-repeat h-full w-full Nlg:max-w-[40rem] Nlg:mx-auto"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         <h2 className="text-xl font-bold mb-4">
//           35 People have viewed your tree
//         </h2>

//         {/* list */}
//         <div className="flex">
//           <p className="mr-2">
//             <TreeProfile />
//           </p>
//           <p>John brown</p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Viewers;
import React from "react";
import backgroundImage from "../../../assets/images/backgroundImage.png";
import { CgProfile } from "react-icons/cg";

const viewersList = [
  { name: "John Brown" },
  { name: "Jane Smith" },
  { name: "Alice Johnson" },
  { name: "Alice Johnson" },
  { name: "Alice Johnson" },
  { name: "Alice Johnson" },
  // Add more viewers as needed
];

const Viewers = () => {
  return (
    <section
      className="p-8 relative bg-cover bg-no-repeat h-full w-full Nlg:max-w-[40rem] Nlg:mx-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h2 className="text-xl font-bold mb-4">
        {viewersList.length} People have viewed your tree
      </h2>

      {/* list */}
      <div className="flex flex-row flex-wrap">
        {viewersList.map((viewer, index) => (
          <div key={index} className="flex flex-row mb-2 w-1/2">
            <div className="mr-2">
              <CgProfile className="w-6 h-6" />
            </div>
            <div>
              <p>{viewer.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Viewers;
