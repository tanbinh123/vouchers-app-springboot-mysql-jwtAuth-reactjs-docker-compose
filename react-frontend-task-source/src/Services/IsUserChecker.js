import AuthService from "./auth.service";
class ISUSERCHECKER{

    isUser(){
      let currentUser= AuthService.getCurrentUser();
     
      if(currentUser && currentUser.roles && currentUser.roles[0]==="ROLE_USER")
         return true;
         return false;
    }
}

export default new ISUSERCHECKER()