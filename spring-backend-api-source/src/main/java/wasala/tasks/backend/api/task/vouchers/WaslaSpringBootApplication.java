package wasala.tasks.backend.api.task.vouchers;


import org.hibernate.Session;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import wasala.tasks.backend.api.task.vouchers.entities.ERole;
import wasala.tasks.backend.api.task.vouchers.entities.Role;
import wasala.tasks.backend.api.task.vouchers.entities.User;
import wasala.tasks.backend.api.task.vouchers.reprositories.RoleRepository;
import wasala.tasks.backend.api.task.vouchers.reprositories.UserReprository;

import java.util.Collections;
import java.util.Set;

@EnableSwagger2
@SpringBootApplication
public class WaslaSpringBootApplication {
@Autowired
private UserReprository userRep;

	@Autowired
	private RoleRepository roleRep;

	public static void main(String[] args) {
		SpringApplication.run(WaslaSpringBootApplication.class, args);
	}


	@Bean
	public Docket SwaggerConfiguration(){
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				//	.paths(PathSelectors.ant("/admin"))
				//	.paths(PathSelectors.ant("/user"))
				//	.apis(RequestHandlerSelectors.basePackage("wasla.tasks.backend.api.task.vouchers.controllers"))
				.build()
				.apiInfo(apiInfo());

	}
	private ApiInfo apiInfo() {
		return new ApiInfo(
				"Wasla Api",
				"Voucher api for Wasla",
				"1.0",
				"Terms of service",
				new Contact("Tariq Senosy", "https://github.com/tariqsenosy", "tariqsenosy@gmail.com"),
				"License of API", "API license URL", Collections.emptyList());
	}



}