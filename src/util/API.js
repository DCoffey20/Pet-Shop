import axios from "axios";

const BASEURL = "https://petstore.swagger.io/v2/pet/";
const GETSTATUS = "findByStatus?status="

export default {
    getPetsData: function(status){
        return axios.get(BASEURL + GETSTATUS + status);
    },

    updatePetStatus: function(pet){
        pet.status = "sold";
        return axios.put(BASEURL , pet)
    }
    
};