package wasala.tasks.backend.api.task.vouchers.reprositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import wasala.tasks.backend.api.task.vouchers.entities.Voucher;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public interface VoucherReprository  extends JpaRepository<Voucher,Long> , JpaSpecificationExecutor<Voucher> {

    @Query(value = "select v.* \n" +
            "from vouchers as v  join vouchers_criterias\n" +
            "on v.id = vouchers_criterias.voucher_id\n" +
            "  join criterias\n" +
            "on criterias.id = vouchers_criterias.criteria_id \n" +
            "where criterias.name in \n" +
            "(select config_key from configurations where config_value <=(select sum(v.points) from users as u join users_vouchers on u.id = users_vouchers.user_id join vouchers as v on v.id = users_vouchers.voucher_id where u.id=?1))\n" +
            "union \n" +
            "SELECT v.*\n" +
            "from vouchers as v\n" +
            "where v.id not in (SELECT voucher_id FROM vouchers_criterias)",nativeQuery = true)
    List<Voucher> findDeservedVouchersByUser_Id(Long userId);
}