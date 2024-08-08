-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: job1
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `job_details`
--

DROP TABLE IF EXISTS `job_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_details` (
  `id` char(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `salary` varchar(255) NOT NULL,
  `skills` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `dateOfPost` date NOT NULL,
  `lastDate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_details`
--

LOCK TABLES `job_details` WRITE;
/*!40000 ALTER TABLE `job_details` DISABLE KEYS */;
INSERT INTO `job_details` VALUES ('10','Content Writer','Creating engaging content for websites, blogs, and social media platforms','Denver','72000','Content Writing, SEO, Copywriting','Marketing','2024-07-10','2024-09-08'),('101','Software Engineer','Developing web applications using React and Node.js','New York','80000','React, Node.js, JavaScript','IT','2024-07-02','2024-08-31'),('11','Database Administrator','Managing databases and ensuring data security and integrity','Phoenix','86000','Database Management, SQL Server, MySQL','IT','2024-07-11','2024-09-09'),('111','Full Stack Developer','We are looking for a Full Stack Developer to build scalable web applications.','San Francisco, CA','$120,000 - $140,000','JavaScript,React,Node.js,Express,MongoDB','Software Development','2024-06-01','2024-07-01'),('112','Digital Marketing Specialist','We need a Digital Marketing Specialist to manage our online marketing campaigns.','New York, NY','$70,000 - $90,000','SEO,Google Analytics,Social Media Marketing,Content Marketing','Marketing','2024-06-15','2024-07-15'),('113','Financial Analyst','Seeking a Financial Analyst to analyze financial data and create financial models.','Chicago, IL','$80,000 - $100,000','Financial Analysis,Excel,Data Analysis,Financial Modeling','Finance','2024-06-10','2024-07-10'),('114','Graphic Designer','Hiring a Graphic Designer to create visual concepts and designs for our brand.','Los Angeles, CA','$60,000 - $80,000','Photoshop,Illustrator,InDesign,Creative Suite','Design','2024-06-20','2024-07-20'),('115','Backend Developer','Looking for a Backend Developer to develop and maintain server-side logic.','Austin, TX','$110,000 - $130,000','Node.js,Express,SQL,NoSQL,REST APIs','Software Development','2024-06-05','2024-07-05'),('116','Content Writer','Content Writer needed to create engaging and informative content for our website.','Remote','$50,000 - $70,000','Writing,Editing,SEO,Content Management Systems','Marketing','2024-06-18','2024-07-18'),('117','Data Scientist','Seeking a Data Scientist to analyze large datasets and develop data-driven solutions.','Boston, MA','$130,000 - $150,000','Python,Machine Learning,Data Analysis,Statistics','Finance','2024-06-12','2024-07-12'),('118','UX/UI Designer','Hiring a UX/UI Designer to create user-friendly and visually appealing interfaces.','Seattle, WA','$90,000 - $110,000','Sketch,Figma,User Research,Prototyping','Design','2024-06-25','2024-07-25'),('119','Product Manager','Looking for a Product Manager to oversee product development and strategy.','Denver, CO','$120,000 - $140,000','Product Management,Agile,Project Management,Leadership','Software Development','2024-06-08','2024-07-08'),('12','Project Manager','Planning, organizing, and managing projects to meet specific goals','Houston','91000','Project Management, Leadership, Risk Management','Project Management','2024-07-12','2024-09-10'),('13','Sales Executive','Selling products or services to businesses or consumers','San Diego','94000','Sales, Negotiation, Customer Relationship Management','Sales','2024-07-13','2024-09-11'),('14','Legal Counsel','Providing legal advice and representing clients in legal matters','Washington D.C.','98000','Legal Counsel, Litigation, Contract Law','Legal','2024-07-14','2024-09-12'),('15','Quality Assurance Tester','Testing software applications to ensure quality and functionality','Atlanta','76000','QA Testing, Automated Testing, Bug Tracking','IT','2024-07-15','2024-09-13'),('2','Data Analyst','Analyzing data trends and preparing reports using SQL and Python','San Francisco','75000','SQL, Python, Data Analysis','Data','2024-07-01','2024-08-30'),('201','Full Stack Developer','We are looking for a Full Stack Developer to build scalable web applications.','San Francisco, CA','120000','JavaScript,React,Node.js,Express,MongoDB','Software Development','2024-06-01','2024-07-01'),('212','Digital Marketing Specialist','We need a Digital Marketing Specialist to manage our online marketing campaigns.','New York, NY','70000','SEO,Google Analytics,Social Media Marketing,Content Marketing','Marketing','2024-06-15','2024-07-15'),('213','Financial Analyst','Seeking a Financial Analyst to analyze financial data and create financial models.','Chicago, IL','80000','Financial Analysis,Excel,Data Analysis,Financial Modeling','Finance','2024-06-10','2024-07-10'),('214','Graphic Designer','Hiring a Graphic Designer to create visual concepts and designs for our brand.','Los Angeles, CA','60000','Photoshop,Illustrator,InDesign,Creative Suite','Design','2024-06-20','2024-07-20'),('215','Backend Developer','Looking for a Backend Developer to develop and maintain server-side logic.','Austin, TX','110000','Node.js,Express,SQL,NoSQL,REST APIs','Software Development','2024-06-05','2024-07-05'),('216','Content Writer','Content Writer needed to create engaging and informative content for our website.','Remote','50000','Writing,Editing,SEO,Content Management Systems','Marketing','2024-06-18','2024-07-18'),('217','Data Scientist','Seeking a Data Scientist to analyze large datasets and develop data-driven solutions.','Boston, MA','130000','Python,Machine Learning,Data Analysis,Statistics','Finance','2024-06-12','2024-07-12'),('218','UX/UI Designer','Hiring a UX/UI Designer to create user-friendly and visually appealing interfaces.','Seattle, WA','90000','Sketch,Figma,User Research,Prototyping','Design','2024-06-25','2024-07-25'),('219','Product Manager','Looking for a Product Manager to oversee product development and strategy.','Denver, CO','120000','Product Management,Agile,Project Management,Leadership','Software Development','2024-06-08','2024-07-08'),('3','Marketing Manager','Creating marketing campaigns and strategies for new product launches','Los Angeles','90000','Marketing Strategy, Campaign Management','Marketing','2024-07-03','2024-09-01'),('4','Backend Developer','Building robust server-side applications with Java and Spring Boot','Seattle','85000','Java, Spring Boot, RESTful APIs','IT','2024-07-04','2024-09-02'),('5','UX/UI Designer','Designing user interfaces and improving user experience','Chicago','78000','UI/UX Design, Adobe XD, Sketch','Design','2024-07-05','2024-09-03'),('6','Financial Analyst','Performing financial modeling and analysis for investment decisions','Boston','82000','Financial Analysis, Excel, Bloomberg Terminal','Finance','2024-07-06','2024-09-04'),('7','Product Manager','Managing product development lifecycle and prioritizing features','Austin','95000','Product Management, Agile, Scrum','Product Management','2024-07-07','2024-09-05'),('8','Network Engineer','Configuring and maintaining computer networks for optimal performance','Dallas','88000','Network Engineering, Cisco, LAN/WAN','IT','2024-07-08','2024-09-06'),('9','HR Manager','Overseeing recruitment, training, and employee relations','Miami','89000','Human Resources, Recruitment, Employee Relations','Human Resources','2024-07-09','2024-09-07');
/*!40000 ALTER TABLE `job_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-25 10:21:37
