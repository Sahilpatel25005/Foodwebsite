import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <HashLoader color="#37fd37" size={100} />
      ) : (
        <div className="flex flex-col text-center ">
          <h2 className="text-3xl font-bold tracking-wide">
            Order successfull !!
          </h2>

          <p className=" text-2xl font-semibold mt-3">
            Your Order has been successfully placed.
          </p>

          <a href="/" className=" underline font-semibold mt-3 text-blue-800">
            Back to Home..
          </a>
        </div>
      )}
    </div>
  );
};

export default Success;
