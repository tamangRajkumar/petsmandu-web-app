import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  ViewListIcon,
  SearchIcon,
  HomeIcon,
  UserCircleIcon,
  MenuIcon,
  PlusIcon,
  XIcon,
  HeartIcon,
} from "@heroicons/react/solid";

import DropDownModal from "../modal/dropDownModal/DropDownModal";

import NavbarPostModal from "./NavbarPostModal";
import { toast } from "react-toastify";

const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [searchInputShowHide, setSearchInputShowHide] = useState(false);
  const menuBtnRef = useRef();
  const history = useHistory();

  const isAuthenticated = useSelector(
    (state) => state.authUser.isAuthenticated
  );

  useEffect(() => {
    const closeDropdownOnClick = (e) => {
      // console.log(e);
      if (e.path[0] !== menuBtnRef.current) {
        setMenuClicked(false);
        // console.log(e);
      }
    };
    document.body.addEventListener("click", closeDropdownOnClick);

    return () =>
      document.body.removeEventListener("click", closeDropdownOnClick);
  }, []);

  const hanldeMenuClicked = () => {
    setMenuClicked((prev) => !prev);
  };

  const handleSmallScreenSerachIcon = () => {
    setSearchInputShowHide((prev) => !prev);
  };

  return (
    <>
      <div className="container max-w-full  rounded-md sticky top-0     z-30  ">
        <div className="flex justify-between items-center px-5 mb-5 shadow-lg rounded-xl  bg-gray-50 ">
          {/* Nav Bar Items */}
          <div className=" flex-column justify-center items-center space-x-0 my-5 ">
            <div className="flex justify-center items-center">
              {/* Logo of app */}
              <Link to="/">
                <HomeIcon className="h-6 w-6 mt-1.5 mr-1 rounded-xl text-gray-500 flex items-center justify-center   hover:bg-opacity-60 hover:text-opacity-70 hover:shadow-xl duration-150 " />
              </Link>
            </div>
            <div>
              <Link to="/" className=" mr-4  rounded-xl font-bold ">
                <span href="#" className="ml-2 ">
                  pets<span className="text-xl">Mandu</span>
                </span>
              </Link>
            </div>
          </div>

          <div>
            {/* All Categories links */}
            <div className="hidden md:hidden lg:flex flex-wrap justify-center items-center space-x-3 ml-8 py-7 mt-1">
              {/* <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/dogs"> Dogs </Link>
            </div>
            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/cats"> Cats </Link>
            </div>

            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/fish_aquariums"> Fish/ Aquarium </Link>
            </div>

            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/parrots_birds"> Parrots/ Birds </Link>
            </div> */}

              <div className=" rounded-xl py-2 px-3 my-1 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
                <Link to="/adopt_pets"> Adopt Pets </Link>
              </div>

              <div className=" rounded-xl py-2 px-3 my-1  font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
                <Link to="/pets_problems_and_solutions">
                  {" "}
                  Pets Problems & Solutions{" "}
                </Link>
              </div>

              <div className=" rounded-xl py-2 px-3 my-1   font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
                <Link to="/nearest_vetnaries"> Nearest Vetneries </Link>
              </div>
              <div className=" rounded-xl py-2 px-3 my-1 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
                <Link to="/lost_found_pets"> Lost & Found Pets </Link>
              </div>
              {/* <div className=" rounded-xl p-1 px-1.5 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/favorites_list"> Favorites List</Link>
            </div> */}
            </div>
          </div>

          <div
            className={
              searchInputShowHide
                ? "block absolute right-5 z-50  md:flex flex-1  justify-center items-center  "
                : "hidden md:flex flex-1  justify-center items-center  "
            }
          >
            {/* Search Section */}

            <div className="flex justify-between items-center py-5 ">
              {searchInputShowHide && (
                <XIcon
                  onClick={handleSmallScreenSerachIcon}
                  className="absolute cursor-pointer h-6   w-6 z-50 -right-1 -top-1.5 text-gray-500 rounded-full p-1 shadow-lg"
                />
              )}
              <div className="transform hover:scale-105 duration-300 hover:shadow rounded-3xl  ">
                {/* Search Icon */}
                <Link to="/all_pets">
                  <SearchIcon
                    onClick={() => {
                      toast.error("Search feature is in progress!")
                      setSearchInputShowHide(false)}}
                    class="h-6 w-6 text-gray-500 absolute ml-52 mt-2.5 z-40  "
                  />
                </Link>
                <input
                  className="  border border-gray-50 shadow-md outline-none rounded-3xl  px-10 py-2 "
                  type="text"
                  placeholder="Search "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <SearchIcon
              onClick={handleSmallScreenSerachIcon}
              className="block cursor-pointer md:hidden lg:hidden h-6 w-6 mt-1 text-gray-600 "
            />

            {/* Favorite lists Show Icon */}
            {isAuthenticated && (
              <div>
                <Link to="/favorite-posts-list">
                  <HeartIcon className="h-8 w-8 text-red-600 cursor-pointer " />
                </Link>
              </div>
            )}

            {/* Add new post Icon  */}
            {isAuthenticated && <NavbarPostModal />}

            {/* Nav Bar Toggler */}

            {searchInputShowHide ? (
              ""
            ) : (
              <div className="">
                <button
                  ref={menuBtnRef}
                  onClick={hanldeMenuClicked}
                  className="flex items-center focus:outline-none p-2 text-gray-600  absolute z-50  h-12 w-20 ml-0.5 rounded-full  "
                ></button>
                <div className=" bg-white rounded-full shadow-lg justify-center items-center px-2 py-1.5 transform hover:scale-105 duration-150 hover:shadow-xl ">
                  <div className=" flex  ">
                    <MenuIcon className="h-7 w-8 mt-1  " />
                    <UserCircleIcon className="h-9 w-9 text-gray-600 " />
                  </div>
                </div>
                {/* onClick={menuClicked} */}
              </div>
            )}
          </div>

          {isAuthenticated ? (
            //if logged in pass dropdown to set margin top
            <>
              {menuClicked ? (
                <div className=" absolute right-0  mr-5 mt-36 pt-3">
                  <DropDownModal history={history} />
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            //if Not logged in pass drop down to set margin top
            <>
              {menuClicked ? (
                <div className=" absolute right-0  mr-5 mt-48">
                  <DropDownModal history={history} />
                </div>
              ) : (
                ""
              )}
            </>
          )}

          {/* <div>
            <h1>{menuItems.logIn}</h1>
           <h1> {menuItems.SignUp}</h1>
           <h1> {menuItems.SignUpGoogle}</h1>
        </div>  */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
