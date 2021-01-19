import axios from "axios"
import authHeader from './auth-header';
const CONFIGURATION_LIST_API_REST_API="http://localhost:8080/admin/configuration/list"
const CONFIGURATION_CREATE_API_REST_API="http://localhost:8080/admin/addconfiguration"
class ConfigurationService{

    getConfiguratios(){
        return axios.get(CONFIGURATION_LIST_API_REST_API,  { headers: authHeader() });
    }
    saveConfiguration(configObject)
    {
       return axios.post(CONFIGURATION_CREATE_API_REST_API,configObject,  { headers: authHeader() });
    }
}

export default new ConfigurationService()