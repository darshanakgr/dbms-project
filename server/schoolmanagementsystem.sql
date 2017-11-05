-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2017 at 01:10 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolmanagementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `student_id` varchar(10) NOT NULL,
  `class_id` varchar(10) NOT NULL,
  `attend_date` date NOT NULL,
  `is_present` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` varchar(10) NOT NULL,
  `instrument_type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `instrument_type`) VALUES
('1000000000', 'imperdiet,'),
('1000000001', 'scelerisque'),
('1000000002', 'faucibus'),
('1000000003', 'sapien'),
('1000000004', 'pharetra.'),
('1000000005', 'libero'),
('1000000006', 'Cras'),
('1000000007', 'sem'),
('1000000008', 'In'),
('1000000009', 'malesuada');

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `class_id` varchar(10) NOT NULL,
  `class_year` year(4) NOT NULL,
  `class_time` time NOT NULL,
  `class_type` int(1) NOT NULL,
  `class_day` varchar(9) DEFAULT NULL,
  `class_room_id` varchar(10) DEFAULT NULL,
  `lesson_id` varchar(10) DEFAULT NULL,
  `teacher_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `classroom`
--

CREATE TABLE `classroom` (
  `class_room_id` varchar(10) NOT NULL,
  `building` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classroom`
--

INSERT INTO `classroom` (`class_room_id`, `building`) VALUES
('6000000000', 'neque vitae'),
('6000000007', 'risus quis'),
('6000000014', 'Nunc pulvinar'),
('6000000021', 'enim. Nunc'),
('6000000028', 'penatibus et'),
('6000000035', 'Integer eu'),
('6000000042', 'ullamcorper, velit'),
('6000000049', 'cursus luctus,'),
('6000000056', 'tempus eu,'),
('6000000063', 'natoque penatibus');

-- --------------------------------------------------------

--
-- Table structure for table `enrollment`
--

CREATE TABLE `enrollment` (
  `student_id` varchar(10) NOT NULL,
  `class_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `instrument`
--

CREATE TABLE `instrument` (
  `instrument_id` varchar(10) NOT NULL,
  `instrument_name` varchar(50) NOT NULL,
  `purchased_date` date DEFAULT NULL,
  `category_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `instrument`
--

INSERT INTO `instrument` (`instrument_id`, `instrument_name`, `purchased_date`, `category_id`) VALUES
('2000000000', 'vulputate', '0000-00-00', '1000000002'),
('2000000005', 'mollis', '0000-00-00', '1000000006'),
('2000000010', 'nec', '0000-00-00', '1000000002'),
('2000000015', 'fringilla', '0000-00-00', '1000000007'),
('2000000020', 'ultrices,', '0000-00-00', '1000000005'),
('2000000025', 'at,', '0000-00-00', '1000000007'),
('2000000030', 'Donec', '0000-00-00', '1000000006'),
('2000000035', 'eget,', '0000-00-00', '1000000007'),
('2000000040', 'dignissim', '0000-00-00', '1000000005'),
('2000000045', 'scelerisque', '0000-00-00', '1000000003'),
('2000000050', 'enim', '0000-00-00', '1000000002'),
('2000000055', 'lacus.', '0000-00-00', '1000000002'),
('2000000060', 'lobortis', '0000-00-00', '1000000008'),
('2000000065', 'leo', '0000-00-00', '1000000004'),
('2000000070', 'Phasellus', '0000-00-00', '1000000003'),
('2000000075', 'ullamcorper.', '0000-00-00', '1000000005'),
('2000000080', 'augue', '0000-00-00', '1000000008'),
('2000000085', 'Aliquam', '0000-00-00', '1000000000'),
('2000000090', 'magna', '0000-00-00', '1000000007'),
('2000000095', 'ornare,', '0000-00-00', '1000000005'),
('2000000100', 'Phasellus', '0000-00-00', '1000000002'),
('2000000105', 'Aenean', '0000-00-00', '1000000006'),
('2000000110', 'Aliquam', '0000-00-00', '1000000000'),
('2000000115', 'condimentum.', '0000-00-00', '1000000007'),
('2000000120', 'amet,', '0000-00-00', '1000000007'),
('2000000125', 'lectus', '0000-00-00', '1000000003'),
('2000000130', 'molestie', '0000-00-00', '1000000009'),
('2000000135', 'Donec', '0000-00-00', '1000000006'),
('2000000140', 'Duis', '0000-00-00', '1000000004'),
('2000000145', 'diam', '0000-00-00', '1000000004'),
('2000000150', 'pede,', '0000-00-00', '1000000006'),
('2000000155', 'Proin', '0000-00-00', '1000000003'),
('2000000160', 'orci', '0000-00-00', '1000000000'),
('2000000165', 'nibh', '0000-00-00', '1000000006'),
('2000000170', 'et', '0000-00-00', '1000000007'),
('2000000175', 'odio', '0000-00-00', '1000000008'),
('2000000180', 'elementum', '0000-00-00', '1000000006'),
('2000000185', 'sem', '0000-00-00', '1000000006'),
('2000000190', 'luctus', '0000-00-00', '1000000007'),
('2000000195', 'Sed', '0000-00-00', '1000000003'),
('2000000200', 'Sed', '0000-00-00', '1000000003'),
('2000000205', 'Morbi', '0000-00-00', '1000000000'),
('2000000210', 'convallis', '0000-00-00', '1000000005'),
('2000000215', 'dolor', '0000-00-00', '1000000006'),
('2000000220', 'tempus', '0000-00-00', '1000000001'),
('2000000225', 'scelerisque', '0000-00-00', '1000000000'),
('2000000230', 'semper', '0000-00-00', '1000000000'),
('2000000235', 'a,', '0000-00-00', '1000000004'),
('2000000240', 'molestie', '0000-00-00', '1000000002'),
('2000000245', 'Praesent', '0000-00-00', '1000000001');

-- --------------------------------------------------------

--
-- Table structure for table `lesson`
--

CREATE TABLE `lesson` (
  `lesson_id` varchar(10) NOT NULL,
  `lesson_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lesson`
--

INSERT INTO `lesson` (`lesson_id`, `lesson_name`) VALUES
('4000000000', 'sodales nisi magna'),
('4000000009', 'eget, venenatis a,'),
('4000000018', 'interdum. Curabitur dictum.'),
('4000000027', 'Vestibulum ante ipsum'),
('4000000036', 'aliquam arcu. Aliquam'),
('4000000045', 'Mauris blandit enim'),
('4000000054', 'neque vitae semper'),
('4000000063', 'leo. Morbi neque'),
('4000000072', 'pharetra, felis eget'),
('4000000081', 'Duis sit amet'),
('4000000090', 'consectetuer euismod est'),
('4000000099', 'lorem fringilla ornare'),
('4000000108', 'eleifend vitae, erat.'),
('4000000117', 'interdum libero dui'),
('4000000126', 'ac mattis velit'),
('4000000135', 'magna. Suspendisse tristique'),
('4000000144', 'sagittis felis. Donec'),
('4000000153', 'sed leo. Cras'),
('4000000162', 'Duis elementum, dui'),
('4000000171', 'lectus pede et');

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `parent_id` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `contact_no` int(9) DEFAULT NULL,
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`parent_id`, `name`, `contact_no`, `address`) VALUES
('3000000000', 'in faucibus', 772447594, 'Ap #261-1639 Egestas St.'),
('3000000009', 'ornare tortor', 778818064, 'P.O. Box 567, 1892 Nec Road'),
('3000000018', 'sem magna', 779482154, '203-6711 Lectus St.'),
('3000000027', 'diam nunc,', 775326404, '5307 Adipiscing St.'),
('3000000036', 'arcu. Sed', 773159909, '3713 Aliquet, Avenue'),
('3000000045', 'leo. Cras', 771399540, '6680 Congue. St.'),
('3000000054', 'faucibus orci', 776829132, '756-1755 Sagittis. Rd.'),
('3000000063', 'libero lacus,', 776363287, 'Ap #201-6069 Pharetra. Rd.'),
('3000000072', 'malesuada vel,', 771394849, '478-9118 Lorem St.'),
('3000000081', 'malesuada fames', 779664528, '441-6572 Massa Avenue'),
('3000000090', 'Phasellus fermentum', 772859765, 'P.O. Box 353, 1222 Urna. Ave'),
('3000000099', 'ac facilisis', 777793427, '893-5571 Donec St.'),
('3000000108', 'amet ornare', 770556911, 'P.O. Box 499, 7902 Egestas, Av.'),
('3000000117', 'libero. Proin', 779427053, '438-390 Ridiculus Road'),
('3000000126', 'tincidunt pede', 775106807, '255-7804 Vitae Rd.');

-- --------------------------------------------------------

--
-- Table structure for table `play`
--

CREATE TABLE `play` (
  `student_id` varchar(10) NOT NULL,
  `instrument_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sibling`
--

CREATE TABLE `sibling` (
  `student_id` varchar(10) NOT NULL,
  `sibling_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` varchar(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `register_date` date DEFAULT NULL,
  `mobile_no` int(9) DEFAULT NULL,
  `parent_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `name`, `gender`, `register_date`, `mobile_no`, `parent_id`) VALUES
('7000000000', 'Zahir Willis', 'Male', '0000-00-00', 772169163, '3000000000'),
('7000000009', 'Plato Franklin', 'Male', '0000-00-00', 778147230, '3000000009'),
('7000000018', 'Patrick Santiago', 'Male', '0000-00-00', 772331921, '3000000018'),
('7000000027', 'Knox Curtis', 'Male', '0000-00-00', 774123462, '3000000027'),
('7000000036', 'Fulton Ball', 'Male', '0000-00-00', 775496329, '3000000036'),
('7000000045', 'Armand Chaney', 'Male', '0000-00-00', 773268600, '3000000045'),
('7000000054', 'Harper Barker', 'Male', '0000-00-00', 777060952, '3000000054'),
('7000000063', 'Rashad Stark', 'Male', '0000-00-00', 773026955, '3000000063'),
('7000000072', 'Hamish Kim', 'Male', '0000-00-00', 772398958, '3000000072'),
('7000000081', 'Rigel Briggs', 'Male', '0000-00-00', 777297188, '3000000081'),
('7000000090', 'Stephanie Solis', 'Female', '0000-00-00', 773849338, '3000000090'),
('7000000099', 'Amelia Goodman', 'Female', '0000-00-00', 777174380, '3000000099'),
('7000000108', 'Naomi Humphrey', 'Female', '0000-00-00', 770555260, '3000000108'),
('7000000117', 'Kendall Chen', 'Female', '0000-00-00', 778497889, '3000000117'),
('7000000126', 'Cassandra Marquez', 'Female', '0000-00-00', 779719630, '3000000126');

-- --------------------------------------------------------

--
-- Table structure for table `studentpayment`
--

CREATE TABLE `studentpayment` (
  `payment_id` varchar(10) NOT NULL,
  `student_id` varchar(10) DEFAULT NULL,
  `amount` decimal(8,2) DEFAULT NULL,
  `paid_on` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacher_id` varchar(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `contact_no` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacher_id`, `name`, `contact_no`) VALUES
('5000000000', 'eros nec', 762810831),
('5000000008', 'pede ac', 798695489),
('5000000016', 'nulla magna,', 797958680),
('5000000024', 'fringilla ornare', 793401299),
('5000000032', 'mauris ut', 726423284),
('5000000040', 'nec, euismod', 773590809),
('5000000048', 'magna nec', 732344259),
('5000000056', 'mauris blandit', 791303299),
('5000000064', 'urna. Vivamus', 773454033),
('5000000072', 'augue. Sed', 751616672),
('5000000080', 'arcu. Vestibulum', 744152438),
('5000000088', 'Proin velit.', 755793028),
('5000000096', 'scelerisque neque.', 703546389),
('5000000104', 'nulla ante,', 737366211),
('5000000112', 'vehicula aliquet', 741828486);

-- --------------------------------------------------------

--
-- Table structure for table `teacherpayment`
--

CREATE TABLE `teacherpayment` (
  `payment_id` varchar(10) NOT NULL,
  `teacher_id` varchar(10) DEFAULT NULL,
  `amount` decimal(8,2) DEFAULT NULL,
  `paid_on` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(20) NOT NULL,
  `password` varchar(300) NOT NULL,
  `id` varchar(10) DEFAULT NULL,
  `access_level` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`student_id`,`class_id`,`attend_date`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`),
  ADD KEY `class_room_id` (`class_room_id`),
  ADD KEY `lesson_id` (`lesson_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`class_room_id`);

--
-- Indexes for table `enrollment`
--
ALTER TABLE `enrollment`
  ADD PRIMARY KEY (`student_id`,`class_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `instrument`
--
ALTER TABLE `instrument`
  ADD PRIMARY KEY (`instrument_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`lesson_id`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`parent_id`);

--
-- Indexes for table `play`
--
ALTER TABLE `play`
  ADD PRIMARY KEY (`student_id`,`instrument_id`),
  ADD KEY `instrument_id` (`instrument_id`);

--
-- Indexes for table `sibling`
--
ALTER TABLE `sibling`
  ADD PRIMARY KEY (`student_id`,`sibling_id`),
  ADD KEY `sibling_id` (`sibling_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Indexes for table `studentpayment`
--
ALTER TABLE `studentpayment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`);

--
-- Indexes for table `teacherpayment`
--
ALTER TABLE `teacherpayment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `class_ibfk_1` FOREIGN KEY (`class_room_id`) REFERENCES `classroom` (`class_room_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `class_ibfk_2` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`lesson_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `class_ibfk_3` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON UPDATE CASCADE;

--
-- Constraints for table `enrollment`
--
ALTER TABLE `enrollment`
  ADD CONSTRAINT `enrollment_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enrollment_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `instrument`
--
ALTER TABLE `instrument`
  ADD CONSTRAINT `instrument_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `play`
--
ALTER TABLE `play`
  ADD CONSTRAINT `play_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `play_ibfk_2` FOREIGN KEY (`instrument_id`) REFERENCES `instrument` (`instrument_id`) ON UPDATE CASCADE;

--
-- Constraints for table `sibling`
--
ALTER TABLE `sibling`
  ADD CONSTRAINT `sibling_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sibling_ibfk_2` FOREIGN KEY (`sibling_id`) REFERENCES `student` (`student_id`) ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `parent` (`parent_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `studentpayment`
--
ALTER TABLE `studentpayment`
  ADD CONSTRAINT `studentpayment_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON UPDATE CASCADE;

--
-- Constraints for table `teacherpayment`
--
ALTER TABLE `teacherpayment`
  ADD CONSTRAINT `teacherpayment_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
