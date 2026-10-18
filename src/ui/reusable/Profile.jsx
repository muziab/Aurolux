import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import VendorName from "./VendorName";
import { FaChevronDown } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Profile = ({header}) => {
  return (
    <div className="flex gap-2">
      <ProfileAvatar />
      <div className={`flex gap-2 justify-center items-center max-lg:${header && "hidden"}`}>
        <div className="flex flex-col gap-0 justify-center">
          <VendorName />
          <small className="text-yellow-400 text-[12px]">Premium</small>
        </div>
        <FiChevronDown className="text-white" />
      </div>
    </div>
  );
};

export default Profile;
