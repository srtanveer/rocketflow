-- RocketFlow Database Schema (cleaned)
-- MySQL Schema for User, Post, Tutorial, Package, Feature and PackageFeature tables

-- Create User table
CREATE TABLE IF NOT EXISTS `User` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `role` VARCHAR(50) NOT NULL DEFAULT 'admin',
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create Post table
CREATE TABLE IF NOT EXISTS `Post` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `title` VARCHAR(500) NOT NULL,
  `excerpt` TEXT,
  `content` LONGTEXT,
  `featuredImage` VARCHAR(500) DEFAULT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author` VARCHAR(255) NOT NULL DEFAULT 'Admin',
  `tags` JSON NOT NULL DEFAULT ('[]'),
  `views` INT NOT NULL DEFAULT 0,
  `likes` INT NOT NULL DEFAULT 0,
  `service` VARCHAR(255) DEFAULT NULL,
  INDEX `idx_slug` (`slug`),
  INDEX `idx_date` (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create Tutorial table
CREATE TABLE IF NOT EXISTS `Tutorial` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `title` VARCHAR(500) NOT NULL,
  `excerpt` TEXT,
  `content` LONGTEXT,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author` VARCHAR(255) NOT NULL DEFAULT 'Admin',
  `tags` JSON NOT NULL DEFAULT ('[]'),
  `videoUrl` VARCHAR(500) DEFAULT NULL,
  `steps` JSON NOT NULL DEFAULT ('[]'),
  INDEX `idx_slug` (`slug`),
  INDEX `idx_date` (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Package table
CREATE TABLE IF NOT EXISTS `Package` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `monthly_price` DECIMAL(10,2) DEFAULT NULL,
  `yearly_price` DECIMAL(10,2) DEFAULT NULL,
  `is_popular` TINYINT(1) DEFAULT 0,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_package_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Feature table
CREATE TABLE IF NOT EXISTS `Feature` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `default_price` DECIMAL(10,2) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_feature_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- PackageFeature join table
CREATE TABLE IF NOT EXISTS `PackageFeature` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `package_id` VARCHAR(191) NOT NULL,
  `feature_id` VARCHAR(191) NOT NULL,
  `included` TINYINT(1) NOT NULL DEFAULT 1,
  `feature_price` DECIMAL(10,2) DEFAULT NULL,
  `position` INT DEFAULT 0,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `ux_pkg_feature` (`package_id`, `feature_id`),
  INDEX `idx_package` (`package_id`),
  INDEX `idx_feature` (`feature_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
