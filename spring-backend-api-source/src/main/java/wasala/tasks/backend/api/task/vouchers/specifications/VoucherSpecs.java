package wasala.tasks.backend.api.task.vouchers.specifications;

import org.springframework.data.jpa.domain.Specification;
import wasala.tasks.backend.api.task.vouchers.entities.Voucher;

public class VoucherSpecs {
    public static Specification<Voucher> voucherTypeEquals(String type) {
        return (root, query, builder) ->
                type == null ?
                        builder.conjunction() :
                        builder.equal(root.get("type"), type);
    }

    public static Specification<Voucher> voucherMerchantEquals(Long id) {
        return (root, query, builder) ->
                id == null ?
                        builder.conjunction() :
                        builder.equal(root.get("merchant"), id);
    }
    public static Specification<Voucher> voucherTitleLikess(String title) {
        return (root, query, builder) ->
                title == null ?
                        builder.conjunction() :
                        builder.like(root.get("title"), "%"+title+"%");
    }
    public static Specification<Voucher> voucherDescriptionLikess(String description) {
        return (root, query, builder) ->
                description == null ?
                        builder.conjunction() :
                        builder.like(root.get("title"), "%"+description+"%");
    }
}
