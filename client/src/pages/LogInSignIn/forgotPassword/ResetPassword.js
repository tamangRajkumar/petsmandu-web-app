import React from "react";

function ResetPassword() {
  return (
    <>
      <div>
        <h1>Forgot Password</h1>
        <div className="mt-40 text-center">
          <h1 className="text-base font-semibold my-4"> Reset Password</h1>
          <div className=" flex-col  space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter new password"
                className="border-2 border-gray-500 focus:outline-none rounded-lg py-1 px-4 shadow-sm drop-shadow-sm"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Re-enter new password"
                className="border-2 border-gray-500 focus:outline-none rounded-lg py-1 px-4 shadow-sm drop-shadow-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            //   onClick={handleSubmit}
            className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-9   py-2 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
