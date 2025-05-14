import axios from "axios";
const customAxios = axios.create( {
  baseURL: "https://remedyai.com.pl",
  // baseURL: "http://localhost:8000",
} );

export default customAxios;
