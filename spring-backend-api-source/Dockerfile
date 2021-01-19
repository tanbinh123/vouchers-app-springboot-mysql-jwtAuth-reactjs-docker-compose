#### Stage 1: Build the application
FROM openjdk:8
ADD /target/spring-backend-api-source.jar spring-backend-api-source.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","spring-backend-api-source.jar"]