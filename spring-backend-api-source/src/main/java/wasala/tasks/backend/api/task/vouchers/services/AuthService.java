package wasala.tasks.backend.api.task.vouchers.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wasala.tasks.backend.api.task.vouchers.entities.Admin;
import wasala.tasks.backend.api.task.vouchers.entities.User;
import wasala.tasks.backend.api.task.vouchers.reprositories.AdminReprository;
import wasala.tasks.backend.api.task.vouchers.reprositories.UserReprository;
import wasala.tasks.backend.api.task.vouchers.resources.PostAdminBody;
import wasala.tasks.backend.api.task.vouchers.resources.PostUserBody;

@Service
public class AuthService {
    @Autowired
private AdminReprository adminRep;
    @Autowired
 private UserReprository userRep;

    public Admin createAdmin(PostAdminBody body)
    {
        //validate data
        //create
        Admin newAdmin=new Admin();
        newAdmin.username=body.username;
        newAdmin.password=body.password;
        return adminRep.save(newAdmin);

    }

    public User createUser(PostUserBody body)
    {
        //validate data
        //create
        User newUser=new User();
        return newUser;
        /*newUser.username=body.username;
        newUser.password=body.password;
        newUser.points=body.points;
        return userRep.save(newUser);*/

    }

}
