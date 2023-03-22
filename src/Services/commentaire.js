import axios from "axios";
import App from "../App";

const API_URL = "http://localhost:8081/api/";

const SaveComment=(commentaire)=>{
    axios.post(API_URL+"comments",commentaire)
}

const GetRealisationCommments=(realisation_id)=>{
    axios.get(API_URL+"comments/"+realisation_id)
}

const CommentsMethods={
    SaveComment,
    GetRealisationCommments
}

export default CommentsMethods;