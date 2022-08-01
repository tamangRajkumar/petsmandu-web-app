import { LOGIN, LOGOUT } from "../actions/types";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const initialState = {
  // isAuthenticated: false,
  isAuthenticated: window.localStorage.getItem("authUser") ? true : false,
  //After registered backend will send ok:true token and user data that will be stored herer
  currentUser: window.localStorage.getItem("authUser")
    ? JSON.parse(window.localStorage.getItem("authUser"))
    : {
        user: {
          _id: "",
        },
      },
};

// Force logging out user after the expiry of token
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // const history = useHistory();

    console.log("token expired", error);
    let res = error.response;
    if (res == 401 && res.config && !res.config.__isRetryRequest) {
      window.localStorage.removeItem("authUser");
      // history.push("/login");
    }
  }
);

// useEffect(() => {
//   setInitialState(JSON.parse(window.localStorage.getItem("authUser")));
// }, []);

export const authUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
