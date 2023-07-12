import axios from "axios";

const Axios = axios.create({
  baseURL: "https://todo-list-23uw.onrender.com/api/",
});
export default Axios;
// "http://localhost:8080/api" ||
