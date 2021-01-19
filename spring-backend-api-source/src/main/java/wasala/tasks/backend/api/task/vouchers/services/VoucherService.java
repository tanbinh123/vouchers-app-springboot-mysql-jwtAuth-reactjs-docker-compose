package wasala.tasks.backend.api.task.vouchers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import wasala.tasks.backend.api.task.vouchers.entities.*;
import wasala.tasks.backend.api.task.vouchers.helpers.FileUploader;
import wasala.tasks.backend.api.task.vouchers.reprositories.*;

import wasala.tasks.backend.api.task.vouchers.resources.PostVoucherBody;
import wasala.tasks.backend.api.task.vouchers.specifications.VoucherSpecs;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;


@Service
public class VoucherService {

    @Autowired
    private VoucherReprository voucherRep;
    @Autowired
    private UserReprository userRep;

    @Autowired
    private MerchantReprository merchantRep;
    @Autowired
    private UserVoucherReprository userVoucherRep;
    @Autowired
    private ConfigurationReprository configRep;
    @Autowired
    private CriteriaReprository criteriaRep;
    public Voucher createVoucher(PostVoucherBody body ) throws IOException {
        Merchant merchant=merchantRep.findById(body.merchantid).get();
        Voucher newVoucher=new Voucher();
        newVoucher.title=body.title;
        newVoucher.description=body.description;
        newVoucher.points=body.points;
        newVoucher.image=body.image;
        newVoucher.type=body.type;
        newVoucher.limit=body.limit;
        newVoucher.merchant=merchant;
        return voucherRep.save(newVoucher);
    }

    public Voucher updateVoucher(PostVoucherBody body , Long id)
    {
        Voucher voucher =voucherRep.findById(id).get();
        //update
        voucher.title=body.title;
        voucher.description=body.description;
        voucher.points=body.points;
        voucher.image=body.image;
        voucher.type=body.type;
        voucher.limit=body.limit;
        voucher.merchant.Id=body.merchantid;
        return voucherRep.save(voucher);
    }

    public Voucher getVoucher(Long id)
    {
        //validate data
        //select
        return voucherRep.findById(id).get();

    }

    public List<Voucher> listVouchers(String type, Long merchantid,String title , String description)
    {
        Specification typeSpec = VoucherSpecs.voucherTypeEquals(type);
        Specification merchantSpec = VoucherSpecs.voucherMerchantEquals(merchantid);
        Specification titleSpec = VoucherSpecs.voucherTitleLikess(title);
        Specification descriptionSpec = VoucherSpecs.voucherDescriptionLikess(description);
        Specification specs = Specification.where(typeSpec).and(merchantSpec).and(titleSpec).and(descriptionSpec);
        return voucherRep.findAll(specs);
    }

    public void deleteVoucher(Long id)
    {

        voucherRep.deleteById(id);
    }

    public void assignCriteria(Long voucherId , Long criteriaId)
    {

        Criteria criteria=criteriaRep.findById(criteriaId).get();
        Voucher voucher=voucherRep.findById(voucherId).get();
        voucher.Criterias.clear();
        voucher.Criterias.add(criteria);
        voucherRep.save(voucher);
    }

    public List<Voucher> listVouchersByUserId(Long userId){
    return voucherRep.findDeservedVouchersByUser_Id(userId);
    }

    public List<Voucher> listBoughtVouchersByUserId(Long userId){
        return userRep.findById(userId).get().Vouchers;
    }


    public void userBuyVoucher(Long userId, Long voucherId){
        Voucher v=voucherRep.findById(voucherId).get();
        User user=userRep.findById(userId).get();
        if(user.points>=v.points && v.limit>0)//can buy
        {
            user.points-=v.points;
            userRep.save(user);
            v.limit--;
            voucherRep.save(v);
            user_voucher u_v=new user_voucher();
            u_v.voucher_id=voucherId;
            u_v.user_id=userId;
            userVoucherRep.save(u_v);
        }

    }

}
