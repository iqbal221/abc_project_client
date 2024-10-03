import React from "react";
import loader from "../Assets/image/loader.svg";

function FullScreenLoader() {
  return (
    <div className="processingDiv">
      <div className="center-screen">
        <img className='loader-size' src={loader} alt="..." />
      </div>
    </div>
  );
}

export default FullScreenLoader;
