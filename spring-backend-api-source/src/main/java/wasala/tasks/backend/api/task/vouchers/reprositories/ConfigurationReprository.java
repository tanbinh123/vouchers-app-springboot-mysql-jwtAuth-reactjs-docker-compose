package wasala.tasks.backend.api.task.vouchers.reprositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import wasala.tasks.backend.api.task.vouchers.entities.Configuration;


@Repository
public interface ConfigurationReprository extends JpaRepository<Configuration,Long>, JpaSpecificationExecutor<Configuration> {

}
