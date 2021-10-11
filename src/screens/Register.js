import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserRegisterAction } from "../redux/actions/UserActions";

const Register = () => {
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirm, setConfirm] = useState("");
  const [active, setActive] = useState({
    username: false,
    email: false,
    password: false,
    confirm: false,
  });

  const handleActiveInput = (e) => {
    setActive({ ...active, [e.target.name]: true });
  };

  const handleDeactInput = (e) => {
    setActive({ ...active, [e.target.name]: false });
  };

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister),
    { loading, error } = userRegister;

  const handleUserRegister = (e) => {
    e.preventDefault();
    dispatch(UserRegisterAction());
  };

  return (
    <>
      <div className="container section position-relative">
        <div className="register-con position-absolute">
          <h1 className="text-bolder position-relative text-center">
            <Link to="/login" className="position-absolute i-regbck">
              <i className="fas fa-step-backward"></i>
            </Link>
            Register Here
          </h1>
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
          <form onSubmit={handleUserRegister}>
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
              <i className="fas fa-user"></i>
              <label
                htmlFor="email"
                className={active.email || email ? "active" : ""}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <div className="floating-label m-auto">
              <i className="fas fa-lock"></i>
              <label
                htmlFor="confirm"
                className={active.confirm || confirm ? "active" : ""}
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                autoComplete="on"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                onFocus={handleActiveInput}
                onBlur={handleDeactInput}
                required
              />
            </div>

            <div className="d-flex mt-3 mb-3">
              <button type="submit" className="btn login-btn m-auto">
                <span className="text-bolder">REGISTER</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
