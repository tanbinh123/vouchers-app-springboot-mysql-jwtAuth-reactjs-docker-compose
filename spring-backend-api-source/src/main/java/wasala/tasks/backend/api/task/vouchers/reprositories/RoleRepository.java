package wasala.tasks.backend.api.task.vouchers.reprositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wasala.tasks.backend.api.task.vouchers.entities.ERole;
import wasala.tasks.backend.api.task.vouchers.entities.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
