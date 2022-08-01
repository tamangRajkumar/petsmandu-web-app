import React, { useState } from "react";
import { Avatar } from "../../../assets/images";
import { PencilIcon } from "@heroicons/react/solid";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import { useSelector } from "react-redux";
import moment from "moment";
import BackgroundGray from "../../modal/userDashboard/backgroundGray";

const UserProfile = ({
  fName,
  lName,
  userEmail,
  handleProfileImage,
  createdAt,
  mobileView,
}) => {
  // get user image url from store
  const userProfileImageUrlfromStore = useSelector(
    (state) => state.updateUserProfile.userProfileData.url
  );

  // console.log(userProfileImageUrlfromStore);

  return (
    <>
      {mobileView && <BackgroundGray dashboardTrue={true} />}

      <div
        className={
          mobileView
            ? "  absolute -left-10  z-50 -top-52 lg:flex pt-10 h-[100vh] lg:sticky justify-center items-center    overflow-y-scroll w-96  bg-gray-50    "
            : "  hidden lg:flex   lg:sticky lg:top-32 justify-center items-center    overflow-y-scroll w-96 h-screen  bg-gray-50    "
        }
      >
        {/* Profile Update Modal */}

        <div className="mt-8   ">
          {/* Edit Post button and Icon */}
          <div className=" absolute    top-20 right-28 ">
            <label
              onClick={() => handleProfileImage(true)}
              className=" bg-gray-100 cursor-pointer rounded-full  justify-center items-center"
            >
              {/* <input
            type="file"
            accept="images/*"
            hidden
            // value={postSubmitData.image}
            // onChange={handleImage}
          /> */}

              <PencilIcon className="h-8 w-8  text-gray-400 bg-white shadow-md p-1.5 rounded-full " />
            </label>
          </div>

          {/* User Profile Image */}
          {userProfileImageUrlfromStore ? (
            <div className="flex   justify-center items-center  object-contain ">
              <img
                style={{ borderRadius: "100%" }}
                src={userProfileImageUrlfromStore}
                alt=""
                className="h-36 w-36 shadow-lg"
              />
            </div>
          ) : (
            <div className=" pb-5 mt-5  border-b-1 border-gray-200  mx-10  ">
              <img src={Avatar} alt="" className="h-32  m-auto rounded-full" />
            </div>
          )}

          <div className="mt-4  space-y-3 pb-60  ml-5 text-center">
            <div className="flex space-x-2  justify-center items-center">
              <h1 className="text-lg font-semibold text-gray-500">{fName} </h1>

              <h1 className="text-lg font-semibold text-gray-500">{lName}</h1>
            </div>
            <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
            <p className="text-md font-semibold text-gray-500">
              Member Since: {moment(createdAt).calendar()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
