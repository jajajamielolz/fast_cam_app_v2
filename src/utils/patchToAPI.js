import axios from "axios";

const BASE_URL = "http://localhost:8001"

const options = {
    headers: { "Content-Type": "application/json" },
  };


  export const patchToAPI = async (url, uuid, data) => {
    const { response } = await axios.patch(`${BASE_URL}/${url}/${uuid}`, data, options);
    
    return response;
  };





