/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : localhost:3306
 Source Schema         : thoughtclan

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 20/12/2019 01:03:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for contact
-- ----------------------------
DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `messsage` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created` timestamp(0) NULL DEFAULT NULL,
  `modified` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for singapore_hotels
-- ----------------------------
DROP TABLE IF EXISTS `singapore_hotels`;
CREATE TABLE `singapore_hotels`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `host_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `neighbourhood_group` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `neighbourhood` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `latitude` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `longitude` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `room_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` int(16) NULL DEFAULT NULL,
  `created` timestamp(0) NULL DEFAULT NULL,
  `status` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 40 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of singapore_hotels
-- ----------------------------
INSERT INTO `singapore_hotels` VALUES (1, 'COZICOMFORT', 'Francesca', 'North Region', 'Woodlands', '1.44255', '103.7958', 'Private room', 83, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (2, 'Bukit Timah', 'Sujatha', 'Central Region', 'Bukit Timah', '1.33235', '103.78521', 'Private room', 81, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (3, 'COMFORT Heights', 'Francesca', 'North Region', 'Woodlands', '1.44246', '103.79667', 'Private room', 69, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (4, 'Ensuite EXPO', 'Belinda', 'East Region', 'Tampines', '1.34541', '103.95712', 'Private room', 206, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (5, 'B&B Airport', 'Belinda', 'East Region', 'Tampines', '1.34567', '103.95963', 'Private room', 94, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (6, 'Airport EXPO', 'Belinda', 'East Region', 'Tampines', '1.34702', '103.96103', 'Private room', 104, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (7, 'Jumbo EXPO', 'Belinda', 'East Region', 'Tampines', '1.34348', '103.96337', 'Private room', 208, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (8, 'The Breezy East \"Leopard\"', 'Bianca', 'East Region', 'Bedok', '1.32304', '103.91363', 'Private room', 50, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (9, 'The Breezy East \"Plumeria\"', 'Bianca', 'East Region', 'Bedok', '1.32458', '103.91163', 'Private room', 54, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (10, 'The Breezy East \"Red Palm\"', 'Bianca', 'East Region', 'Bedok', '1.32545', '103.91191', 'Private room', 42, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (11, 'City Airbnb', 'K2 Guesthouse', 'Central Region', 'Bukit Merah', '1.28875', '103.80814', 'Private room', 44, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (12, '15Outram MRT', 'K2 Guesthouse', 'Central Region', 'Bukit Merah', '1.28837', '103.81099', 'Private room', 40, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (13, 'Booking MRT', 'Belinda', 'East Region', 'Tampines', '1.34561', '103.95984', 'Private room', 417, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (14, 'Newton subway', 'Elizabeth', 'Central Region', 'Newton', '1.31125', '103.83816', 'Private room', 65, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (15, 'Sentosa Hilltop', 'K2 Guesthouse', 'Central Region', 'Bukit Merah', '1.28976', '103.80896', 'Private room', 44, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (16, 'REDHILL INSEAD', 'K2 Guesthouse', 'Central Region', 'Bukit Merah', '1.28677', '103.81244', 'Private room', 40, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (17, 'Redhill MRT Orange', 'K2 Guesthouse', 'Central Region', 'Bukit Merah', '1.28537', '103.81087', 'Private room', 31, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (18, 'BridgeWater EXPO', 'Belinda', 'East Region', 'Tampines', '1.34943', '103.95951', 'Private room', 49, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (19, 'Authentic Peranakan Shophouse', 'Aresha', 'Central Region', 'Geylang', '1.3142', '103.90232', 'Private room', 81, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (20, 'Newton Train Station', 'Elizabeth', 'Central Region', 'Newton', '1.3115', '103.83759', 'Private room', 60, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (21, 'Newton MRT', 'Elizabeth', 'Central Region', 'Newton', '1.31159', '103.83805', 'Private room', 60, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (22, 'Heritage Apartment Orchard', 'Adi', 'Central Region', 'River Valley', '1.29345', '103.83562', 'Private room', 56, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (23, 'Lincoln Street', 'Belinda', 'East Region', 'Tampines', '1.34838', '103.9592', 'Private room', 104, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (24, 'New Vauxhall', 'Susan', 'East Region', 'Tampines', '1.34816', '103.93238', 'Private room', 37, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (25, 'Boon Lay MRT', 'Lena', 'West Region', 'Jurong West', '1.34135', '103.71139', 'Private room', 53, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (26, 'Boutiquet Arena', 'Frederic', 'Central Region', 'Bukit Timah', '1.33171', '103.79383', 'Entire home/apt', 276, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (27, 'Oxford Street View', 'Roger', 'Central Region', 'Rochor', '1.30109', '103.85234', 'Private room', 167, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (28, 'Holland Village', 'Grace', 'Central Region', 'Bukit Timah', '1.31016', '103.79853', 'Private room', 100, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (29, 'HDB prime town', 'Audrey', 'Central Region', 'Queenstown', '1.30901', '103.79639', 'Shared room', 208, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (30, 'Homestay Serangoon', 'Shirlnet', 'North-East Region', 'Serangoon', '1.36743', '103.87288', 'Private room', 26, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (31, 'Condo Beach', 'Jimm', 'East Region', 'Bedok', '1.30792', '103.92287', 'Entire home/apt', 176, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (32, 'East Coast Boutique', 'Richard', 'Central Region', 'Marine Parade', '1.30377', '103.89956', 'Private room', 165, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (33, 'Cozy Estate', 'Christiana', 'North-East Region', 'Serangoon', '1.35001', '103.87161', 'Private room', 44, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (34, 'Good sea view Resort', 'Sharon', 'East Region', 'Pasir Ris', '1.37527', '103.94562', 'Private room', 206, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (35, 'MRT Orchard Road', 'Homestay In Central Singapore', 'Central Region', 'Toa Payoh', '1.34143', '103.84945', 'Private room', 51, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (36, 'Chinatown Queen', 'Kaurus', 'Central Region', 'Outram', '1.28315', '103.84213', 'Private room', 44, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (37, 'Common\'s Estate', 'Immellymel', 'North-East Region', 'Punggol', '1.39963', '103.9064', 'Private room', 167, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (38, 'Cosy Bright Empire', 'Jenny', 'Central Region', 'Queenstown', '1.28342', '103.78585', 'Private room', 128, '2019-12-15 13:09:01', 1);
INSERT INTO `singapore_hotels` VALUES (39, 'Orchard Luxury', 'Dara', 'Central Region', 'Tanglin', '1.30292', '103.82253', 'Entire home/apt', 2604, '2019-12-15 13:09:01', 1);

SET FOREIGN_KEY_CHECKS = 1;
