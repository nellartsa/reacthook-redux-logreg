import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogoutAction } from "../redux/actions/UserActions";

const Home = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin),
    { userCreds } = userLogin;

  const handleUserLogout = (e) => {
    e.preventDefault();
    dispatch(UserLogoutAction());
  };
  return (
    <>
      <div className="container section position-relative">
        <div className="home-con position-absolute">
          <div className="text-center">
            <h2>Hello {userCreds.username} !!!</h2>
          </div>
          <div className="d-flex">
            <button
              onClick={handleUserLogout}
              className="btn logout-btn m-auto"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
