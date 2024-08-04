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
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import {
  fetchAllDetails,
  deletePerson,
  editPerson,
} from "../../features/UserFeature/UserAction";
import PersonalForm from "../../components/Forms/personalForm";
import { handleImageUpload } from "../../components/tools/uploadUtils";

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
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const personData = useSelector((state) => state.person.person);
  const { loading, error, success } = useSelector((state) => state.person);
  const { Esuccess } = useSelector((state) => state.edit.person);

  useEffect(() => {
    if (Esuccess) {
      toast.success("Saved!!");
      dispatch(resetEditState());
      dispatch(fetchAllDetails());
    }
  }, [Esuccess, dispatch]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (formDataToSubmit) => {
    onSubmit(formDataToSubmit);
    handleClose();
  };

  return (
    <>
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
            <PersonalForm
              initialState={personData}
              isEdit={true}
              onSubmit={handleSubmit}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}

export const NestedModal = ({ handleSubmit, closeModal, reference }) => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [Deleteopen, setDeleteOpen] = React.useState(false);
  const dispatch = useDispatch();
  const personData = useSelector((state) => state.person.person);
  const { Dloading, Derror, Dsuccess } = useSelector(
    (state) => state.delete.person
  );
  const backendURL =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8080"
      : "https://gekoda-api.onrender.com";

  useEffect(() => {
    dispatch(fetchAllDetails());
  }, [dispatch]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImagePreview(fileURL);
    }
  };

  const handleDelete = () => {
    toast.success("Unable to delete! Modify Instead!");
  };

  useEffect(() => {
    if (Dsuccess) {
      toast.success("Deleted!!");
      dispatch(fetchAllDetails());
      dispatch(resetDeleteState());
    }
  }, [Dsuccess, dispatch]);

  const yearOfBirth = personData?.DOB
    ? personData.DOB.split("-")[0]
    : "Unknown";

  const handleUpload = async () => {
    if (!selectedFile || !personData._id) {
      console.log("No file or personId");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("personId", personData._id);

    const success = await handleImageUpload(formData, dispatch);
    if (success) {
      setImagePreview(null);
      setSelectedFile(null);
      dispatch(fetchAllDetails());
    }
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const DeleteOpen = () => {
    setDeleteOpen(true);
  };
  const DeleteClose = () => {
    setDeleteOpen(false);
  };

  return (
    <div className="relative">
      <div className="hidden">
        <Button ref={reference} onClick={handleOpen}></Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          {personData && Object.keys(personData).length > 0 ? (
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
                          initialState={personData}
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
                {personData.image ? (
                  // <img
                  //   src={`${backendURL}/${personData.image}`}
                  //   alt={personData.firstName}
                  //   className="w-[10rem] h-[10rem] rounded-full"
                  // />
                  <img
                    src={`${backendURL}/${
                      personData.image
                    }?${new Date().getTime()}`}
                    alt={personData.firstName}
                    className="w-[10rem] h-[10rem] rounded-full"
                  />
                ) : (
                  <FaUserCircle className="w-[10rem] h-[10rem] text-gray-400" />
                )}
                <h5 className="mb-1 text-xl font-medium text-gray-500 ">
                  {personData.firstName} {personData.lastName}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Born on:
                  <span className=" mx-2 font-medium">{yearOfBirth}</span>
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {personData.gender}
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
                  href="/layout/personal-form"
                  className="!bg-green !text-white"
                >
                  Add Info
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Modal>

      <Dialog open={Dsuccess} onClose={() => dispatch(resetDeleteState())}>
        <DialogTitle>{"Unable to delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {"Please try again or modify instead."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(resetDeleteState())} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
