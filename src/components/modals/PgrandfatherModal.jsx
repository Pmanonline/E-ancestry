// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Spinner from "../../components/tools/Spinner";
// import { resetEditState } from "../../features/UserFeature/EditSlice";
// import { ToastContainer, toast } from "react-toastify";
// import { resetDeleteState } from "../../features/UserFeature/deleteUserSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { RiImageAddFill } from "react-icons/ri";
// import { IoClose } from "react-icons/io5";
// import { AiTwotoneDelete } from "react-icons/ai";
// import {
//   fetchAllDetails,
//   deletePerson,
// } from "../../features/UserFeature/UserAction";
// import PaternalGrandfatherForm from "../../components/Forms/PaternalGrandfatherForm";

// const backendURL =
//   process.env.NODE_ENV !== "production"
//     ? "http://localhost:8080"
//     : "https://gekoda-api.onrender.com";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "90%",
//   maxHeight: "90vh",
//   overflowY: "auto",
//   bgcolor: "white",
//   padding: "10",
//   borderRadius: "4px",
// };

// function ChildModal({ initialState, onSubmit }) {
//   const dispatch = useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const { loading, error, success } = useSelector((state) => state.person);
//   const PGFData = useSelector((state) => state.person.PGF);
//   const { Eloading, Eerror, Esuccess } = useSelector(
//     (state) => state.edit.person
//   );

//   console.log(PGFData);

//   const handleSubmit = (formDataToSubmit) => {
//     onSubmit(formDataToSubmit);
//     handleClose();
//   };
//   useEffect(() => {
//     if (Esuccess) {
//       toast.success("Saved!!");
//       dispatch(resetEditState());
//     }
//   }, [Esuccess]);
//   return (
//     <React.Fragment>
//       <button
//         onClick={handleOpen}
//         className="bg-[#E8F0E9] text-green px-5 rounded-xl border !border-green"
//       >
//         Edit
//       </button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}>
//           <Button onClick={handleClose}>
//             <IoClose size={24} className="text-red-500" />
//           </Button>
//           {loading ? (
//             <Spinner />
//           ) : (
//             <PaternalGrandfatherForm
//               initialState={PGFData}
//               isEdit={true}
//               onSubmit={handleSubmit}
//             />
//           )}
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

// export default ChildModal;

// export const PGFModal = React.forwardRef((props, ref3) => {
//   const [open, setOpen] = React.useState(false);
//   const dispatch = useDispatch();
//   const PGFData = useSelector((state) => state.person.PGF);

//   console.log(PGFData);
//   const [Deleteopen, setDeleteOpen] = React.useState(false);

//   useEffect(() => {
//     dispatch(fetchAllDetails());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log("PGFData", PGFData);
//   }, [PGFData]);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const DeleteOpen = () => {
//     setDeleteOpen(true);
//   };
//   const DeleteClose = () => {
//     setDeleteOpen(false);
//   };

//   useEffect(() => {
//     dispatch(fetchAllDetails());
//   }, [dispatch]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       const fileURL = URL.createObjectURL(file);
//       setImagePreview(fileURL);
//     }
//   };

//   const handleDelete = () => {
//     if (PGFData._id) {
//       dispatch(deletePerson(PGFData._id));
//       setOpen(false);
//     } else {
//       console.error("Invalid person ID");
//     }
//   };
//   const yearOfBirth = PGFData?.DOB ? PGFData.DOB.split("-")[0] : "Unknown";

//   React.useImperativeHandle(ref3, () => ({
//     openModal: handleOpen,
//   }));

//   return (
//     <div className="hidden">
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="parent-modal-title"
//   aria-describedby="parent-modal-description"
// >
//         <Box sx={{ ...style, width: 400 }}>
//           {PGFData ? (
//             <div className="bg-white rounded-lg border-none p-3">
//               <div className="flex justify-between">
//                 <Button onClick={handleClose}>
//                   <IoClose size={24} className="text-red-500" />
//                 </Button>
//                 {/* DELETING MODAL STARTS HERE */}
//                 <Button>
//                   <React.Fragment>
//                     <Button onClick={DeleteOpen}>
//                       <AiTwotoneDelete size={24} className="text-red-300" />
//                     </Button>
//                     <Dialog
//                       open={Deleteopen}
//                       onClose={DeleteClose}
//                       aria-labelledby="alert-dialog-title"
//                       aria-describedby="alert-dialog-description"
//                     >
//                       <DialogTitle id="alert-dialog-title">
//                         Are you sure you want to delete this item?
//                       </DialogTitle>
//                       <DialogContent>
//                         <DialogContentText id="alert-dialog-description">
//                           Confirm delete or cancel
//                         </DialogContentText>
//                       </DialogContent>
//                       <DialogActions>
//                         <Button onClick={DeleteClose}>
//                           <IoClose size={24} className="text-red-500" />
//                         </Button>
//                         <Button onClick={handleDelete}>
//                           <AiTwotoneDelete size={24} className="text-red-300" />
//                         </Button>
//                       </DialogActions>
//                     </Dialog>
//                   </React.Fragment>
//                 </Button>
//                 {/* DELETING MODAL ENDS HERE */}
//               </div>
//               <div className="flex flex-col items-center">
//                 <h2 className="text-lg font-bold mb-2">{PGFData.firstName}</h2>
//                 <div className="relative mb-2">
//                   {PGFData.file ? (
//                     <img
//                       src={PGFData.imageUrl}
//                       alt={PGFData.firstName}
//                       className="w-36 h-36 rounded-lg"
//                     />
//                   ) : (
//                     <div className="w-36 h-36 rounded-lg border flex items-center justify-center">
//                       <RiImageAddFill size={36} />
//                     </div>
//                   )}
//                   <input
//                     type="file"
//                     accept="file/*"
//                     className="absolute inset-0 opacity-0 cursor-pointer"
//                     onChange={handleFileChange}
//                   />
//                 </div>
//                 <p className="mb-2">
//                   Year of Birth:
//                   <span className="font-medium">{yearOfBirth}</span>
//                 </p>
//                 <p className="mb-2">
//                   <span className="font-medium">{PGFData.Lstatus}</span>
//                 </p>
//               </div>
//               <div className="flex justify-between mt-4 space-x-3">
//                 <button className="bg-[#E8F0E9] text-green px-5 rounded-xl border border-green">
//                   Profile
//                 </button>
//                 <button className="bg-[#E8F0E9] text-green px-5 rounded-xl border border-green">
//                   Search
//                 </button>
//                 <ChildModal />
//               </div>
//             </div>
//           ) : (
//             <Spinner />
//           )}
//         </Box>
//       </Modal>
//     </div>
//   );
// });

import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Spinner from "../../components/tools/Spinner";
import { resetEditState } from "../../features/UserFeature/EditSlice";
import { ToastContainer, toast } from "react-toastify";
import { resetDeleteState } from "../../features/UserFeature/deleteUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiImageAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import {
  fetchAllDetails,
  deletePerson,
} from "../../features/UserFeature/UserAction";
import PaternalGrandfatherForm from "../../components/Forms/PaternalGrandfatherForm";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "white",
  padding: "10",
  borderRadius: "4px",
};

function ChildModal({ initialState, onSubmit }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.person);
  const { Eloading, Eerror, Esuccess } = useSelector(
    (state) => state.edit.person
  );
  const PGFData = useSelector((state) => state.person.PGF);
  console.log(PGFData);

  const handleSubmit = (formDataToSubmit) => {
    onSubmit(formDataToSubmit);
    handleClose();
  };

  useEffect(() => {
    if (Esuccess) {
      toast.success("Saved!!");
      dispatch(resetEditState());
      dispatch(fetchAllDetails());
    }
  }, [Esuccess]);

  return (
    <React.Fragment>
      <button
        onClick={handleOpen}
        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white "
      >
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Button onClick={handleClose}>
            <IoClose size={24} className="text-red-500" />
          </Button>
          {loading ? (
            <Spinner />
          ) : (
            <PaternalGrandfatherForm
              initialState={PGFData}
              isEdit={true}
              onSubmit={handleSubmit}
            />
          )}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ChildModal;

export const PGFModal = React.forwardRef((props, ref3) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const PGFData = useSelector((state) => state.person.PGF);

  console.log(PGFData);
  const [Deleteopen, setDeleteOpen] = React.useState(false);

  useEffect(() => {
    dispatch(fetchAllDetails());
  }, [dispatch]);

  useEffect(() => {
    console.log("PGFData", PGFData);
  }, [PGFData]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const DeleteOpen = () => {
    setDeleteOpen(true);
  };
  const DeleteClose = () => {
    setDeleteOpen(false);
  };

  useEffect(() => {
    dispatch(fetchAllDetails());
  }, [dispatch]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImagePreview(fileURL);
    }
  };

  const handleDelete = () => {
    if (PGFData._id) {
      dispatch(deletePerson(PGFData._id));
      setOpen(false);
    } else {
      console.error("Invalid person ID");
    }
  };
  const yearOfBirth = PGFData?.DOB ? PGFData.DOB.split("-")[0] : "Unknown";

  React.useImperativeHandle(ref3, () => ({
    openModal: handleOpen,
  }));
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="hidden">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          {PGFData && Object.keys(PGFData).length > 0 ? (
            <div className="w-full max-w-sm bg-white  rounded-lg shadow   relative">
              <div className="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  onClick={toggleDropdown}
                  className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-200 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span className="sr-only">Open dropdown</span>
                  <svg
                    className="w-5 h-5 text-black hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div
                    id="dropdown"
                    className="absolute top-12 right-0 z-10 text-base list-none divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-500"
                  >
                    <ul className="py-2">
                      <li>
                        <ChildModal
                          initialState={PGFData}
                          onSubmit={(data) => {
                            dispatch(fetchAllDetails());
                          }}
                        />
                      </li>

                      {/* DELETING MODAL STARTS HERE */}
                      <Button>
                        <React.Fragment>
                          <a
                            onClick={DeleteOpen}
                            href="#"
                            className="block px-2 lowercase py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Delete
                          </a>
                          {/* </Button> */}
                          <Dialog
                            open={Deleteopen}
                            onClose={DeleteClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              Are you sure you want to delete this item?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Confirm delete or cancel
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={DeleteClose}>
                                <IoClose size={24} className="text-red-500" />
                              </Button>
                              <Button onClick={handleDelete}>
                                <AiTwotoneDelete
                                  size={24}
                                  className="text-red-300"
                                />
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </React.Fragment>
                      </Button>
                      {/* // DELETING MODAL ENDS HERE */}
                      <li>
                        <a
                          onClick={toggleDropdown}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Close
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center pb-10">
                {PGFData.image ? (
                  <img
                    src={`${backendURL}/${
                      PGFData.image
                    }?${new Date().getTime()}`}
                    alt={PGFData.firstName}
                    className="w-[10rem] h-[10rem] rounded-full"
                  />
                ) : (
                  <FaUserCircle className="w-[10rem] h-[10rem] text-gray-400" />
                )}
                <h5 className="mb-1 text-xl font-medium text-gray-500 ">
                  {PGFData.firstName} {PGFData.lastName}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Born on:
                  <span className=" mx-2 font-medium">{yearOfBirth}</span>
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {PGFData.Lstatus}
                </span>
                <div className="flex mt-4 md:mt-6 gap-5">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1 text-sm font-medium text-center bg-white text-green border border-green focus:ring-2 rounded-xl focus:outline-none focus:ring-green "
                  >
                    Search
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1 text-sm font-medium text-center bg-white text-green border border-green focus:ring-2 rounded-xl focus:outline-none focus:ring-green "
                  >
                    Profile
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-bold mb-2">
                  No Info for this Card
                </h2>
                <p className="mb-4">Please add information to this card.</p>
                <Button
                  href="/layout/paternalGrandfather-form"
                  className="!bg-green !text-white"
                >
                  Add Info
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
});
