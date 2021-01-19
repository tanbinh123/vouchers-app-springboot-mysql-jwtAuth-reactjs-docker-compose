package wasala.tasks.backend.api.task.vouchers.reprositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wasala.tasks.backend.api.task.vouchers.entities.User;
import wasala.tasks.backend.api.task.vouchers.entities.Voucher;

import java.util.Optional;

@Repository
public interface UserReprository  extends JpaRepository<User,Long> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
