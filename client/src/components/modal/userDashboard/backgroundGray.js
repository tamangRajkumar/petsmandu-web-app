import React from "react";

const BackgroundGray = ({ dashboardTrue }) => {
  // console.log(dashboardTrue)
  return (
    <>
      {/* Background gray  */}

      {dashboardTrue ? (
        <button
          //   onClick={handlePostModal}
          style={{
            position: "fixed",
            padding: "0",
            margin: "0",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          className=" z-30 bg-gray-500 opacity-70  top-4 "
        ></button>
      ) : (
        <button
          //   onClick={handlePostModal}
          style={{
            position: "absolute",
            padding: "0",
            margin: "0",
            top: "0",
            left: "0",
            width: "100%",
            height: "1000%",
          }}
          className="absolute z-40 bg-gray-500 opacity-70  top-4 "
        ></button>
      )}
    </>
  );
};

export default BackgroundGray;
