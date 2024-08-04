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
const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

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

  const formRef = useRef(); // Create a ref for the form
  const fileInputRef = useRef();

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
            {isEdit ? (
              <div className="w-full flex justify-center lg:justify-start">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
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
            ) : (
              ""
            )}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="submit"
                className="border border-green w-full lg:w-[70%] flex items-center bg-green-500 bg-white px-4 py-2 transition ease-in-out duration-200 transform hover:scale-105 rounded-3xl"
              >
                {loading || Eloading ? (
                  <Spinner />
                ) : (
                  <span className="mx-auto text-green">
                    {isEdit ? (
                      "Update"
                    ) : (
                      <>
                        <span className="flex items-center justify-center space-x-2">
                          <span>Click here to continue </span>
                          <DirectionButton1 />
                        </span>
                      </>
                    )}
                  </span>
                )}
              </button>
            </div>
            <div className="w-full items-center flex justify-start">
              {error && <Error>{error}</Error>}
              {Eerror && <Error>{Eerror}</Error>}
            </div>
            {/* Next button */}
            {isEdit ? (
              ""
            ) : (
              <div className="w-full text-end items-end flex justify-end">
                <Link
                  to="/layout/mothers-form"
                  className="w-full flex justify-start font-medium"
                >
                  <button className="underline w-full flex items-center bg-green-500 px-4 py-2 transition ease-in-out duration-200 transform hover:scale-105 rounded-3xl">
                    Next form
                  </button>
                </Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default PersonalForm;
