import axios from "axios";
import { EMAIL_URL } from "./apiService";

export const fetchEmailDB = async (data) => {
  try {
    const res = await axios.post(`${EMAIL_URL}/UserNeedHelp.json`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
