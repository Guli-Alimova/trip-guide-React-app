import axiosClient from "./axiosClient";


const apiCalls = {
    getTours: () => {
        return axiosClient.get(`tours`);
    },
    getHotels: () => {
        return axiosClient.get(`hotels`);
    },

    getHotelDetail: (id) => {
        return axiosClient.get(`hotels/${id}`);
    },
    getCities: () => {
        return axiosClient.get(`cities`);
    },
    getExplore: () => {
        return axiosClient.get(`explore`);
    },
    
  
   getPopular: () => {
        return axiosClient.get(`Popular`);
    },
    getProperty: () => {
        return axiosClient.get(`Property`);
    },
    getBudget: () => {
        return axiosClient.get(`Budget`);
    },
    getFacilities: () => {
        return axiosClient.get(`Facilities`);
    },
}

export default apiCalls;