// import React from "react";

// export default function LayoutNAv() {
//   return (
//     <div className="flex lg:justify-end my-5">
//       <nav className="text-black border border-green lg:rounded-l-full Nlg:rounded-r-full gap-5 lg:max-w-[95%] text-end">
//         <div className="flex justify-between">
//           <div className="flex flex-wrap">
//             <a
//               href="/layout/Invites"
//               className="hover:text-green hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
//             >
//               Invites
//             </a>
//             <a
//               href="/layout/viewers"
//               className="hover:text-green hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
//             >
//               Viewers
//             </a>
//             <a
//               href="/layout/find-in-tree"
//               className="hover:text-green hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
//             >
//               Find in Tree
//             </a>
//             <a
//               href="/layout/custom-tree"
//               className="hover:text-green hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
//             >
//               Custom Tree
//             </a>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React from "react";
import { useLocation } from "react-router-dom";

export default function LayoutNAv() {
  const location = useLocation();

  // Determine if the current path matches any of the specified routes
  const isActive =
    location.pathname === "/layout/Invites" ||
    location.pathname === "/layout/viewers" ||
    location.pathname === "/layout/find-in-tree" ||
    location.pathname === "/layout/custom-tree";

  return (
    <div className="flex lg:justify-end mb-12 overflow-hidden">
      <nav className="text-black border border-green lg:rounded-l-full  gap-5 lg:max-w-[95%] text-end">
        <div className="flex justify-between">
          <div className="flex flex-wrap">
            {isActive && (
              <a
                href="/layout/personal-form"
                className="hover:text-green Nlg:text-xs hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
              >
                Form
              </a>
            )}
            <a
              href="/layout/Invites"
              className="hover:text-green Nlg:text-xs hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
            >
              Invites
            </a>
            <a
              href="/layout/viewers"
              className="hover:text-green Nlg:text-xs hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
            >
              Viewers
            </a>
            <a
              href="/layout/find-in-tree"
              className="hover:text-green Nlg:text-xs hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
            >
              Find in Tree
            </a>
            <a
              href="#"
              className="hover:text-green Nlg:text-xs hover:underline px-3 py-2 rounded-md transition ease-in-out duration-200 transform hover:scale-105"
            >
              Custom Tree
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
