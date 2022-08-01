import React, { useEffect, useState } from "react";
import { deletePost, fetchPosts } from "../../../api";
import { Selector, useSelector } from "react-redux";
import { Avatar } from "../../../assets/images";
import { TrashIcon, XIcon, PencilIcon } from "@heroicons/react/solid";
import PostModal from "./PostModal";
import moment from "moment";
import { toast } from "react-toastify";

const PostedContent = ({
  getUserPosts,
  posts,
  token,
  singlePostView,
  handlePostModal,
}) => {
  // const currentUserId = useSelector(
  //   (state) => state.authUser.currentUser.user._id
  // );

  // console.log(currentUser.user._id);

  // Handle Delete Post

  const handleDeletePost = async (post) => {
    try {
      const answer = window.confirm("Are you sure to delete?");
      if (!answer) return;
      const postId = post._id;
      console.log(postId);

      const { data } = await deletePost(postId, token);
      console.log(data);
      if (data.deleted == "true") {
        getUserPosts();
        toast.success("Your post is deleted successfully");
      }
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  return (
    <div className="flex-col  ">
      <div className="flex justify-center itmes-center mt-5">
        <h1 className="text-2xl font-bold text-gray-500">
          {" "}
          Your Posted Contents{" "}
        </h1>
      </div>

      <div className="flex-col justify-center itmes-center  text-center ">
        {/* <pre> {JSON.stringify(posts, null, 4)}</pre> */}
        {posts &&
          posts.map((post) => {
            return (
              <>
                <div
                  key={post._id}
                  className="mt-10 mb-20 md:mx-40 py-3 bg-white border-1 border-gray-200 shadow-md shadow-red-500 rounded-xl "
                >
                  {/* Edit Post button and Icon */}
                  <div className="flex justify-end mr-5">
                    <button
                      onClick={() =>
                        handlePostModal({
                          setPostModalTrue: true,
                          editPost: true,
                          post,
                        })
                      }
                      className="focus:outline-none"
                    >
                      <PencilIcon className="h-8 w-8 text-gray-400 bg-white shadow-md p-1.5 rounded-full " />
                    </button>
                  </div>

                  <div className="mt-1 mb-4 flex  pl-10 items-center">
                    {post.postedBy.image.url ? (
                      <img
                        src={post.postedBy.image.url}
                        className=" h-10 w-10 rounded-full"
                      />
                    ) : (
                      <img src={Avatar} className=" h-10 w-10" />
                    )}

                    <div className="flex-col">
                      <div className="flex">
                        <p className="ml-2">{post.postedBy.fname}</p>
                        <p className="ml-1">{post.postedBy.lname}</p>
                      </div>

                      <p className="ml-2">
                        {moment(post.createdAt).calendar()}
                      </p>
                      {/* <p>{post.createdAt}</p> */}
                    </div>
                  </div>

                  {post.image ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => singlePostView(post)}
                    >
                      <img
                        src={post.image && post.image.url}
                        className="flex  m-auto  w-96 object-contain mt-0"
                        alt=""
                      />
                    </div>
                  ) : null}

                  {/* Post Descriptions */}
                  <p className="mt-1 mb-2 text-base font-medium text-gray-600  py-3 rounded-md mx-10">
                    {post.description}
                  </p>

                  {/* User Address  */}
                  <p className="mt-1  text-base font-medium">
                    <span className="text-lg">Location:</span>
                    <span className="text-base text-blue-700">
                      {" "}
                      {post.address}
                    </span>
                  </p>

                  {/* User Post created date  */}
                  {/* <p className="mt-1 mb-2 text-base font-medium">
                    <span className="text-lg">Created: </span>
                    <span className="text-base text-blue-700">
                      {moment(post.createdAt).calendar()}
                    </span>
                  </p> */}
                  {/* Category  */}
                  {/* <p className="mt-1 mb-2 text-base font-medium">
                    <span className="text-lg">Category:</span>
                    <span className="text-base text-blue-700">
                      {" "}
                      {post.category}
                    </span>
                  </p> */}

                  {/* Delete Post button and Icon */}
                  <div className="flex justify-end mr-5">
                    <button
                      onClick={() => handleDeletePost(post)}
                      className="focus:outline-none"
                    >
                      <TrashIcon className="h-8 w-8 text-red-500 bg-white shadow-md p-1 rounded-full " />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default PostedContent;
