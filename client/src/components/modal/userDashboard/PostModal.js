import React, { useEffect, useState } from "react";
import { XIcon, TrashIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/solid";
import {Avatar} from "../../../assets/images";
import BackgroundGray from "./backgroundGray";
import {
  uploadImage,
  postSubmit,
  fetchPostToEdit,
  updatePost,
} from "../../../api";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const PostModal = ({
  handlePostModal,
  dashboardTrue,
  getUserPosts,
  editPost,
  postId,
}) => {
  const postEditModalDataFound = useSelector(
    (state) => state.postEditModalPreData.post
  );

  const postEditModalData = useSelector(
    (state) => state.postEditModalPreData.postEditData
  );
  // console.log(postEditModalDataFound);

  const [postSubmitData, setPostSubmitData] = useState({
    title: "",
    description: "",
    address: "",
    category: "",
    image: {},
  });

  console.log(postSubmitData);

  // useEffect( () => {
  //   if (postEditModalDataFound)  preLoadPost();
  // }, [postEditModalDataFound]);

  // const preLoadPost =  () => {
  //   const preDescription =  postEditModalData.description;
  //   const preAddress =  postEditModalData.address;
  //   const preCategory =  postEditModalData.category;
  //   console.log(preDescription);
  //   setPostSubmitData({
  //     ...postSubmitData,
  //     description: preDescription,
  //     address: preAddress,
  //     category: preCategory,
  //   });
  // };

  useEffect(() => {
    if (editPost) fetchPostPreData();
  }, []);

  const fetchPostPreData = async () => {
    // console.log(postId);
    const { data } = await fetchPostToEdit(postId);
    // console.log(data);
    setPostSubmitData({
      ...postSubmitData,
      title: data.title,
      description: data.description,
      address: data.address,
      category: data.category,
      image: data.image,
    });
  };
  // const  preDescription  = postEditModalData.description;
  // console.log(preDescription, "called")
  // setPostSubmitData({  description: preDescription });

  // if (editPost && postEditData) {
  //   const { description, address, image } = postEditData;
  //   console.log(description, address, image.url);
  //   setPostSubmitData({ ...postSubmitData, description:"description" });
  // }

  // console.log(postSubmitData);

  const history = useHistory();

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
      console.log(data);
      setPostSubmitData({ ...postSubmitData, image: data });
      console.log(postSubmitData.image);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  // Handle Image Uploaded
  const handleImageUploaded = (e) => {
    e.preventDefault();
    setPostSubmitData({ ...postSubmitData, image: {} });
  };

  // handle Post Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postSubmit(postSubmitData, token);
      // console.log(postSubmitData);
      // console.log(token);
      console.log(data);

      if (data.saved == "true") {
        console.log("Called");
        toast.success("Your Post is created successfully");
        history.push("/user/dashboard");
        handlePostModal(false);
        getUserPosts();
      }
    } catch (error) {
      console.log("Error =>", error);
    }
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(postId);
    try {
      const { data } = await updatePost(postSubmitData, postId);
      console.log(data);
      console.log("update called");
      if (data.updated == "true") {
        handlePostModal(false);
        getUserPosts();
        toast.success("Your post is updated successfully");
      }
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  return (
    <>
      {/* Post Form Start */}
      <BackgroundGray dashboardTrue={dashboardTrue} />
      <div
        style={{ width: "40rem" }}
        className="fixed ml-auto mr-auto left-0 right-0 bg-white  top-3 z-50 rounded-lg"
      >
        <div className="flex  justify-between  mx-10 mt-3">
          {/* check if post is to be edited or not */}
          {editPost ? (
            <div className="mt-2 text-xl font-semibold ">Edit Post</div>
          ) : (
            <div className="mt-2 text-xl font-semibold ">Post</div>
          )}

          <div className="">
            <button
              onClick={() => handlePostModal(false)}
              className="focus:outline-none"
            >
              <XIcon className="h-8 w-8 text-gray-400 bg-white shadow-md p-1 rounded-full " />
            </button>
          </div>
        </div>
        {/* Enter Title */}
        <input
          type="text"
          placeholder="Enter Title"
          className="outline-none border-2 border-gray-300 rounded-md ml-8 py-1 pl-2  mt-4  "
          value={postSubmitData.title}
          onChange={(e) =>
            setPostSubmitData({ ...postSubmitData, title: e.target.value })
          }
        />
        <div className="mt-3 mx-8 ">
          <textarea
            type="text"
            className=" h-18 w-full focus:outline-none rounded-xl p-2 border-2 border-gray-300 "
            placeholder="Write descriptions............"
            value={postSubmitData.description}
            onChange={(e) =>
              setPostSubmitData({
                ...postSubmitData,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>

        {/* Enter Address */}
        <input
          type="text"
          placeholder="Enter Your Address"
          className="outline-none border-2 border-gray-300 rounded-md ml-8 py-1 pl-2  m-2  "
          value={postSubmitData.address}
          onChange={(e) =>
            setPostSubmitData({ ...postSubmitData, address: e.target.value })
          }
        />

        {/* Select Category  */}
        <div className="ml-8 mt-2">
          <p className="text-base font-medium text-gray-500 mb-1.5">
            Categories
          </p>
          <select
            value={postSubmitData.category}
            onChange={(e) => {
              setPostSubmitData({
                ...postSubmitData,
                category: e.target.value,
              });
            }}
            className="px-1 py-1 focus:outline-none border-2 border-gray-300 rounded-md cursor-pointer"
          >
            <option value="">Select</option>
            <option value="adopt_pets">Adopt Pets</option>
            <option value="pets_problems_and_solutions">
              Pets Problems And Solutions
            </option>
            <option value="nearest_vetneries">Nearest Vetneries</option>
            <option value="lost_and_found">Lost and Found</option>
          </select>
        </div>

        <div className="flex justify-between ml-8  items-center mr-10">
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
                Upload Image
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
                className="h-36 w-36"
              />
            ) : (
              <img src={Avatar} alt="" className="h-40 w-40" />
            )}

            <p className="font-semibold text-base text-gray-500 mt-2">
              Image Preview
            </p>
          </div>
        </div>
        {editPost ? (
          <div className="flex justify-center items-center mt-0.5 ">
            <button
              type="submit"
              onClick={handleUpdatePost}
              className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-6   py-3 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
            >
              Update Post
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-0.5 ">
            <button
              type="submit"
              onClick={handleSubmit}
              className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-6   py-3 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
            >
              Submit Post
            </button>
          </div>
        )}
      </div>

      {/* Post Form  End*/}
    </>
  );
};

export default PostModal;
