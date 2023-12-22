import axios from "axios";

const BASE_URL = "http://localhost:8001"

// const options = {
//     headers: { "Content-Type": "application/json" },
//   };


  export const postToAPI = async (url, data) => {
    const response = await axios.post(`${BASE_URL}/${url}`, data);
  
    return response;
  };





