package wasala.tasks.backend.api.task.vouchers.specifications;

import org.springframework.data.jpa.domain.Specification;
import wasala.tasks.backend.api.task.vouchers.entities.Configuration;
import wasala.tasks.backend.api.task.vouchers.entities.Voucher;

public class ConfigSpecs {
    public static Specification<Configuration> configValuelessThanOrEqual(Integer userPoints) {
        return (root, query, builder) ->
                userPoints == 0 ?
                        builder.conjunction() :
                        builder.lessThanOrEqualTo(root.get("key"), userPoints);
    }
}
