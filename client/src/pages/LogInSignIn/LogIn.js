import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logInUser } from "../../redux/actions/authActions";
import { signUpLogiInCoverImage } from "../../assets/images";
import { toast } from "react-toastify";
function LogIn() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [logInConfirmed, setLogInConfirmed] = useState("false");
  const history = useHistory();

  //check whether the user is logged in or not if logged in and isAuthenticated is true then redirect to dashboard
  const authUser = useSelector((state) => state.authUser.isAuthenticated);
  if (authUser == true) {
    history.push("/");
  }

  console.log(authUser);

  const [userLogInData, setUserLogInData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(logInUser(userLogInData, history));

      // const { data } = await axios.post(
      //   "http://localhost:9000/api/login",
      //   userLogInData
      // );
    } catch (error) {
      toast.error("Log in Error, Please try Again!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around items-center mt-20">
          <div className="flex justify-center items-center ">
            <img className="rounded-3xl " src={signUpLogiInCoverImage} alt="" />
          </div>

          <div className=" flex flex-col items-center justify-center text-center  ">
            <h1 className="font-bold text-3xl">Log In</h1>

            <input
              type="email"
              placeholder="Enter Your Email "
              className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center"
              value={userLogInData.email}
              onChange={(e) =>
                setUserLogInData({ ...userLogInData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Enter Your password"
              className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"
              value={userLogInData.password}
              onChange={(e) =>
                setUserLogInData({ ...userLogInData, password: e.target.value })
              }
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-9   py-2 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
            >
              Log In
            </button>

            {/* Forgot Password */}
            <div className="flex gap-2 mt-5">
              <h1 className="text-md">Forgot Password?</h1>{" "}
              <Link to="/forgot-password">
                <p className="underline underline-offset-4 text-red-600 text-md">
                  click here
                </p>
              </Link>
            </div>

            {/* Sign up Link */}
            <div className="flex gap-2 mt-1">
              <h1 className="text-md">Not yet Signed up?</h1>{" "}
              <Link to="/signup">
                <p className="underline underline-offset-4 text-red-600 text-md">
                  sign up
                </p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
