import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";
import "./Card.css"

const NotFoundPage = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="h-[90vh] bg-neutral-950 items-center text-white flex font-sans gap-30 justify-center ">
      <div className="w-130 flex flex-col gap-2 p-4">
        <h1 className="text-center text-[220px] customText" content="404">404</h1>
        <b className="text-center text-5xl">Page Not Found</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          praesentium modi aspernatur, deleniti amet illo impedit at quos!
          Consequatur eos?
        </p>
        <PrimaryBtn
          FunctionDesc={"Go Home"}
          handleFunction={goHome}
          additionalStyle={"w-fit "}
        />
      </div>
        <img src="/images/Screenshot 2026-10-22 151849.png" className="w-1/3" alt="" />
    </div>
  );
};

export default NotFoundPage;
