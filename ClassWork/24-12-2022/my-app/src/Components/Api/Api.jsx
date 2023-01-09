import axios from 'axios'
export const fetchDBData=async ()=>{
    return await axios.get("http://localhost:4000/Cars");
}
export const fetchDBDataWithId=(id)=>{
    return axios.get(`http://localhost:4000/Cars/${id}`)
}