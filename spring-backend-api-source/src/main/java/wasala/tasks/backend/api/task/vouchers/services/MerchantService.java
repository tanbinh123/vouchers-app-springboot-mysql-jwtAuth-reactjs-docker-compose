package wasala.tasks.backend.api.task.vouchers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wasala.tasks.backend.api.task.vouchers.entities.Merchant;
import wasala.tasks.backend.api.task.vouchers.reprositories.MerchantReprository;
import wasala.tasks.backend.api.task.vouchers.resources.PostMerchantBody;

import java.util.List;

@Service
public class MerchantService {

    @Autowired
    private MerchantReprository merchantRep;
    public Merchant createMerchant(PostMerchantBody body)
    {
        //validate data

        //crete
        Merchant newMerchant=new Merchant();
        newMerchant.name=body.name;
        return merchantRep.save(newMerchant);

    }

    public List<Merchant> listMerchants()
    {
        //validate data
        //crete
   return merchantRep.findAll();

    }



}
