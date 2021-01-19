package wasala.tasks.backend.api.task.vouchers.reprositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wasala.tasks.backend.api.task.vouchers.entities.Merchant;

@Repository
public interface MerchantReprository  extends JpaRepository<Merchant,Long> {
}