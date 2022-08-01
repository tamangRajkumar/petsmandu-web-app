import { LOGIN, LOGOUT, USERPROFILEDATA } from "./types";
import * as api from "../../api";
import axios from "axios";
import { toast } from "react-toastify";

//Sign Up User
export const signUpUser = (signUpData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUpUser(signUpData);
    // console.log(data.ok);
    // dispatch({
    //   type: SIGNUP,
    //   payload: data,
    // });
    if (data.ok == "true") {
      toast.success("Signed up successfully, Please log in.");
      history.push("/login");
    }
  } catch (error) {
    console.log("Error=>", error);
    toast.error("Sign up error, Please try again!");
  }
};

//Log In User
export const logInUser = (userLogInData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:9000/api/login",
      userLogInData
    );
    if (data) {
      dispatch({
        type: LOGIN,
        payload: data,
      });
      if (data) {
        dispatch({
          type: USERPROFILEDATA,
          payload: data.user.image,
        });
      }

      if (data.ok == "true") {
        // Save user authentication data in local storage
        window.localStorage.setItem("authUser", JSON.stringify(data));

        // Save user profile data in local storage
        window.localStorage.setItem(
          "userProfileData",
          JSON.stringify(data.user.image)
        );

        // Create local storage for favorite Posts List
        window.localStorage.setItem("favoritePostsList", JSON.stringify([]));

        history.push("/user/dashboard");
        toast.success("Welcome, You have logged in successfully.");
      }
    }
  } catch (error) {
    console.log("ERROR=> ", error);
    toast.error("Log in Error, Please try again to log in!");
  }
};

//Log Out User From Browser when clicked Log Out
export const logOutUser = (userLogOut) => {
  return { type: LOGOUT, payload: userLogOut };
};
