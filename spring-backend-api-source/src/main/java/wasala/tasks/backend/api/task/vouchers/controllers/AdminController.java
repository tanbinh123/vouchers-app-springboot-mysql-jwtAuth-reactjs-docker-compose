package wasala.tasks.backend.api.task.vouchers.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.stylesheets.LinkStyle;
import wasala.tasks.backend.api.task.vouchers.entities.*;
import wasala.tasks.backend.api.task.vouchers.resources.*;
import wasala.tasks.backend.api.task.vouchers.services.AdminService;
import wasala.tasks.backend.api.task.vouchers.services.AuthService;
import wasala.tasks.backend.api.task.vouchers.services.MerchantService;
import wasala.tasks.backend.api.task.vouchers.services.VoucherService;

import java.io.IOException;
import java.util.List;
@CrossOrigin
@RestController
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
    //dependancy
    @Autowired
    private MerchantService merchantService;
    @Autowired
    private AuthService authService;
    @Autowired
    private VoucherService voucherService;
    @Autowired
    private AdminService adminService;

    //add merchant
    @PostMapping(value = "admin/postmerchant")
    public ResponseEntity<Merchant> postmerchant(@RequestBody PostMerchantBody body){
        //create merchant
        return new ResponseEntity<Merchant>(merchantService.createMerchant(body), HttpStatus.OK) ;

    }
    //list merchants
    @GetMapping(value = "admin/merchant/list")
    public ResponseEntity<List<Merchant>> merchantlist(){
        //create merchant
        return new ResponseEntity<List<Merchant>>(merchantService.listMerchants(), HttpStatus.OK);

    }

    //add admin
    @PostMapping(value = "admin/postadmin")
    public ResponseEntity<Admin> postadmin(@RequestBody PostAdminBody body){
        //create admin
        return new ResponseEntity<Admin>(authService.createAdmin(body), HttpStatus.OK) ;

    }

    //add voucher
    @PostMapping(value = "admin/postvoucher")
    public ResponseEntity<Voucher> postvoucher(@RequestBody PostVoucherBody body ) throws IOException {
        //create admin
        return new ResponseEntity<Voucher>(voucherService.createVoucher(body), HttpStatus.OK) ;

    }

    //update voucher
    @PutMapping(value = "admin/putvoucher/{id}")
    public ResponseEntity<Voucher> putvoucher(@RequestBody PostVoucherBody body, @PathVariable(value = "id") Long id){
        //update voucher
        return new ResponseEntity<Voucher>(voucherService.updateVoucher(body,id), HttpStatus.OK) ;

    }

    //show voucher
    @GetMapping(value = "admin/voucher/show/{id}")
    public ResponseEntity<Voucher> showvoucher( @PathVariable(value = "id") Long id){
        //update voucher
        return new ResponseEntity<Voucher>(voucherService.getVoucher(id), HttpStatus.OK) ;

    }
    //list vouchers
    @GetMapping(value = "admin/voucher/list")
    public ResponseEntity<List<Voucher>> listvouchers(@RequestParam(required = false,value = "type") String type ,
                                                      @RequestParam(required = false ,value = "merchant") Long merchant,
                                                      @RequestParam(required = false ,value = "title") String title,
                                                      @RequestParam(required = false ,value = "description") String description
                                                      ){
        //update voucher
       return new ResponseEntity<List<Voucher>>(voucherService.listVouchers(type,merchant,title,description), HttpStatus.OK) ;

    }

    //delete voucher
    @DeleteMapping(value = "admin/voucher/delete/{id}")
    public ResponseEntity deleteVoucher( @PathVariable(value = "id") Long id){
        //delete voucher
        voucherService.deleteVoucher(id) ;
        return  ResponseEntity.ok("Done");
    }

    //add voucher
    @PostMapping(value = "admin/addconfiguration")
    public ResponseEntity<Configuration> postconfiguration(@RequestBody PostConfigurationBody body){
        //create admin
        return new ResponseEntity<Configuration>(adminService.createConfiguration(body), HttpStatus.OK) ;

    }

    @GetMapping(value = "admin/configuration/list")
    public ResponseEntity<List<Configuration>> configurationlist(){
        //create admin
        return new ResponseEntity<List<Configuration>>(adminService.listConfiguration(), HttpStatus.OK) ;

    }

    //add voucher
    @PostMapping(value = "admin/addcriteria")
    public ResponseEntity<Criteria> postconfiguration(@RequestBody PostCriteriaBody body){
        //create admin
        return new ResponseEntity<Criteria>(adminService.createCriteria(body), HttpStatus.OK) ;

    }
    //list criteria
    @GetMapping(value = "admin/criteria/list")
    public ResponseEntity<List<Criteria>> listcriteria(){
        //create admin
        return new ResponseEntity<List<Criteria>>(adminService.listCriteria(), HttpStatus.OK) ;

    }
    //assign criteria to a voucher
    @PostMapping(value = "admin/addcriteriatovoucher/{voucherid}/{criteriaid}")
    public void postconfiguration(@PathVariable(value = "voucherid") Long voucherId,
                                                      @PathVariable(value = "criteriaid") Long criteriaid
                                                      ){
        //assign creteria to voucher
        voucherService.assignCriteria(voucherId,criteriaid) ;
    }

}
