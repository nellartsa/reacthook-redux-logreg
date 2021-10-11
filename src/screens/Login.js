import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserLoginAction } from "../redux/actions/UserActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [active, setActive] = useState({
    username: false,
    password: false,
  });

  const handleActiveInput = (e) => {
    setActive({ ...active, [e.target.name]: true });
  };

  const handleDeactInput = (e) => {
    setActive({ ...active, [e.target.name]: false });
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin),
    { loading, error } = userLogin;

  const handleUserLogin = (e) => {
    e.preventDefault();
    dispatch(UserLoginAction(username, password));
  };

  return (
    <>
      <div className="container section position-relative">
        <div className="login-con position-absolute">
          <h1 className="text-bolder text-center">Login</h1>
          {loading ? (
            <div className="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="text-center alert-danger mb-3">{error}</div>
          <form onSubmit={handleUserLogin}>
            <div className="floating-label m-auto">
              <i className="fas fa-user"></i>
              <label
                htmlFor="username"
                className={active.username || username ? "active" : ""}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleActiveInput}
                onBlur={handleDeactInput}
                required
              />
            </div>

            <div className="floating-label m-auto">
              <i className="fas fa-lock"></i>
              <label
                htmlFor="password"
                className={active.password || password ? "active" : ""}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleActiveInput}
                onBlur={handleDeactInput}
                required
              />
            </div>

            <div className="d-flex">
              <Link to="/register" className="ms-auto regsize-btn">
                Register Here!!!
              </Link>
            </div>

            <div className="d-flex mt-3 mb-3">
              <button type="submit" className="btn login-btn m-auto">
                <span className="text-bolder">LOGIN</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
