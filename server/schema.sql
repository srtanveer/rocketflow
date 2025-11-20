-- RocketFlow Database Schema
-- MySQL Schema for User, Post, and Tutorial tables

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
