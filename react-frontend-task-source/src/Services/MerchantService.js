import axios from "axios"
import authHeader from './auth-header';
const MERHCANT_LIST_API_REST_API="http://localhost:8080/admin/merchant/list"
const MERHCANT_CREATE_API_REST_API="http://localhost:8080/admin/postmerchant"
class MerchantService{

    getMerchants(){
        return axios.get(MERHCANT_LIST_API_REST_API ,  { headers: authHeader() });
    }
    saveMerchant(merchantObject)
    {
       return axios.post(MERHCANT_CREATE_API_REST_API,merchantObject, { headers: authHeader() });
    }
}

export default new MerchantService()