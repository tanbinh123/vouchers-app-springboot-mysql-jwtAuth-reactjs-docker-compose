package wasala.tasks.backend.api.task.vouchers.entities;

import javax.persistence.*;

@Entity
@Table(name = "users_vouchers")
public class user_voucher {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    public Long Id;

    @Column(name = "voucher_id")
    public Long voucher_id;

    @Column(name = "user_id")
    public Long user_id;
}
