import axios from "axios"
import authHeader from './auth-header';
const CRITERIA_LIST_API_REST_API="http://localhost:8080/admin/criteria/list"
const CRITERIA_CREATE_API_REST_API="http://localhost:8080/admin/addcriteria"
class CriteriaService{

    getCriterias(){
        return axios.get(CRITERIA_LIST_API_REST_API,  { headers: authHeader() });
    }
    saveCriteria(configObject)
    {
       return axios.post(CRITERIA_CREATE_API_REST_API,configObject,  { headers: authHeader() });
    }
}

export default new CriteriaService()