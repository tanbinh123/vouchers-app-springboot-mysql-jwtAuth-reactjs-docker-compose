package wasala.tasks.backend.api.task.vouchers.resources;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class PostUserBody {

    public String username;
    public String password;
    public Integer points;
}
