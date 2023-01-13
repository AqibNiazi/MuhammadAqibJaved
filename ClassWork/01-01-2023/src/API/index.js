
import axios from 'axios';

export const getCategories = async () => {
    try {
        const {data} = await axios.get("http://localhost:9000/men");
        return data;
    } catch (error) {
        console.log("getGategories error",error);
    }
}