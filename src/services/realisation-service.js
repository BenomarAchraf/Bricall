import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/api/realisations/";
const API_URL1 = "http://localhost:8081/api/";


const getAllRealisations= () => {
  return axios.get(API_URL + "allRealisations");
};
const addRealisation = (titre, description, category,image,user) => {
  return axios.post(
    API_URL1 + "addRealisation",
    {  titre, description, category,image,user },
    { headers: authHeader() }



  );
};
const getRealisationByid= (id) => {
  return axios.get(API_URL + "Realisations/" + id);
};


const realisation_service = {
    getAllRealisations,
    addRealisation,
    getRealisationByid,
  
};

export default realisation_service;