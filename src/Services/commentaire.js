import axios from "axios";
import App from "../App";

const API_URL = "http://localhost:8081/api/";

export const SaveComment=(commentaire)=>{
    axios.post(API_URL+"comments",commentaire)
}

export const GetRealisationCommments=async(realisation_id)=>{
    const resultats=await fetch(API_URL+"comments/"+realisation_id);
		const données=await resultats.json();
        console.log(données);
 
    return données;
}

const CommentsMethods={
    SaveComment,
    GetRealisationCommments
}

export default CommentsMethods;