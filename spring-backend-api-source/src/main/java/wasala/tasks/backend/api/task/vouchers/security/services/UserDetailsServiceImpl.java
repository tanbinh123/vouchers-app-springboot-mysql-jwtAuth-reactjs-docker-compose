package wasala.tasks.backend.api.task.vouchers.security.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import wasala.tasks.backend.api.task.vouchers.entities.User;
import wasala.tasks.backend.api.task.vouchers.reprositories.UserReprository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserReprository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}

}
