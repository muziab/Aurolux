import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";

const NotFoundPage = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="h-[90vh] bg-neutral-900 text-white  font-sans">
      <div>
        <h1 className="text-center text-[220px]">ERROR 404</h1>
        <PrimaryBtn
          FunctionDesc={"Go Home"}
          handleFunction={goHome}
          additionalStyle={"w-fit "}
        />
      </div>
      <img src="/frontend/public/images/" alt="" />
    </div>
  );
};

export default NotFoundPage;
