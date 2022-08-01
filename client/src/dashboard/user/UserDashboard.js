import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserProfile from "../../components/modal/userDashboard/UserProfile";
import PostedContent from "../../components/modal/userDashboard/PostedContent";
import AddNewPostForm from "../../components/modal/userDashboard/AddNewPostButton";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../../components/modal/userDashboard/PostModal";
import { fetchPosts } from "../../api";
import { postEditModalPreData } from "../../redux/actions/postEditPreData";
import UpdateUserProfileModal from "../../components/modal/userDashboard/UpdateUserProfileModal";
import { UserCircleIcon, XIcon } from "@heroicons/react/solid";

const UserDashboard = () => {
  //   getCurrentUser();

  // const token = useSelector((state) => state.authUser.currentUser.token);
  // // console.log(token);
  // const getCurrentUser = async () => {
  //   try {
  //     const { data } = axios.get("http://localhost:9000/current-user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },

  //     });
  //     console.log("ok")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.authUser.isAuthenticated);
  const user = useSelector((state) => state.authUser.currentUser.user);
  const token = useSelector((state) => state.authUser.currentUser.token);
  const currentUser = useSelector((state) => state.authUser.currentUser);
  // const postEditModalData = useSelector((state) => state.postEditModalPreData);
  // console.log(postEditModalData);

  // console.log(token);
  console.log(user);
  // console.log(user.email);

  const history = useHistory();
  if (!authUser) {
    history.push("/login");
  }

  const [postModal, setPostModal] = useState(false);
  const [posts, setPosts] = useState();
  const [editPost, setEditPost] = useState(false);
  // const [postEditData, setPostEditData] = useState();
  const [postId, setPostId] = useState();
  const [profileUpdateModal, setProfileUpdateModal] = useState(false);
  const [sideBarProfileView, setSideBarProfileView] = useState(false);

  const handleProfileImage = (value) => {
    setProfileUpdateModal(value);
  };

  const handlePostModal = async (value) => {
    // console.log(value);

    if (value.editPost) {
      // console.log(value.post._id);
      const postId = value.post._id;
      setPostModal(value.setPostModalTrue);
      setEditPost(value.editPost);
      // const { data } = await fetchPostToEdit(postId);
      // console.log(data);
      // dispatch(postEditModalPreData(postId));
      // setPostEditData(data);
      setPostId(postId);
    } else {
      setPostModal(value);
      setEditPost(false);
    }
    // console.log("Clicked");
  };

  //get user posts
  useEffect(() => {
    if (currentUser && token) getUserPosts();
  }, [currentUser, token]);

  // Fetch user Posts in dashboard
  const getUserPosts = async () => {
    try {
      const { data } = await fetchPosts(token);
      setPosts(data);
      // console.log(posts);
      // console.log(data[1]._id);

      {
        // posts && console.log(posts[0]._id);
      }
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  const singlePostView = (post) => {
    history.push(`/user/viewpost/${post._id}`);
  };

  const handleSideBarProfileMobileView = () => {
    setSideBarProfileView((prev) => !prev);
  };

  return (
    <>
      <div>
        <div className="pt-5 flex gap-x-5 sm:flex-col md:flex-col  lg:flex-row justify-center  ">
          {/* User Profile */}
          <div className="  ml-10 mr-3   ">
            <UserProfile
              fName={user.fname}
              lName={user.lname}
              userEmail={user.email}
              handleProfileImage={handleProfileImage}
              createdAt={user.createdAt}
            />
          </div>

          {/* Sidebar Mobile view */}
          {sideBarProfileView && (
            <div className=" fixed top-[45vh] left-0 md:fixed md:top-[45vh] md:left-0  lg:fixed lg:top-20 lg:left-0 lg:mr-3   ">
              <UserProfile
                fName={user.fname}
                lName={user.lname}
                userEmail={user.email}
                handleProfileImage={handleProfileImage}
                createdAt={user.createdAt}
                mobileView={true}
              />
            </div>
          )}

          {/* Update User Profile Modal */}
          <div className="z-50">
            {profileUpdateModal && (
              <div className="">
                <UpdateUserProfileModal
                  dashboardTrue={true}
                  handleProfileImage={handleProfileImage}
                />
              </div>
            )}
          </div>

          <div className=" flex-auto   bg-gray-50 justify-center items-center  rounded-t-lg ">
            {sideBarProfileView ? (
              <div>
                <XIcon
                  onClick={handleSideBarProfileMobileView}
                  className="fixed z-50 bottom-14 left-8 shadow-xl hover:shadow-2xl  transform hover:scale-105 cursor-pointer p-4 text-white h-16 w-16 rounded-full bg-gray-500  "
                />
              </div>
            ) : (
              <div>
                <UserCircleIcon
                  onClick={handleSideBarProfileMobileView}
                  className="fixed md:fixed lg:hidden z-50 bottom-14 left-8 shadow-xl hover:shadow-2xl  transform hover:scale-105 cursor-pointer p-1 text-white h-16 w-16 rounded-full bg-gray-500  "
                />
              </div>
            )}

            {/* Add New Post  */}
            <AddNewPostForm handlePostModal={handlePostModal} />

            {/* Show Modal */}
            {postModal ? (
              <>
                <PostModal
                  handlePostModal={handlePostModal}
                  dashboardTrue={true}
                  getUserPosts={getUserPosts}
                  editPost={editPost}
                  postId={postId}
                />{" "}
              </>
            ) : null}

            {/* Posted Contents */}
            <div>
              <PostedContent
                getUserPosts={getUserPosts}
                posts={posts}
                token={token}
                singlePostView={singlePostView}
                handlePostModal={handlePostModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
