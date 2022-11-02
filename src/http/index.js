import axios from "axios";
import jwt_decode from "jwt-decode";

// const url = "https://top-link-app.herokuapp.com/api/";
const url = "http://localhost:6699/api/";

export const registration = async (formDetails) => {
  const { data } = await axios.post(`${url}auth/registration`, formDetails);
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await axios.post(`${url}auth/login`, { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const forgot = async (email) => {
  const { data } = await axios.post(`${url}account/forgot-password`, { email });
  return data?.message;
};

export const reset = async (password, id, token) => {
  const { data } = await axios.post(
    `${url}account/reset-password/${id}/${token}`,
    { password }
  );
  return data?.message;
};
