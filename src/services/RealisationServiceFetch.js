const REALISATIONS_API = 'http://localhost:8090/realisations'


class RealisationServiceFetch{
    getRealisations() {
        return fetch(REALISATIONS_API).then((res => res.json));
    }
}

export default RealisationServiceFetch();