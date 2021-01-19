package wasala.tasks.backend.api.task.vouchers.reprositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wasala.tasks.backend.api.task.vouchers.entities.Admin;
@Repository
public interface AdminReprository extends JpaRepository<Admin,Long> {

}
