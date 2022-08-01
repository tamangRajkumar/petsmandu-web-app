import React, { useState } from "react";
// import contactUs from "../contactUs";
import {
  ViewListIcon,
  SearchIcon,
  HomeIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";

import { Route, Switch, Link } from "react-router-dom";

// import Nav Bar Component
import NavBar from "../components/headerAndFooter/NavBar";

import HomeRoute from "../pages/homeRoute/HomeRoute";
import SignUp from "../pages/LogInSignIn/SignUp";
import LogIn from "../pages/LogInSignIn/LogIn";
import ForgotPassword from "../pages/LogInSignIn/forgotPassword/ForgotPassword";
import VerifyCode from "../pages/LogInSignIn/forgotPassword/VerifyCode";
import ResetPassword from "../pages/LogInSignIn/forgotPassword/ResetPassword";

import favoritesList from "../pages/yourFavorites/favoritesList";
import PetsProblemsAndSolutions from "../pages/petsProblemsAndSolutions/petsProblemsAndSolutions";
import lostAndFoundPets from "../pages/lostAndFound/lostAndFound";

import nearestVetnaries from "../pages/hireVetnaries/hireVetnaries";
import allPets from "../pages/searchAllPets/allPets";
import Footer from "../components/headerAndFooter/Footer";
import AdoptPets from "../pages/adoptPets/AdoptPets";
import UserDashboard from "../dashboard/user/UserDashboard";
import SinglePostView from "../pages/singleViewPost/SinglePostView";
import IndividualRoute from "../components/individualRouteUsingParams/individualRoute";
import FavoritePostsList from "../pages/favoritePostsList/FavoritePostsList";
import { useSelector } from "react-redux";

function App() {
  //  const {menuHandle, menuHandlePass}= useState(false);

  // const {menuItems,menuItemsPass}=useState("");

  // function menuClicked(){
  //     menuHandlePass="True";

  // }

  //     if (menuHandle==true){
  //         menuItemsPass= {
  //             logIn: "Log In",
  //             SignUp: "Sign Up",
  //             SignInGoogle: "Sign Up G+"
  //         }

  //         }else{
  //             menuHandle="false"
  //         }
  //     }

  console.log("Developed By: 'Rajkumar Tamang'");
  const isAuthenticated = useSelector(
    (state) => state.authUser.isAuthenticated
  );
  console.log(isAuthenticated);
  return (
    <>
      <NavBar />

      <div>
        {/*Header Page Routing */}
        <Switch>
          <Route path="/" exact component={HomeRoute} />
          {/* <Route path="/" component={homeRoute} /> */}

          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/verify-code" component={VerifyCode} />
          <Route path="/reset-password" component={ResetPassword} />

          <Route path="/all_pets" component={allPets} />

          <Route path="/nearest_vetnaries" component={nearestVetnaries} />

          <Route path="/lost_found_pets" component={lostAndFoundPets} />
          <Route
            path="/pets_problems_and_solutions"
            component={PetsProblemsAndSolutions}
          />
          <Route path="/favorites_list" component={favoritesList} />
          <Route path="/adopt_pets" component={AdoptPets} />

          <Route path="/user/dashboard" component={UserDashboard} />

          {/* Individual Search route static */}
          <Route path="/pets/:indexNumber" component={IndividualRoute} />

          {/* individual pets page routing using params */}
          <Route path="/user/viewpost/:params" component={SinglePostView} />

          {/* User Favorite Posts Lists */}

          {isAuthenticated ? (
            <Route path="/favorite-posts-list" component={FavoritePostsList} />
          ) : (
            <div>
              <p className="text-2xl my-[35vh]  text-center font-bold">Request Error......</p>
            </div>
          )}
        </Switch>
      </div>

      <Footer />
    </>
  );
}

export default App;
