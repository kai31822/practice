-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生日期: 2014 年 05 月 21 日 05:44
-- 伺服器版本: 5.6.12-log
-- PHP 版本: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫: `ch08`
--
CREATE DATABASE IF NOT EXISTS `ch08` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `ch08`;

-- --------------------------------------------------------

--
-- 表的結構 `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `書籍編號` int(11) NOT NULL AUTO_INCREMENT,
  `書籍名稱` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `價格` decimal(6,2) NOT NULL,
  `負責員工編號` int(11) NOT NULL,
  PRIMARY KEY (`書籍編號`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- 轉存資料表中的資料 `books`
--

INSERT INTO `books` (`書籍編號`, `書籍名稱`, `價格`, `負責員工編號`) VALUES
(1, '打開 Mac 新世界', '420.00', 2),
(2, '眼球運動視力鍛鍊', '350.00', 4),
(3, 'HTML5 程式設計範例字典', '520.00', 3),
(4, 'Word 使用手冊', '300.00', 8),
(5, '抓住你的 Photoshop', '450.00', 1),
(6, 'Windows 非常 EASY', '500.00', 2),
(7, 'EXECL 快速入門', '350.00', 6),
(8, 'PHP 程式語言', '460.00', 2),
(9, '卡娃依彩繪世界', '280.00', 7),
(10, 'Android 程式設計', '480.00', 5);

-- --------------------------------------------------------

--
-- 表的結構 `company1`
--

CREATE TABLE IF NOT EXISTS `company1` (
  `書籍編號` int(11) NOT NULL AUTO_INCREMENT,
  `書籍名稱` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `價格` decimal(6,2) NOT NULL,
  PRIMARY KEY (`書籍編號`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- 轉存資料表中的資料 `company1`
--

INSERT INTO `company1` (`書籍編號`, `書籍名稱`, `價格`) VALUES
(1, '打開 Mac 新世界', '420.00'),
(2, 'Windows 非常 EASY', '500.00'),
(3, 'PHP 程式語言', '460.00');

-- --------------------------------------------------------

--
-- 表的結構 `company2`
--

CREATE TABLE IF NOT EXISTS `company2` (
  `書籍編號` int(11) NOT NULL AUTO_INCREMENT,
  `書籍名稱` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `價格` decimal(6,2) NOT NULL,
  PRIMARY KEY (`書籍編號`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- 轉存資料表中的資料 `company2`
--

INSERT INTO `company2` (`書籍編號`, `書籍名稱`, `價格`) VALUES
(1, '法式迷你砂鍋創意食譜', '800.00'),
(2, '愛犬品種聖經', '680.00'),
(3, '幸福雜貨生活提案', '350.00');

-- --------------------------------------------------------

--
-- 表的結構 `employee`
--

CREATE TABLE IF NOT EXISTS `employee` (
  `員工編號` int(11) NOT NULL AUTO_INCREMENT,
  `性別` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `姓名` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `電話` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `主管編號` int(11) DEFAULT NULL,
  PRIMARY KEY (`員工編號`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- 轉存資料表中的資料 `employee`
--

INSERT INTO `employee` (`員工編號`, `性別`, `姓名`, `電話`, `主管編號`) VALUES
(1, '女', '陳圓圓', '0223219845', 2),
(2, '女', '劉敏敏', '0246546777', NULL),
(3, '男', '劉國城', '0246465465', 2),
(4, '女', '蘇菲菲', '0287658764', 3),
(5, '男', '郭逸洋', '0354686546', 1),
(6, '男', '邱大熊', '0266873546', 1),
(7, '男', '王國維', '0688643546', 3),
(8, '女', '簡成琳', '0358547646', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
