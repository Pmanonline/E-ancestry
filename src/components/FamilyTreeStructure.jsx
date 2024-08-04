import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { TreeProfile } from "./d-button";
import { useLocation } from "react-router-dom";
import { RiImageAddFill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { NestedModal } from "../components/modals/personModal";
import { NestedModal2 } from "../components/modals/motherModal";
import { FatherModal } from "../components/modals/fatherModal";
import { PGFModal } from "../components/modals/PgrandfatherModal";
import { PGMModal } from "../components/modals/PgrandMotherModal";
import { MGFModal } from "../components/modals/MgrandFatherModal";
import { MGMModal } from "../components/modals/MgrandMotherModal";

Modal.setAppElement("#root");

export const FamilyTreeStructure = () => {
  const location = useLocation();
  const activeRoutes = [
    "/layout/personal-form",
    "/layout/mothers-form",
    "/layout/fathers-form",
    "/layout/paternalGrandmother-form",
    "/layout/paternalGrandfather-form",
    "/layout/maternalGrandmother-form",
    "/layout/maternalGrandfather-form",
  ];
  const isActive = (route) => location.pathname === route;
  const modalRef = useRef();
  const motherModalRef = useRef();
  const fatherModalRef = useRef();
  const PGFModalRef = useRef();
  const PGMModalRef = useRef();
  const MGFModalRef = useRef();
  const MGMModalRef = useRef();

  const handleModalRef = () => {
    if (modalRef.current) {
      modalRef.current.click();
    }
  };

  const openMotherModal = () => {
    motherModalRef.current.openModal();
  };
  const opeFatherModal = () => {
    fatherModalRef.current.openModal();
  };
  const openPGFModal = () => {
    PGFModalRef.current.openModal();
  };
  const openPGMModal = () => {
    PGMModalRef.current.openModal();
  };
  const openMGFModal = () => {
    MGFModalRef.current.openModal();
  };
  const openMGMModal = () => {
    MGMModalRef.current.openModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id) => {
    setIsModalOpen(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={` ${
          openModal ? "cursor-not-allowed " : ""
        } hidden lg:flex flex-col items-center w-full max-w-4xl mx-auto overflow-hidden`}
      >
        {/* Me */}
        <div
          onClick={() => openModal("self")}
          className="relative flex flex-col items-center space-y-4"
        >
          <div
            className={`card mb-4 cursor-pointer ${
              isActive("/layout/personal-form")
                ? "bg-[#A9A8A8]"
                : "bg-[#E8F3E7]"
            } border border-gray-300 p-6 rounded-lg shadow-md text-center w-full`}
            onClick={handleModalRef}
          >
            <p className="flex justify-center mb-5">
              <TreeProfile />
            </p>
            <p className="text-xs whitespace-nowrap">My info</p>
          </div>
          <div className="line absolute w-0.5 h-[5.2rem] top-[6rem] bg-gray-300"></div>
          <NestedModal
            reference={modalRef}
            isOpen={isModalOpen}
            onRequestClose={closeModal}
          />
        </div>
        {/* Parents */}
        <div className="relative flex flex-col items-center mb-8 w-[70%]">
          <div className="flex justify-between w-full mb-4 relative">
            <div
              className={`card mb-4 cursor-pointer ${
                isActive("/layout/fathers-form")
                  ? "bg-[#A9A8A8]"
                  : "bg-[#E8F3E7]"
              } border border-gray-300 p-6 rounded-lg shadow-md text-center w-[6rem]`}
              onClick={opeFatherModal}
            >
              <p className="flex justify-center mb-5">
                <TreeProfile />
              </p>
              <p className="text-xs whitespace-nowrap">Father</p>
            </div>
            <FatherModal ref={fatherModalRef} />
            <div
              className={`card mb-4 cursor-pointer  relative ${
                isActive("/layout/mothers-form")
                  ? "bg-[#A9A8A8]"
                  : "bg-[#E8F3E7]"
              } ${
                isModalOpen ? "z-0" : "z-50"
              } border border-gray-300 p-6 rounded-lg shadow-md text-center w-[6rem]`}
              onClick={openMotherModal}
            >
              <p className="flex justify-center mb-5">
                <TreeProfile />
              </p>
              <p className="text-xs whitespace-nowrap">Mother</p>
            </div>
            <NestedModal2 ref={motherModalRef} />
            <div
              className={`line w-[59%] h-0.5  ${
                isModalOpen ? "z-0" : "z-10"
              } bg-gray-300 absolute top-1/2 left-[6rem]`}
            ></div>
          </div>
          <div className="right-[3rem] top-[7rem] absolute line w-0.5 h-[8.5rem] bg-gray-300"></div>
          <div className="left-[3rem] top-[7rem] absolute line w-0.5 h-[8.5rem] bg-gray-300"></div>
        </div>
        {/* Grandparents */}
        <div className="relative flex justify-between w-full flex-wrap">
          <div className="relative flex flex-col items-center">
            {/* PGF */}
            <div
              className={`card relative  ${
                isModalOpen ? "z-0" : "z-50"
              } mb-4 cursor-pointer ${
                isActive("/layout/paternalGrandfather-form")
                  ? "bg-[#A9A8A8]"
                  : "bg-[#E8F3E7]"
              } border border-gray-300 p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
              onClick={openPGFModal}
            >
              <p className="flex justify-center mb-5">
                <TreeProfile />
              </p>
              <p className="text-xs text-center flex justify-center">
                Grandfather <br />
                (Paternal)
              </p>
            </div>
            <PGFModal ref={PGFModalRef} />
            {/* PGF */}
            <div
              className={`line-horizontal w-16 h-0.5   ${
                isModalOpen ? "z-0" : "z-10"
              } bg-gray-300 absolute bottom-[4.5rem] left-full`}
            ></div>
          </div>
          <div className="relative flex flex-col items-center">
            <div
              className={`card mb-4 cursor-pointer relative ${
                isActive("/layout/paternalGrandmother-form")
                  ? "bg-[#A9A8A8]"
                  : "bg-[#E8F3E7]"
              } ${
                isModalOpen ? "z-0" : "z-50"
              }  border border-gray-300 relative  p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
              onClick={openPGMModal}
            >
              <p className="flex justify-center mb-5">
                <TreeProfile />
              </p>
              <p className="text-xs text-center flex justify-center">
                Grandmother <br />
                (Paternal)
              </p>
            </div>
            <PGMModal ref={PGMModalRef} />
            <div
              className={`line-horizontal w-16 h-0.5  ${
                isModalOpen ? "z-0" : "z-20"
              } bg-gray-300 absolute bottom-[4.5rem] right-full`}
            ></div>
          </div>
          <div className="relative flex flex-col items-center">
            <div
              className={`card mb-4 cursor-pointer ${
                isActive("/layout/maternalGrandfather-form")
                  ? "bg-[#A9A8A8]"
                  : "bg-[#E8F3E7]"
              } border border-gray-300  ${
                isModalOpen ? "z-0" : "z-50"
              } p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
              onClick={openMGFModal}
            >
              <p className="flex justify-center mb-5">
                <TreeProfile />
              </p>
              <p className="text-xs text-center flex justify-center">
                Grandfather <br />
                (Maternal)
              </p>
            </div>
            <MGFModal ref={MGFModalRef} />
            <div className="line-horizontal w-16 h-0.5 bg-gray-300 absolute bottom-[4.5rem] left-full"></div>
          </div>
          <div className="relative flex flex-col items-center">
            <div
              className={`card mb-4 cursor-pointer ${
                isActive("/layout/maternalGrandmother-form")
                  ? "bg-[#A9A8A8]"
                  : "bg-[#E8F3E7]"
              } border border-gray-300 p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
              onClick={openMGMModal}
            >
              <p className="flex justify-center mb-5">
                <TreeProfile />
              </p>
              <p className="text-xs text-center flex justify-center">
                Grandmother <br />
                (Maternal)
              </p>
            </div>
            <MGMModal ref={MGMModalRef} />
            <div
              className={`line-horizontal w-16 h-0.5   ${
                isModalOpen ? "z-0" : "z-20"
              }  bg-gray-300 absolute bottom-[4.5rem] right-full`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

// import React, { useState, useEffect, useRef } from "react";
// import Modal from "react-modal";
// import { TreeProfile } from "./d-button";
// import { useLocation } from "react-router-dom";
// import { RiImageAddFill } from "react-icons/ri";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { NestedModal } from "../components/modals/personModal";
// import { NestedModal2 } from "../components/modals/motherModal";

// Modal.setAppElement("#root");

// export const FamilyTreeStructure = () => {
//   const location = useLocation();
//   const activeRoutes = [
//     "/layout/personal-form",
//     "/layout/mothers-form",
//     "/layout/fathers-form",
//     "/layout/paternalGrandmother-form",
//     "/layout/paternalGrandfather-form",
//     "/layout/maternalGrandmother-form",
//     "/layout/maternalGrandfather-form",
//   ];
//   const isActive = (route) => location.pathname === route;
//   const modalRef = useRef();
//   const motherModalRef = useRef();

//   const handleModalRef = () => {
//     if (modalRef.current) {
//       modalRef.current.click();
//     }
//   };

//   const openMotherModal = () => {
//     motherModalRef.current.openModal();
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (id) => {
//     setIsModalOpen(id);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div
//         className={` ${
//           isModalOpen ? "cursor-not-allowed " : ""
//         } hidden lg:flex flex-col items-center w-full max-w-4xl mx-auto overflow-hidden`}
//       >
//         {/* Me */}
//         <div
//           onClick={() => openModal("self")}
//           className="relative flex flex-col items-center space-y-4"
//         >
//           <div
//             className={`card mb-4 cursor-pointer ${
//               isActive("/layout/personal-form")
//                 ? "bg-[#A9A8A8]"
//                 : "bg-[#E8F3E7]"
//             } border border-gray-300 p-6 rounded-lg shadow-md text-center w-full`}
//             onClick={handleModalRef}
//           >
//             <p className="flex justify-center mb-5">
//               <TreeProfile />
//             </p>
//             <p className="text-xs whitespace-nowrap">My info</p>
//           </div>
//           <div className="line absolute w-0.5 h-[5.2rem] top-[6rem] bg-gray-300"></div>
//           <NestedModal
//             reference={modalRef}
//             isOpen={isModalOpen}
//             onRequestClose={closeModal}
//           />
//         </div>

//         {/* Parents */}
//         <div className="relative flex flex-col items-center mb-8 w-[70%]">
//           <div className="flex justify-between w-full mb-4 relative">
//             <div
//               className={`card mb-8 cursor-pointer ${
//                 isActive("/layout/fathers-form")
//                   ? "bg-[#A9A8A8]"
//                   : "bg-[#E8F3E7]"
//               } border border-gray-300 p-5 rounded-lg shadow-md text-center w-[6rem]`}
//               onClick={() => openModal(profiles[1])}
//             >
//               <p className="flex justify-center mb-5">
//                 <TreeProfile />
//               </p>
//               <p className="text-xs whitespace-nowrap">Father</p>
//             </div>

//             <div
//               onClick={() => openModal("mother")}
//               className="relative flex flex-col items-center space-y-4"
//             >
//               <div
//                 className={`card mb-4 cursor-pointer ${
//                   isActive("/layout/personal-form")
//                     ? "bg-[#A9A8A8]"
//                     : "bg-[#E8F3E7]"
//                 } border border-gray-300 p-6 rounded-lg shadow-md text-center w-full`}
//                 onClick={openMotherModal}
//               >
//                 <p className="flex justify-center mb-5">
//                   <TreeProfile />
//                 </p>
//                 <p className="text-xs whitespace-nowrap">Mother</p>
//               </div>

//               <NestedModal2 ref={motherModalRef} />
//             </div>
//             <div
//               className={`line w-[59%] h-0.5  ${
//                 isModalOpen ? "z-0" : "z-10"
//               } bg-gray-300 absolute top-1/2 left-[6rem]`}
//             ></div>
//           </div>
//           <div className="right-[3rem] top-[7rem] absolute line w-0.5 h-[8.5rem] bg-gray-300"></div>
//           <div className="left-[3rem] top-[7rem] absolute line w-0.5 h-[8.5rem] bg-gray-300"></div>
//         </div>

//         {/* Grandparents */}
//         <div className="relative flex justify-between w-full flex-wrap">
//           <div className="relative flex flex-col items-center">
//             <div
//               className={`card relative  ${
//                 isModalOpen ? "z-0" : "z-50"
//               } mb-4 cursor-pointer ${
//                 isActive("/layout/paternalGrandfather-form")
//                   ? "bg-[#A9A8A8]"
//                   : "bg-[#E8F3E7]"
//               } border border-gray-300 p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
//               onClick={() => openModal(profiles[3])}
//             >
//               <p className="flex justify-center mb-5">
//                 <TreeProfile />
//               </p>
//               <p className="text-xs text-center flex justify-center">
//                 Grandfather <br />
//                 (Paternal)
//               </p>
//             </div>
//             <div
//               className={`line-horizontal w-16 h-0.5   ${
//                 isModalOpen ? "z-0" : "z-10"
//               } bg-gray-300 absolute bottom-[4.5rem] left-full`}
//             ></div>
//           </div>
//           <div className="relative flex flex-col items-center">
//             <div
//               className={`card mb-4 cursor-pointer relative ${
//                 isActive("/layout/paternalGrandmother-form")
//                   ? "bg-[#A9A8A8]"
//                   : "bg-[#E8F3E7]"
//               } ${
//                 isModalOpen ? "z-0" : "z-50"
//               }  border border-gray-300 relative  p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
//               onClick={() => openModal(profiles[4])}
//             >
//               <p className="flex justify-center mb-5">
//                 <TreeProfile />
//               </p>
//               <p className="text-xs text-center flex justify-center">
//                 Grandmother <br />
//                 (Paternal)
//               </p>
//             </div>
//             <div
//               className={`line-horizontal w-16 h-0.5  ${
//                 isModalOpen ? "z-0" : "z-20"
//               } bg-gray-300 absolute bottom-[4.5rem] right-full`}
//             ></div>
//           </div>
//           <div className="relative flex flex-col items-center">
//             <div
//               className={`card mb-4 cursor-pointer ${
//                 isActive("/layout/maternalGrandfather-form")
//                   ? "bg-[#A9A8A8]"
//                   : "bg-[#E8F3E7]"
//               } border border-gray-300  ${
//                 isModalOpen ? "z-0" : "z-50"
//               } p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
//               onClick={() => openModal(profiles[5])}
//             >
//               <p className="flex justify-center mb-5">
//                 <TreeProfile />
//               </p>
//               <p className="text-xs text-center flex justify-center">
//                 Grandfather <br />
//                 (Maternal)
//               </p>
//             </div>
//             <div className="line-horizontal w-16 h-0.5 bg-gray-300 absolute bottom-[4.5rem] left-full"></div>
//           </div>
//           <div className="relative flex flex-col items-center">
//             <div
//               className={`card mb-4 cursor-pointer ${
//                 isActive("/layout/maternalGrandmother-form")
//                   ? "bg-[#A9A8A8]"
//                   : "bg-[#E8F3E7]"
//               } border border-gray-300 p-6 rounded-lg shadow-md text-center max-w-[7rem]`}
//               onClick={() => openModal(profiles[6])}
//             >
//               <p className="flex justify-center mb-5">
//                 <TreeProfile />
//               </p>
//               <p className="text-xs text-center flex justify-center">
//                 Grandmother <br />
//                 (Maternal)
//               </p>
//             </div>
//             <div
//               className={`line-horizontal w-16 h-0.5   ${
//                 isModalOpen ? "z-0" : "z-20"
//               }  bg-gray-300 absolute bottom-[4.5rem] right-full`}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
