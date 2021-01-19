package wasala.tasks.backend.api.task.vouchers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wasala.tasks.backend.api.task.vouchers.entities.Admin;
import wasala.tasks.backend.api.task.vouchers.entities.Configuration;
import wasala.tasks.backend.api.task.vouchers.entities.Criteria;
import wasala.tasks.backend.api.task.vouchers.entities.Merchant;
import wasala.tasks.backend.api.task.vouchers.reprositories.AdminReprository;
import wasala.tasks.backend.api.task.vouchers.reprositories.ConfigurationReprository;
import wasala.tasks.backend.api.task.vouchers.reprositories.CriteriaReprository;
import wasala.tasks.backend.api.task.vouchers.reprositories.MerchantReprository;
import wasala.tasks.backend.api.task.vouchers.resources.PostAdminBody;
import wasala.tasks.backend.api.task.vouchers.resources.PostConfigurationBody;
import wasala.tasks.backend.api.task.vouchers.resources.PostCriteriaBody;
import wasala.tasks.backend.api.task.vouchers.resources.PostMerchantBody;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private ConfigurationReprository configRep;
    @Autowired
    private CriteriaReprository criteriaRep;
    public Configuration createConfiguration(PostConfigurationBody body)
    {
        Configuration config=new Configuration();
        config.configkey=body.key;
        config.configvalue=body.value;

        return configRep.save(config);
    }

    public List<Configuration> listConfiguration(){

        return configRep.findAll();
    }


    public Criteria createCriteria(PostCriteriaBody body)
    {
        Criteria criteria=new Criteria();
        criteria.name=body.name;


        return criteriaRep.save(criteria);
    }

    public List<Criteria> listCriteria(){

        return criteriaRep.findAll();
    }
}
