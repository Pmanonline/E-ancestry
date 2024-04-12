import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  // Select the login state from the Redux store
  const { loading, error } = useSelector((state) => state.auth);
  const userInfo = useSelector((state) => state.auth.userInfo);
  console.log(userInfo);

  // Now you can use the login state in your component
  // For example, you can conditionally render based on the login state
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userInfo && (
        <div>
          <p>Welcome, {userInfo.email}!</p>
          {/* Render user-specific content */}
        </div>
      )}
      {/* Render login form or other components */}
    </div>
  );
};

export default Profile;
