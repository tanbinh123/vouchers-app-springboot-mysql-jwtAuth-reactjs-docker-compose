import axios from "axios"
import authHeader from './auth-header';
const Voucher_LIST_API_REST_API="http://localhost:8080/admin/voucher/list"
const Voucher_SHOW_API_REST_API="http://localhost:8080/admin/voucher/show/"
const Voucher_CREATE_API_REST_API="http://localhost:8080/admin/postvoucher"
const Voucher_UPDATE_API_REST_API="http://localhost:8080/admin/putvoucher/"
const Voucher_DELETE_API_REST_API="http://localhost:8080/admin/voucher/delete/"
const Voucher_ASSIGN_CRITERIA_DELETE_API_REST_API="http://localhost:8080/admin/addcriteriatovoucher/"
class VoucherService{

   addVoucherCriteria(voucherId,criteriaId){

      return axios.post(Voucher_ASSIGN_CRITERIA_DELETE_API_REST_API+voucherId+"/"+criteriaId,null,{ headers: authHeader() });

   }
    getVouchers(){
        return axios.get(Voucher_LIST_API_REST_API,  { headers: authHeader() });
    }
    getVouchersWithFilters(filters){
        return axios.get(Voucher_LIST_API_REST_API+"?"+filters,  { headers: authHeader() });
    }
    saveVoucher(voucherObject)
    {
       console.log(voucherObject);
       return axios.post(Voucher_CREATE_API_REST_API,voucherObject,  { headers: authHeader() });
    }
    getVoucherById(id){
       // console.log(Voucher_SHOW_API_REST_API+id);
      return axios.get(Voucher_SHOW_API_REST_API+id,  { headers: authHeader() });
    }
    updateVoucher(id,voucherObject)
    {
       return axios.put(Voucher_UPDATE_API_REST_API+id,voucherObject,  { headers: authHeader() });
    }
    deleteVoucher(id)
    {
       return axios.delete(Voucher_DELETE_API_REST_API+id,  { headers: authHeader() });
    }
}

export default new VoucherService()