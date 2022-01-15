import http from "../../services/http";
import messages from "../../utils/messages";
import { baseUrl, localUrl } from "./../../services/baseUrl";

export const login = (credentials) => async (dispatch) => {
  try {
    const { data, headers } = await http.post(`${baseUrl}/auth/login`, {
      email: credentials.email,
      password: credentials.password,
    });
    if (data) {
      if (credentials.rememberMe) {
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("isLoggedIn", true);
      } else {
        window.localStorage.setItem("tempToken", data.token);
      }

      http.defaultHeader();

      dispatch({
        type: "LOGGED_IN",
        payload: data,
      });
    }
  } catch (error) {
    messages.error(error);
    dispatch({
      type: "LOGIN_FAILED",
    });
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await http.post(`${baseUrl}/auth/register`, user);
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("isLoggedIn", true);
    http.defaultHeader();
    dispatch({
      type: "LOGGED_IN",
      payload: data.user,
    });
  } catch (error) {
    messages.error(error);
  }
};

export const loadUser = () => async (dispatch) => {
  window.localStorage.removeItem("tempToken");
  const token = window.localStorage.getItem("token");
  if (!token)
    dispatch({
      type: "LOGIN_FAILED",
    });
  try {
    const { data } = await http.get(`${baseUrl}/auth/my-account`, {
      headers: { token: `Bearer ${token}` },
    });
    window.localStorage.setItem("isLoggedIn", true);
    dispatch({
      type: "LOGGED_IN",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILED",
    });
  }
};

export const loadProfile = async () => {
  try {
    const { data } = await http.get(`${baseUrl}/auth/my-account`);
    return data;
  } catch (error) {
    messages.error(error);
  }
};

export const editProfile = async (profile) => {
  try {
    const { data } = await http.put(`${baseUrl}/auth/update-details`, profile);
    return data;
  } catch (error) {
    messages.error(error);
  }
};

export const updatePassword = async (password) => {
  try {
    const { data } = await http.put("/api/v1/auth/update-password", password);
    return data;
  } catch (error) {
    messages.error(error);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "LOGGED_OUT",
  });
};
