import axios from "axios";

const API_URL = "http://localhost:8084/api/auth/";
const API="http://localhost:8084/api/v1/addrealisation"


const register = (fullname,email,username, phonenumber, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const addwork = (name, imageUrl,tagValue) => {
  return axios
    .post(API+ "workadded", {
      name,
      imageUrl,
      tagValue
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("work", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  addwork
};

export default AuthService;
