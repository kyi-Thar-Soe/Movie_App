import axios from "axios";
import { getToken } from "../Storage/Storage";
const headers =  {
  'Content-Type': 'application/json',
  Accept: "application/json",
}
export const ApiCall =async (url,method,data) => {
  const token = await getToken();
  if(token){
    headers.Authorization = `Bearer ${token}`
   }
   axios.defaults.headers = headers;
    return await axios[method](url,data)
    .then(function (response) {
     return response;
})
}