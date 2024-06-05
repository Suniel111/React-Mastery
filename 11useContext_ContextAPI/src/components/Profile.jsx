import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="text-3xl font-bold grid w-full h-auto justify-center">
        Please Login
      </div>
    );

  return (
    <div className="text-3xl font-bold grid w-full h-auto justify-center">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
