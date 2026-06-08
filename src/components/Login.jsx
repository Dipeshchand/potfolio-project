import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const { login, user } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Login Page</h1>

      {
        !user && (
          <button onClick={login}>
            Login
          </button>
        )
      }

    </div>
  );
};

export default Login;