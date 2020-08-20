import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/v1/accidents';

class AccidentService {

    getAccidents() {
        return axios.get(USERS_REST_API_URL);
    }
}

export default new AccidentService();