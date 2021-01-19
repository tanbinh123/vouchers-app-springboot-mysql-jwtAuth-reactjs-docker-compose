package wasala.tasks.backend.api.task.vouchers.entities;

import javax.persistence.*;

@Entity
@Table(name = "configurations")
public class Configuration {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    public Long Id;

    @Column(name = "config_key")
    public String configkey;

    @Column(name = "config_value")
    public String configvalue;
}
