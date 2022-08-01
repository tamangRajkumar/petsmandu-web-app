import React from "react";

import { PhoneIcon, StarIcon } from "@heroicons/react/solid";

function cardForIndividualRoute(props) {
  return (
    <div>
      <div className="text-center font-bold text-3xl  mt-20 mb-8 ">
        <h1>{props.hotelName}</h1>
      </div>

      <div className="flex justify-center items-center ">
        {/* First Image */}
        <img
          src={props.img}
          alt=""
          className="h-96 w-auto  mt-5 shadow-xl transform hover:scale-105 duration-300 hover:shadow-xl"
        />

        <div className="hidden md:hidden lg:flex space-x-5 ml-8">
          <div className="">
            <img
              src={props.img}
              alt=""
              className="h-40 w-auto  cursor-pointer mt-5  shadow-xl transform hover:scale-105 hover:shadow-xl duration-300"
            />
            <img
              src={props.img}
              alt=""
              className="h-40 w-auto cursor-pointer  mt-5  shadow-xl transform hover:scale-105 hover:shadow-xl duration-300"
            />
          </div>

          <div>
            <img
              src={props.img}
              alt=""
              className="h-40 w-auto cursor-pointer  mt-5  shadow-xl transform hover:scale-105 hover:shadow-xl duration-300"
            />
            <img
              src={props.img}
              alt=""
              className="h-40 w-auto cursor-pointer  mt-5 shadow-xl  transform hover:scale-105 hover:shadow-xl duration-300"
            />
          </div>
        </div>
      </div>

      <div className="m-10 ">
        <p className="text-3xl font-bold text-center  ">Pet Food Discription</p>
        <p className="text-justify m-5">{props.petDetails}</p>
      </div>

      <div>
        <p className="font-bold text-3xl text-center mt-20 mb-5">Google Map</p>
        <img
          src={props.mapImg}
          alt=""
          className="flex items-center justify-between m-auto content-center"
        />
      </div>

      <div>
        <p className="text-center font-bold  text-3xl mt-20 mb-5">
          Rating and Commenting Section
        </p>
        <p className="mx-20 text-justify ">{props.petComments}</p>
      </div>
    </div>
  );
}

export default cardForIndividualRoute;
