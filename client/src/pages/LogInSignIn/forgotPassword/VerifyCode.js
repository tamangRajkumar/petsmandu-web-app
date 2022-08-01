import React from "react";

function VerifyCode() {
  return (
    <>
      <div>
        <h1>Forgot Password</h1>
        <div className="mt-40 text-center">
          <h1 className="text-base font-semibold my-4">
            {" "}
            Enter the code sent in Your Email
          </h1>
          <input
            type="text"
            placeholder="Enter the code"
            className="border-2 border-gray-500 focus:outline-none rounded-lg py-1 px-4 shadow-md drop-shadow-md"
          />
        </div>
        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            //   onClick={handleSubmit}
            className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-9   py-2 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
          >
            Verify code
          </button>
        </div>
      </div>
    </>
  );
}

export default VerifyCode;
