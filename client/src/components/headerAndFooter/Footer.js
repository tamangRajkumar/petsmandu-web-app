import React from "react";

function Footer() {
  return (
    <div className=" border border-gray-300 bg-gray-300 mt-20 pt-5 flex bottom-2  justify-center ">
     <div></div>
      <div className="flex justify-center items-center mb-5  ">

      <p className="m-auto">Copyright © 2022 petsMandu. All rights reserved.</p>
        {/* Contact Us Section */}
        {/* <h1 className="font-bold text-4xl mt-5 text-center">Contact Us</h1>
        <p className="text-center m-5">
          Copyright <br /> Add Social Media Accounts
        </p> */}
      </div>

      {/* <link to={contactUs} className="flex justify-center border border-red-300 "> Contact Us</a> */}

      {/* <route path={contactUs}  /> */}
    </div>
  );
}

export default Footer;
