import React, { useState } from "react";
// import App from "../containers/App.css";
import { HeartIcon, PhoneIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoritePostsList,
  removeFavoritePostsList,
} from "../../redux/actions/favoritePostsList";
import { toast } from "react-toastify";

const CardsVerticalAligned = ({
  post,
  description,
  image,
  address,
  title,
  userId,
  isFavoritePost,
  token,
  fetchPosts,
  favoritePostsPostRoute,
}) => {
  // Handle Route to view invidual post
  const history = useHistory();
  const dispatch = useDispatch();

  const [heartIconClick, setHeartIconClick] = useState(false);

  // const userId = useSelector((state) => state.authUser.currentUser.user._id);
  // console.log(userId);

  console.log(isFavoritePost);
  const handleHeartIconTrue = () => {
    if (userId) {
      setHeartIconClick(true);
      dispatch(addFavoritePostsList(post, token));
      !favoritePostsPostRoute && fetchPosts();
      favoritePostsPostRoute && Redirect("/favorite-posts-list");

      toast.success("Post is added to favorite list successfully");
    }
    if (!userId) {
      toast.error("Please log in to add to favorite list");
    }
    console.log("click");

    console.log(post._id);
  };

  const handleHeartIconFalse = () => {
    setHeartIconClick(false);
    dispatch(removeFavoritePostsList(post._id));
    !favoritePostsPostRoute && fetchPosts();
    toast.success("Post is removed from favorite list successfully ");
    if (favoritePostsPostRoute) history.push("/favorite-posts-list")
  };

  const handleViewPostRoute = () => {
    const postId = post._id;
    history.push(`/user/viewpost/${postId}`);
  };

  return (
    <div className=" w-[90vh] border border-gray-100 shadow-sm rounded-2xl  my-10 mx-5  py-6  hover:shadow-md transform  duration-150 ">
      {/* body pets lists */}

      <div className="flex mx-5 ">
        <div className="ml-4 my-2 mr-2" onClick={handleViewPostRoute}>
          <img
            className=" h-[35vh] w-[70vh] rounded-xl  cursor-pointer object-cover"
            src={image}
            alt=""
          />
        </div>

        <div className="flex-col  w-[55vh]  ml-6  ">
          {isFavoritePost || favoritePostsPostRoute ? (
            <div className="flex justify-end ">
              <HeartIcon
                onClick={handleHeartIconFalse}
                className="h-8 w-8 p-1 text-red-500 cursor-pointer   rounded-full"
              />
            </div>
          ) : (
            <div className="flex justify-end ">
              <HeartIcon
                onClick={handleHeartIconTrue}
                className="h-8 w-8 p-1 text-white bg-gray-400 shadow-sm cursor-pointer     rounded-full"
              />
            </div>
          )}

          {/* 
          <div>
            {heartIconClick ? (
             
            ) : (
              
            )}
          </div> */}

          <div className=" mt-5">
            <h1
              className="font-bold cursor-pointer text-left text-xl pt-2"
              onClick={() => handleViewPostRoute(post)}
            >
              {title}
            </h1>

            <p className="text-left mt-4 text-gray-500">
              {" "}
              {description.length > 50
                ? description.substring(0, 50) + "...."
                : description}{" "}
            </p>
            <p className="text-left mt-4 text-gray-500"> Address: {address} </p>
          </div>

          {/* <p className=" text-right font-bold"> {props.cost} </p> */}
        </div>
      </div>
    </div>
  );
};

export default CardsVerticalAligned;
