import React from "react";
import { useGetProfile, useLogOut } from "../../Hooks/RegisterHook";
// import { getCookie } from "../../Hooks/cookieHook";

const Profile = () => {
  const logOut = useLogOut(); // logOut hookni olish
  const { data: profileData } = useGetProfile();

  const Prof1le = () => {
    console.log(profileData);
  };

  return (
    <div>
      Profile:
      <button onClick={logOut}>Log Out</button>
      <br />
      <button onClick={Prof1le}>click me</button>
    </div>
  );
};

export default Profile;
