import Axios from "axios";
const api = Axios.create({
    baseURL: "https://breakingbadapi.com/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
    }
})

api.defaults.timeout = 15000;


export const callApi = async (dataType) => {
    
    const request = api.get(`/${dataType}`);
    const response = await request;
    const data = response.data;
    return data;
}
