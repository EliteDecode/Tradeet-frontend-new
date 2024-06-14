import axios from "axios";

const API_URL = "https://myhpibackend.uw.r.appspot.com/myhpi/api/v1/users";

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout
const logout = () => {
  localStorage.removeItem("user");
};

const authService = { register, logout, login };

export default authService;
