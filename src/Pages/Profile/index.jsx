import React from "react";
import { useLogOut } from "../../Hooks/RegisterHook";
// import { getCookie } from "../../Hooks/cookieHook";

const Profile = () => {
  const logOut = useLogOut(); // logOut hookni olish

  return (
    <div>
      Profile:
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Profile;
