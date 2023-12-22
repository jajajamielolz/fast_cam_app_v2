import axios from "axios";

const BASE_URL = "http://localhost:8001"

const options = {
    params: {
      maxResults: 50,
    },
    headers: { "Content-Type": "application/json" },
  };


  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };





