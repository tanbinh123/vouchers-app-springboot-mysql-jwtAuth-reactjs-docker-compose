-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2021 at 07:50 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
SET foreign_key_checks = 0;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wasla_task_vouchers_db`
--

--
-- Dumping data for table `configurations`
--

delete from `configurations`;
INSERT INTO `configurations` (`id`, `config_key`, `config_value`) VALUES
(1, 'Silver', '2'),
(2, 'Gold', '4'),
(3, 'Platinum', '8');

--
-- Dumping data for table `criterias`
--

delete  from `criterias`;
INSERT INTO `criterias` (`id`, `name`) VALUES
(2, 'Silver'),
(3, 'Gold'),
(4, 'Platinum');

--
-- Dumping data for table `merchants`
--

delete  from `merchants`;
INSERT INTO `merchants` (`id`, `name`) VALUES
(1, 'merchant 1'),
(2, 'merchant 2'),
(3, 'merchant 3');

--
-- Dumping data for table `roles`
--
delete  from `roles`;
INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(3, 'ROLE_ADMIN');

--
-- Dumping data for table `users`
--
delete  from `users`;
INSERT INTO `users` (`id`, `password`, `points`, `username`,  `email`) VALUES
(2, '$2a$10$sgZJjYIeQM9IJiaS4Qb/I.XImuBG5ZfE5EfB.NFhQf3HKYbT3b0vq', 5, 'tariqsenosy',  'tariqsenosy@gmail.com'),
(3, '$2a$10$rjWH9CfC7GRJplRAYqrUCO2sG0ugtYaMyYitVuAsy0tYWiUhWqa1G', NULL, 'admin',  'admin@wasla.com');

--
-- Dumping data for table `user_roles`
--
delete  from `user_roles`;
INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(2, 1),
(3, 3);

--
-- Dumping data for table `vouchers`
--
delete  from `vouchers`;
INSERT INTO `vouchers` (`id`, `description`, `image`, `voucher_limit`, `merchant_id`, `points`, `title`, `voucher_type`) VALUES
(1, 'description of voucher 1', 'default.jpg', 95, 1, 1, 'voucher 1', 'discount'),
(2, 'description of voucher 2', 'default.jpg', 994, 2, 5, 'voucher 2', 'discount'),
(3, 'description of voucher 3', 'default.jpg', 98, 3, 7, 'voucher 3', 'discount'),
(4, 'description of voucher 4', 'default.jpg', 199, 1, 8, 'voucher 4', 'gift'),
(5, 'description of voucher 5', 'default.jpg', 299, 2, 10, 'voucher 5', 'discount'),
(6, 'description of voucher 6', 'default.jpg', 399, 3, 4, 'voucher 6', 'gift'),
(7, 'description of voucher 7', 'default.jpg', 100, 2, 6, 'voucher 7', 'discount'),
(8, 'description of voucher 8', 'default.jpg', 9, 1, 8, 'voucher 8', 'gift'),
(9, 'description of voucher 9', 'default.jpg', 10, 1, 9, 'voucher 9', 'gift');

--
-- Dumping data for table `vouchers_criterias`
--
delete  from `vouchers_criterias`;
INSERT INTO `vouchers_criterias` (`criteria_id`, `voucher_id`) VALUES
(3, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
