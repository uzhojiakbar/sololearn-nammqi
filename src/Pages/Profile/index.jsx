import React from "react";
import { useGetProfile, useLogOut } from "../../Hooks/RegisterHook";
// import { getCookie } from "../../Hooks/cookieHook";
import Navigating from "../../Components/Navbar/Navbar";

const Profile = () => {
  const logOut = useLogOut(); // logOut hookni olish
  const { data: profileData } = useGetProfile();

  const Prof1le = () => {
    console.log(profileData);
  };

  return (
    <div className="pt-[120px]">
      <Navigating login="1" />
      <button onClick={logOut}>Log Out</button>s{" "}
    </div>
  );
};

export default Profile;
