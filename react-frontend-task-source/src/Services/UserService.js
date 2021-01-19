import axios from "axios"
import authHeader from './auth-header';
import AuthService from "./auth.service";
const USER_DESERVED_Voucher_LIST_API_REST_API="http://localhost:8080/user/voucher/list/"
const USER_Buy_Voucher_REST_API="http://localhost:8080/user/voucher/buy/"
const USER_Purchased_Vouchers_REST_API="http://localhost:8080/user/voucher/list/bought/"
const USER_POINTS_REST_API="http://localhost:8080/user/points/"
class UserService{

    getDeservedVouchers(){
        
        return axios.get(USER_DESERVED_Voucher_LIST_API_REST_API+AuthService.getCurrentUser().id,  { headers: authHeader() });
    }

    buyVouchers(voucherId){
        return axios.post(USER_Buy_Voucher_REST_API+AuthService.getCurrentUser().id+"/"+voucherId, null, { headers: authHeader() });
    }

    purchasedVouchers(){
        return axios.get(USER_Purchased_Vouchers_REST_API+AuthService.getCurrentUser().id,  { headers: authHeader() });
    }

    getUserPoints(){
        return axios.get(USER_POINTS_REST_API+AuthService.getCurrentUser().id,  { headers: authHeader() });
    }

}

export default new UserService()