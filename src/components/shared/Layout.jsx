// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./sidebar";

// export default function Layout() {
//   return (
//     <>
//       <div className="flex flex-row   h-screen w-screen   overflow-x-auto ">
//         <Sidebar />
//         <div className="w-screen">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./sidebar";
// import Header from "./Header";

// export default function Layout() {
//   return (
//     <div className="bg-neutral-100 h-screen w-screen overflow-hidde flex flex-row">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <Header />
//         <div className="flex-1 p-4 min-h-0 overflow-auto">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen flex flex-row">
      {/* Sidebar */}
      <div className="flex-shrink-0 overflow-y-auto">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <div className="flex-1 p-4 min-h-0 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
