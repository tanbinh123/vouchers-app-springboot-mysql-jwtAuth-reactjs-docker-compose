import AuthService from "./auth.service";
class ISADMINCHECKER{

    isAdmin(){
      let currentUser= AuthService.getCurrentUser();
      
      if(currentUser && currentUser.roles && currentUser.roles[0]==="ROLE_ADMIN")
         return true;
         return false;
    }
}

export default new ISADMINCHECKER()