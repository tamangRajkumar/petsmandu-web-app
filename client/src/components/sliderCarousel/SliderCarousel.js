import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import allPets from "../AllPetsLists/allPetsList";
import sliderCss from "./sliderCss.css";

import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/solid";
// export default class Responsive extends Component

const SliderCarousel = ({
  title,
  autoplay,
  autoplaySpeed,
  pauseOnHover,
  handlePostRouteIndividual,
  posts,
}) => {
  {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      pauseOnHover: pauseOnHover,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const sliderRef = useRef();

    // console.log(sliderRef);
    // console.log(sliderRef.current);
    // console.log(sliderRef.current.slickNext)
    // console.log(sliderRef.current.slickPlay);
    // console.log("called")
    // adoptPetsPosts && console.log(adoptPetsPosts)

    return (
      <>
        <div className="mt-12 md:mt-20 lg:mt-20">
          <div className="flex justify-between items-center ">
            <div>
              <h1 className="font-bold text-lg ml-20 md:font-bold md:text-xl md:ml-24 lg:font-bold lg:text-4xl lg:ml-36 ">
                {title}
              </h1>
            </div>
            <div className="flex space-x-2 absolute right-20 md:right-24 lg:right-32 justify-around items-center  cursor-pointer">
              <div onClick={() => sliderRef.current.slickPrev()}>
                {/* <p className="">Prev</p> */}
                <ArrowCircleLeftIcon className="h-10 w-10 text-gray-500 hover:text-gray-700 transform hover:scale-105" />
              </div>
              <div onClick={() => sliderRef.current.slickNext()}>
                {/* <p>Next</p> */}
                <ArrowCircleRightIcon className="h-10 w-10 m text-gray-500 hover:text-gray-700 transform hover:scale-105 " />
              </div>
            </div>
          </div>

          {/* Mapping data in slider */}
          <div className="ml-10 mr-10 mt-5  bg-contain ">
            <Slider {...settings} ref={sliderRef}>
              {posts &&
                posts.map((post) => {
                  return (
                    <>
                      <div
                        key={post._id}
                        className="mx-3 md:mx-3 lg:mx-5 mb-8 pt-2 pb-5  shadow-md rounded-xl"
                      >
                        <div
                          className="cursor-pointer h-40 md:h-40 lg:h-48   "
                          onClick={() => handlePostRouteIndividual(post)}
                        >
                          <img
                            src={post.image.url}
                            alt=""
                            className=" object-cover h-[100%] w-[100%] rounded-t-lg "
                          />
                        </div>
                        <div>
                          <p className="text-center mt-2 px-3 ">
                            {" "}
                            {post.description.length > 25
                              ? post.description.substring(0, 29) + "..."
                              : post.description}
                          </p>
                        </div>

                        {/* View Post Button */}
                        <div
                          className=" text-center  cursor-pointer w-32  m-auto mt-2"
                          // onClick={() => handlePostRouteIndividual(post)}
                        >
                          {" "}
                          <p className="border border-blue-300 bg-gray-400 rounded-lg  py-1  transform  hover:shadow-xl hover:bg-gray-300  ">
                            View Details
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </Slider>
          </div>
        </div>
      </>
    );
  }
};

export default SliderCarousel;
