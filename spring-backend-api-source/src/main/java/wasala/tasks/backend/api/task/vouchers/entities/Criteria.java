package wasala.tasks.backend.api.task.vouchers.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "criterias")
public class Criteria {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    public Long Id;

    @Column(name = "name")
    public String name;


}
