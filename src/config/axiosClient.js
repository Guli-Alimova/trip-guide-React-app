import axios from 'axios';


 const AxiosClient = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Content-Type': 'application/json'
    },
    
   
 });
 
AxiosClient.interceptors.request.use(async (config) => config);

AxiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default AxiosClient;