import axios from "axios";

const BASE_URL = "http://localhost:8001"

const options = {
    params: {
      maxResults: 50,
    },
    headers: { "Content-Type": "application/json" },
  };


  export const deleteFromAPI = async (url, uuid) => {
    const { data } = await axios.delete(`${BASE_URL}/${url}/${uuid}`, options);
  
    return data;
  };





