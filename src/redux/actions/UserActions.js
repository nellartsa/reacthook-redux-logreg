import axios from "axios";

import { PATH } from "../AxiosPath";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/UserConstants";

export const UserLoginAction = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${PATH}/user/login`,
      { username, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userCreds", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserLogoutAction = () => (dispatch) => {
  localStorage.removeItem("userCreds");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const UserRegisterAction =
  (username, email, password, confirm) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${PATH}/user/register`,
        { username, email, password, confirm },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userCreds", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload:
          error.response && error.response.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
