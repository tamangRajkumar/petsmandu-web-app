import React from "react";
// import App from "../containers/App.css";
import { PhoneIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className=" border border-gray-100 shadow-xl rounded-2xl  m-4   hover:shadow-2xl transform hover:scale-105 duration-150 ">
      {/* body Hotel lists */}
      <Link to={props.href}>
        <img className="h-60 rounded-t-xl" src={props.img} alt="" />

        <h1 className="font-bold "> {props.name} </h1>

        <p className=""> {props.place} </p>

        <div className="flex items-center justify-between ">
          {/* <div className="flex items-center">
            <StarIcon className="h-6 w-6 text-red-500 ml-1" />
            <span> {props.rating}</span>
          </div> */}

          {/* <span className="mr-1"> {props.cost} </span> */}
        </div>

        <div className="text-center m-2">
          <Link
            to={props.href}
            className="border border-blue-300 bg-gray-400 rounded-lg px-2 py-1 transform  hover:shadow-xl hover:bg-gray-300  "
          >
            {" "}
            View Details{" "}
          </Link>
        </div>

        {/* <button className="border border-blue-300 bg-gray-400 rounded-lg px-1 "> View Details </button> */}
      </Link>
    </div>
  );
}

export default Cards;
