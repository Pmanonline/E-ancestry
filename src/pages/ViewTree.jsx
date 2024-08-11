import React from "react";
import { useParams } from "react-router-dom";
import { FamilyTreeStructure } from "../components/FamilyTreeStructure";
import AboutImageTree2 from "../assets/images/AboutImageTree3.png";

export const ViewTree = () => {
  const { userId } = useParams(); // Retrieve the userId from the URL parameters

  return (
    <div className="view-tree-page">
      <div className="flex justify-center">
        <img src={AboutImageTree2} sizes="2" className="w-20 h-20" alt="tree" />
      </div>
      <h1 className="text-center text-xl font-bold  ">Family Tree</h1>

      {userId ? (
        <div className="relative w-full h-full max-w-5xl mx-auto overflow-x-auto overflow-y-auto">
          <div className="min-w-[40rem] max-w-[50rem] w-full mx-auto">
            <FamilyTreeStructure userId={userId} />
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">User ID not found</p>
      )}
    </div>
  );
};
