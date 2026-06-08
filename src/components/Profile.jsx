import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {

  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      {
        user ? (
          <div>
            <h2>User Profile</h2>

            <p>Name: {user.name}</p>

            <p>Email: {user.email}</p>
          </div>
        ) : (
          <h2>Please Login</h2>
        )
      }

    </div>
  );
};

export default Profile;