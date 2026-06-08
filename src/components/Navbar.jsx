import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h2>Auth App</h2>
   
      {
        user ? (
          <div>
            <span>
              user: {user.name}
            </span>

            <button onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <span>Logged Out</span>
        )
      }
    </div>
  );
}

export default Navbar;