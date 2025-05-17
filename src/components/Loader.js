import React from "react";
import { ClipLoader } from "react-spinners";
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-screen">
      <ClipLoader size={100} color="#36d7b7" />
      <h2>Loading Portfolio...</h2>
    </div>
  );
};

export default Loader;
