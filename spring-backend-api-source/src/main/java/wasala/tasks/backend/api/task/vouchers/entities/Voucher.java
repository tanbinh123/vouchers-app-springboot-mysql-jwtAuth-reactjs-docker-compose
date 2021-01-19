package wasala.tasks.backend.api.task.vouchers.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "vouchers")
public class Voucher {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    public Long Id;

    @Column(name = "title")
    public String title;

    @Column(name = "description")
    public String description;

    @Column(name = "points")
    public Integer points;

    @Column(name = "image")
    public String image;

    @Column(name = "voucher_type")
    public String type;

    @Column(name = "voucher_limit")
    public Integer limit;

    @ManyToMany
    @JoinTable(
            name = "vouchers_criterias",
            joinColumns = @JoinColumn(name = "voucher_id"),
            inverseJoinColumns = @JoinColumn(name = "criteria_id"))
    public Set<Criteria> Criterias;






    @ManyToOne
    @JoinColumn(name = "merchant_id")
    public Merchant merchant;


}
