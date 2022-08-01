import React, { useState } from "react";
import AddNewPostButton from "../../components/modal/userDashboard/AddNewPostButton";
import PostModal from "../../components/modal/userDashboard/PostModal";

const NavbarPostModal = () => {
  const [postModal, setPostModal] = useState(false);

  const handlePostModal = (value) => {
    setPostModal(value);
    // console.log("Clicked");
  };

  return (
    <div className="mr-4 ">
      <AddNewPostButton
        handlePostModal={handlePostModal}
        NavBarPostButton={true}
      />

      {postModal && (
        <PostModal dashboard={true} handlePostModal={handlePostModal} />
      )}
    </div>
  );
};

export default NavbarPostModal;
