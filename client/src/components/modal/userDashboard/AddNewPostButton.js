import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

const AddNewPostButton = ({ handlePostModal, NavBarPostButton }) => {
  return (
    <>
      {NavBarPostButton ? (
        <div className="flex justify-center items-center mt-5 mb-5 ml-5">
          <button
            onClick={() => handlePostModal(true)}
            className="bg-gray-400 focus:outline-none   rounded-lg"
          >
            <div className="shadow-lg bg-white rounded-md">
              <PlusIcon className="h-8 w-8 text-gray-600" />
            </div>
          </button>
        </div>
      ) : (
        <div className="flex-col ">
          {/* <div className="flex justify-center items-center text-lg font-bold">Add New Post </div> */}
          <div>
            <div
              className="flex justify-center items-center  bg-white shadow-md rounded-xl mx-[10vh] mt-5"
              
            >
              <div onClick={() => handlePostModal(true)} className="flex justify-center items-center cursor-pointer border-2 border-gray-400 px-5 py-1 rounded-md">
                <p>Create a Post</p>
              </div>

              <div className="flex justify-center items-center mt-5 mb-5 ml-5">
                <button
                  onClick={()=>handlePostModal(true)}
                  className="bg-gray-400 focus:outline-none   rounded-lg"
                >
                  <div className="shadow-lg bg-white rounded-md">
                    <PlusIcon className="h-8 w-8 text-gray-600" />
                  </div>
                </button>
              </div>
            </div>
            {/* Posted Contents */}
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewPostButton;
