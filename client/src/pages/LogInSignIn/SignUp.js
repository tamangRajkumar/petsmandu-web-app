import React from "react";
import { useState } from "react";

import { Redirect } from "react-router-dom";
import { signUpUser } from "../../redux/actions/authActions";
import { useDispatch, Selector, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signUpLogiInCoverImage } from "../../assets/images";

// Import Image

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [signUpData, setSignUpData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    image: {
      url: "",
      public_key: "",
    },
    confirmedSignUp: "false",
    favoritePostsList: [],
  });

  //check whether the user is logged in or not if logged in and isAuthenticated is true then redirect to dashboard
  const authUserLoggedin = useSelector(
    (state) => state.authUser.isAuthenticated
  );
  if (authUserLoggedin == true) {
    history.push("/");
  }
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmedSignUp, setConfirmedSignUp] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signUpData);
    dispatch(signUpUser(signUpData, history));
  };

  if (signUpData.confirmedSignUp === "true") {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around items-center mt-20">
          <div className="flex justify-center items-center">
            <img className="rounded-3xl " src={signUpLogiInCoverImage} alt="" />
          </div>

          <div className=" flex flex-col items-center justify-center text-center  ">
            <h1 className="font-bold text-3xl">Sign Up</h1>

            <>
              {/* First name */}
              <input
                type="text"
                placeholder="First Name"
                className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center"
                value={signUpData.fname}
                onChange={(e) => {
                  let nameText1 = e.target.value;
                  //capitalize first letter
                  let nameText2 =
                    nameText1.charAt(0).toUpperCase() + nameText1.slice(1);
                  setSignUpData({ ...signUpData, fname: nameText2 });
                }}
              />

              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center"
                value={signUpData.lname}
                onChange={(e) => {
                  let nameText1 = e.target.value;
                  //capitalize first letter
                  let nameText2 =
                    nameText1.charAt(0).toUpperCase() + nameText1.slice(1);
                  setSignUpData({ ...signUpData, lname: nameText2 });
                }}
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Enter Email"
                className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center"
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
              />
              {/* Enter Password */}
              <input
                type="password"
                placeholder="Enter password"
                className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              />

              {/* Retype Password */}
              {/* <input
                type="password"
                placeholder="Retype password"
                className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              /> */}

              <button
                type="submit"
                className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-9   py-2 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
              >
                Sign up
              </button>
              <div className="flex gap-2">
                <h1 className="text-md">Already Signed up?</h1>{" "}
                <Link to="/login">
                  <p className="underline underline-offset-8 text-red-600 text-md">
                    Log in
                  </p>
                </Link>
              </div>
            </>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
