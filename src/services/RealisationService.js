import axios from 'axios'

const REALISATIONS_API = 'http://localhost:8081/api/realisations'
class RealisationService{
    getRealisations() {
        return axios.get(REALISATIONS_API);
    }
}
export default new RealisationService();