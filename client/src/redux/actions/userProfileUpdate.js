import { USERPROFILEDATA } from "./types";

// update user profile data
export const userProfileUpdate = (userProfileImageData) => {
  console.log(userProfileImageData)
  try {
    window.localStorage.setItem("userProfileData", JSON.stringify(userProfileImageData));
    return {
      type: USERPROFILEDATA,
      payload: userProfileImageData,
    };
  } catch (error) {
    console.log("Error =>", error)
  }
 
};
