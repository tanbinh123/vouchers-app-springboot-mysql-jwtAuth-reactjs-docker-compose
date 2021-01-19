package wasala.tasks.backend.api.task.vouchers.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import wasala.tasks.backend.api.task.vouchers.entities.User;
import wasala.tasks.backend.api.task.vouchers.entities.Voucher;
import wasala.tasks.backend.api.task.vouchers.reprositories.UserReprository;
import wasala.tasks.backend.api.task.vouchers.resources.PostUserBody;
import wasala.tasks.backend.api.task.vouchers.services.AuthService;
import wasala.tasks.backend.api.task.vouchers.services.VoucherService;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
public class UserController {

    @Autowired
    private AuthService authService;
    @Autowired
    private UserReprository userRep;
    @Autowired
    private VoucherService voucherService;
    //add user
    @PostMapping(value = "user/register")
    public ResponseEntity<User> postuser(@RequestBody PostUserBody body){
        //create user
        return new ResponseEntity<User>(authService.createUser(body), HttpStatus.OK) ;
    }

    //list criteria
    @GetMapping(value = "user/voucher/list/{userid}")
    public ResponseEntity<List<Voucher>> listvoucher(@PathVariable(value = "userid") Long userId){
        //create admin
        return new ResponseEntity<List<Voucher>>(voucherService.listVouchersByUserId(userId), HttpStatus.OK) ;
    }

    @PostMapping(value = "user/voucher/buy/{userid}/{voucherid}")
    public ResponseEntity postuser(@PathVariable(value = "userid") Long userid , @PathVariable(value = "voucherid") Long voucherid){

        voucherService.userBuyVoucher(userid,voucherid);
        return new ResponseEntity("done", HttpStatus.OK) ;
    }
    //list voucher
    @GetMapping(value = "user/voucher/list/bought/{userid}")
    public ResponseEntity<List<Voucher>> listboughtvoucher(@PathVariable(value = "userid") Long userId){
        //create admin
        return new ResponseEntity<List<Voucher>>(voucherService.listBoughtVouchersByUserId(userId), HttpStatus.OK) ;
    }

    @GetMapping(value = "user/points/{userid}")
    public ResponseEntity<Integer> userPoints(@PathVariable(value = "userid") Long userId){
        //create admin
        return new ResponseEntity<Integer>(userRep.findById(userId).get().points, HttpStatus.OK) ;
    }

}
