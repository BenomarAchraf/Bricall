import axios from "axios";
import App from "../App";

const API_URL = "http://localhost:8081/api/";

const SaveRealisation = (Titre, Description, category,Image, user) => {

    return axios.post(API_URL+"realisations",{
        Titre, Description, category,Image, user
    })
  };

const GetRealisation = ()=>{
    axios.get(API_URL+"realisations")
    .then((response) => {
        return response.data;
      });
}  

const GetAlluserRealisation=(user)=>{
    axios.get(API_URL+"users/"+user.id).then((response) => {
        return response.data;
      });
}

export const GetCategories=()=>{
    return axios.get(API_URL+"categories")
   
}

export const GetRealisationsCategorie=(categorie)=>{
    return axios.get(API_URL+"categories/"+categorie)

      
} 

export const GetCategoriesByresearch=(research)=>{
    console.log(research);
    console.log(API_URL+"categories/categorie?research="+research)
    return axios.get(API_URL+"categories/categorie?research="+research)
}
export const GetCategoriesByresearch1=async(research)=>{
        const resultats=await fetch(API_URL+"categories/categorie?research="+research);
		const données= await resultats.json();
 
    return données;
}

export const GetRealisationsByresearch=async(research,categorie)=>{
      const resultats=await fetch(API_URL+"realisations/"+research+"?categorie="+categorie);
		const données=await resultats.json();
        console.log(API_URL+"realisations/"+research+"?categorie="+categorie)
 
    return données;
}


const RealisationsMethods={
    SaveRealisation,
    GetRealisation,
    GetAlluserRealisation,
    GetCategories,
    GetRealisationsCategorie,
    GetRealisationsByresearch
}

export default RealisationsMethods;