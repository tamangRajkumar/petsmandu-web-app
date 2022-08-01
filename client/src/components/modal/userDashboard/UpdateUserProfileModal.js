import React, {  useState } from "react";
import { XIcon, TrashIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/solid";
import {Avatar} from "../../../assets/images";
import BackgroundGray from "./backgroundGray";
import { uploadImage, updateUserProfile } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { userProfileUpdate } from "../../../redux/actions/userProfileUpdate";
import { toast } from "react-toastify";
import { authUser } from "../../../redux/reducers/authUser";

const UpdateUserProfileModal = ({
  dashboardTrue,
  handleProfileImage,
}) => {
  const postEditModalDataFound = useSelector(
    (state) => state.postEditModalPreData.post
  );

  const postEditModalData = useSelector(
    (state) => state.postEditModalPreData.postEditData
  );
  // console.log(postEditModalDataFound);

  // get user profile image url from store
  const userProfileImageUrlfromStore = useSelector(
    (state) => state.updateUserProfile.userProfileData.url
  );
  // console.log(userProfileImageUrlfromStore);

  const [postSubmitData, setPostSubmitData] = useState({
    description: "",
    image: {},
  });

  const history = useHistory();
  const dispatch = useDispatch();

  // get token from state
  const token = useSelector((state) => state.authUser.currentUser.token);
  // console.log(token);

  // Handle Image
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
    try {
      const { data } = await uploadImage(formData);
      console.log("Image Details from Cloudinary=> ", data);
      setPostSubmitData({ ...postSubmitData, image: data });
      // console.log(postSubmitData.image);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  // Handle Image Uploaded
  const handleImageUploaded = (e) => {
    e.preventDefault();
    setPostSubmitData({ ...postSubmitData, image: {} });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(postId);

    try {
      const { data } = await updateUserProfile(postSubmitData, token);

      if (data.profileImage == "true") {
        handleProfileImage(false);
        const userProfileImageData = data.userProfileImageData;
        console.log(userProfileImageData);
        // console.log(data.userProfileImageData);
        toast.success("Your profile image is updated");

        // Update Redux User Profile Store
        dispatch(userProfileUpdate(userProfileImageData));
        dispatch(authUser(userProfileImageData))
      }
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  return (
    <div className="z-50">
      {/* Post Form Start */}
      <BackgroundGray dashboardTrue={dashboardTrue} />
      <div
        style={{ width: "100vh" }}
        className="fixed ml-auto mr-auto left-0 right-0 bg-white  top-30 z-50   rounded-lg"
      >
        <div className="flex  justify-between  mx-10 mt-3">
          <div className="mt-2 text-xl font-semibold ">Edit Profile</div>

          <div className="">
            <button
              onClick={() => handleProfileImage(false)}
              className="focus:outline-none"
            >
              <XIcon className="h-8 w-8 text-gray-400 bg-white shadow-md p-1 rounded-full " />
            </button>
          </div>
        </div>
        {/* <div className="mt-5 mx-8 ">
          <textarea
            type="text"
            className=" h-28 w-full focus:outline-none rounded-xl p-4 border-2 border-gray-300 "
            placeholder="Write descriptions............"
            value={postSubmitData.description}
            onChange={(e) =>
              setPostSubmitData({
                ...postSubmitData,
                description: e.target.value,
              })
            }
          ></textarea>
        </div> */}

        <div className="flex justify-between ml-8 mt-8 items-center mr-10">
          <div className="ml-2">
            <label className="flex flex-col shadow-md bg-gray-100 cursor-pointer rounded-md h-24 w-32  justify-center items-center">
              <input
                type="file"
                accept="images/*"
                hidden
                // value={postSubmitData.image}
                onChange={handleImage}
              />

              <PlusIcon className="h-12 w-12 text-gray-500 " />
              <p className="text-base text-gray-500 font-normal">
                Upload Profile
              </p>
            </label>
          </div>
          <div className="flex-col justify-center items-center text-center">
            {/* Delete Image Icon */}
            {postSubmitData.image && postSubmitData.image.url ? (
              <div className="flex justify-end ">
                <button
                  onClick={handleImageUploaded}
                  className="rounded-full shadow-md p-2 mb-2 focus:outline-none"
                >
                  <TrashIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ) : (
              ""
            )}

            {/* image Preview */}
            {postSubmitData.image.url && postSubmitData.image ? (
              <img
                src={postSubmitData.image.url}
                alt=""
                className="h-36 w-36 rounded-full"
              />
            ) : userProfileImageUrlfromStore ? (
              <div>
                <img
                  src={userProfileImageUrlfromStore}
                  alt=""
                  className="h-36 w-36 rounded-full"
                />
              </div>
            ) : (
              <div>
                <img src={Avatar} alt="" className="h-40 w-40" />{" "}
              </div>
            )}

            <p className="font-semibold text-base text-gray-500 mt-2">
              Profile Preview
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-0.5 ">
          <button
            type="submit"
            onClick={handleUpdateProfile}
            className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-6   py-3 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* Post Form  End*/}
    </div>
  );
};

export default UpdateUserProfileModal;
