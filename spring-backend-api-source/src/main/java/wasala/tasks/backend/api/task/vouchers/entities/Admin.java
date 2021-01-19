package wasala.tasks.backend.api.task.vouchers.entities;

import javax.persistence.*;

@Entity
@Table(name = "admins")
public class Admin {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    public Long Id;

    @Column(name = "username")
    public String username;

    @Column(name = "password")
    public String password;


}
