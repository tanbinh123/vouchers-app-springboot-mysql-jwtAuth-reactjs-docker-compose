package wasala.tasks.backend.api.task.vouchers.reprositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wasala.tasks.backend.api.task.vouchers.entities.Voucher;
import wasala.tasks.backend.api.task.vouchers.entities.user_voucher;

@Repository
public interface UserVoucherReprository extends JpaRepository<user_voucher,Long> {
}
