-- Run this SQL command in your phpMyAdmin SQL tab to add the missing columns to the Tutorial table

ALTER TABLE `Tutorial`
ADD COLUMN `videoUrl` VARCHAR(191) NULL AFTER `content`,
ADD COLUMN `steps` JSON NULL AFTER `videoUrl`;
