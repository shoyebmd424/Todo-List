import axios from "axios";

const Axios = axios.create({ baseURL: "http://localhost:8080/api" ||"https://todo-list-23uw.onrender.com/api/"});
export default Axios;
