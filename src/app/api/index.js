import axios from "axios";

export const postRequest = async (data) => {
  try {
    await axios.post(`http://139.59.63.48:5000/send_email`, data);
  } catch (error) {
    console.error("POST Request Error:", error);
    throw error;
  }
};
