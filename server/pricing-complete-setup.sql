-- ============================================
-- RocketFlow Pricing System - Separate Tables
-- ============================================
-- This uses SEPARATE tables (PricingPlan, PricingFeature, PricingPlanFeature)
-- to avoid conflicts with existing Package/Feature tables
-- ============================================

-- Temporarily disable foreign key checks
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS=0;

-- ============================================
-- SCHEMA CREATION (Separate from Package system)
-- ============================================

-- Create pricingfeature table (separate from Feature table)
CREATE TABLE IF NOT EXISTS `pricingfeature` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `icon` VARCHAR(100) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_pricing_feature_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create pricingplan table (separate from Package table)
CREATE TABLE IF NOT EXISTS `pricingplan` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `icon` VARCHAR(100) DEFAULT NULL,
  `color` VARCHAR(50) DEFAULT 'blue',
  `monthly_price` DECIMAL(10,2) DEFAULT NULL,
  `yearly_price` DECIMAL(10,2) DEFAULT NULL,
  `is_popular` TINYINT(1) NOT NULL DEFAULT 0,
  `is_custom` TINYINT(1) NOT NULL DEFAULT 0,
  `display_order` INT DEFAULT 0,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_pricing_plan_slug` (`slug`),
  INDEX `idx_pricing_plan_order` (`display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create pricingplanfeature join table
CREATE TABLE IF NOT EXISTS `pricingplanfeature` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,
  `plan_id` VARCHAR(191) NOT NULL,
  `feature_id` VARCHAR(191) NOT NULL,
  `included` TINYINT(1) NOT NULL DEFAULT 0,
  `position` INT DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_ppf_plan` (`plan_id`),
  INDEX `idx_ppf_feature` (`feature_id`),
  CONSTRAINT `fk_ppf_plan` FOREIGN KEY (`plan_id`) REFERENCES `pricingplan`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_ppf_feature` FOREIGN KEY (`feature_id`) REFERENCES `pricingfeature`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- SAMPLE DATA
-- ============================================

-- Insert Pricing Features
INSERT INTO `pricingfeature` (id, name, description, icon) VALUES
-- SMS Features
('pf-sms-1k', '1,000 SMS/month', 'Send up to 1,000 SMS messages per month', 'message'),
('pf-sms-10k', '10,000 SMS/month', 'Send up to 10,000 SMS messages per month', 'message'),
('pf-sms-unlimited', 'Unlimited SMS', 'Send unlimited SMS messages', 'message'),

-- AI Features
('pf-ai-basic', 'Basic AI Chat Assistant', '24/7 basic AI-powered customer support', 'bot'),
('pf-ai-advanced', 'Advanced AI Chat Assistant', 'Advanced AI with custom training', 'bot'),
('pf-ai-premium', 'Premium AI Chat Assistant', 'Premium AI with full customization', 'bot'),

-- Email Features
('pf-email-5k', 'Email Marketing (5,000/month)', 'Send up to 5,000 marketing emails per month', 'mail'),
('pf-email-50k', 'Email Marketing (50,000/month)', 'Send up to 50,000 marketing emails per month', 'mail'),
('pf-email-unlimited', 'Unlimited Email Marketing', 'Send unlimited marketing emails', 'mail'),

-- User Features
('pf-users-1', '1 User Account', 'Single user access', 'user'),
('pf-users-5', '5 User Accounts', 'Up to 5 team members', 'users'),
('pf-users-unlimited', 'Unlimited Users', 'Unlimited team members', 'users'),

-- Analytics Features
('pf-analytics-basic', 'Basic Analytics', 'Essential business metrics and reports', 'chart'),
('pf-analytics-advanced', 'Advanced Analytics Dashboard', 'Comprehensive analytics with custom reports', 'chart'),
('pf-analytics-custom', 'Custom Analytics & Reporting', 'Fully customizable analytics and reporting', 'chart'),

-- Support Features
('pf-support-email', '24/7 Email Support', 'Round-the-clock email support', 'support'),
('pf-support-priority', '24/7 Priority Support', 'Priority email and chat support', 'support'),
('pf-support-vip', '24/7 VIP Support', 'Dedicated support team with phone access', 'support'),

-- Advanced Features
('pf-ai-features', 'Advanced AI Features', 'Access to all advanced AI capabilities', 'sparkles'),
('pf-integrations', 'Custom Integrations', 'Custom API integrations and webhooks', 'plug'),
('pf-integrations-api', 'Custom Integrations & API', 'Full API access with custom integrations', 'plug'),
('pf-whitelabel-basic', 'White Label Options', 'Basic white labeling capabilities', 'tag'),
('pf-whitelabel-full', 'Full White Label', 'Complete white label solution', 'tag'),
('pf-account-manager', 'Dedicated Account Manager', 'Personal account manager for your business', 'user-check')
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Insert Pricing Plans
INSERT INTO `pricingplan` (id, slug, name, description, icon, color, monthly_price, yearly_price, is_popular, is_custom, display_order) VALUES
('plan-starter', 'starter', 'Starter', 'Perfect for small businesses getting started', 'sparkles', 'blue', 29.00, 290.00, 0, 0, 1),
('plan-professional', 'professional', 'Professional', 'For growing businesses that need more power', 'bolt', 'primary', 79.00, 790.00, 1, 0, 2),
('plan-enterprise', 'enterprise', 'Enterprise', 'Custom solutions for large organizations', 'rocket', 'secondary', NULL, NULL, 0, 1, 3)
ON DUPLICATE KEY UPDATE 
  name=VALUES(name),
  description=VALUES(description),
  monthly_price=VALUES(monthly_price),
  yearly_price=VALUES(yearly_price),
  is_popular=VALUES(is_popular);

-- ============================================
-- STARTER PLAN FEATURES
-- ============================================
INSERT INTO `pricingplanfeature` (id, plan_id, feature_id, included, position) VALUES
('ppf-starter-1', 'plan-starter', 'pf-sms-1k', 1, 0),
('ppf-starter-2', 'plan-starter', 'pf-ai-basic', 1, 1),
('ppf-starter-3', 'plan-starter', 'pf-email-5k', 1, 2),
('ppf-starter-4', 'plan-starter', 'pf-users-1', 1, 3),
('ppf-starter-5', 'plan-starter', 'pf-analytics-basic', 1, 4),
('ppf-starter-6', 'plan-starter', 'pf-support-email', 1, 5),
('ppf-starter-7', 'plan-starter', 'pf-ai-features', 0, 6),
('ppf-starter-8', 'plan-starter', 'pf-integrations', 0, 7),
('ppf-starter-9', 'plan-starter', 'pf-support-priority', 0, 8),
('ppf-starter-10', 'plan-starter', 'pf-account-manager', 0, 9)
ON DUPLICATE KEY UPDATE 
  included=VALUES(included),
  position=VALUES(position);

-- ============================================
-- PROFESSIONAL PLAN FEATURES
-- ============================================
INSERT INTO `pricingplanfeature` (id, plan_id, feature_id, included, position) VALUES
('ppf-pro-1', 'plan-professional', 'pf-sms-10k', 1, 0),
('ppf-pro-2', 'plan-professional', 'pf-ai-advanced', 1, 1),
('ppf-pro-3', 'plan-professional', 'pf-email-50k', 1, 2),
('ppf-pro-4', 'plan-professional', 'pf-users-5', 1, 3),
('ppf-pro-5', 'plan-professional', 'pf-analytics-advanced', 1, 4),
('ppf-pro-6', 'plan-professional', 'pf-support-priority', 1, 5),
('ppf-pro-7', 'plan-professional', 'pf-ai-features', 1, 6),
('ppf-pro-8', 'plan-professional', 'pf-integrations', 1, 7),
('ppf-pro-9', 'plan-professional', 'pf-whitelabel-basic', 0, 8),
('ppf-pro-10', 'plan-professional', 'pf-account-manager', 0, 9)
ON DUPLICATE KEY UPDATE 
  included=VALUES(included),
  position=VALUES(position);

-- ============================================
-- ENTERPRISE PLAN FEATURES
-- ============================================
INSERT INTO `pricingplanfeature` (id, plan_id, feature_id, included, position) VALUES
('ppf-ent-1', 'plan-enterprise', 'pf-sms-unlimited', 1, 0),
('ppf-ent-2', 'plan-enterprise', 'pf-ai-premium', 1, 1),
('ppf-ent-3', 'plan-enterprise', 'pf-email-unlimited', 1, 2),
('ppf-ent-4', 'plan-enterprise', 'pf-users-unlimited', 1, 3),
('ppf-ent-5', 'plan-enterprise', 'pf-analytics-custom', 1, 4),
('ppf-ent-6', 'plan-enterprise', 'pf-support-vip', 1, 5),
('ppf-ent-7', 'plan-enterprise', 'pf-ai-features', 1, 6),
('ppf-ent-8', 'plan-enterprise', 'pf-integrations-api', 1, 7),
('ppf-ent-9', 'plan-enterprise', 'pf-whitelabel-full', 1, 8),
('ppf-ent-10', 'plan-enterprise', 'pf-account-manager', 1, 9)
ON DUPLICATE KEY UPDATE 
  included=VALUES(included),
  position=VALUES(position);

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Check all pricing plans
-- SELECT * FROM `PricingPlan` ORDER BY display_order;

-- Check all pricing features
-- SELECT * FROM `PricingFeature`;

-- Check plan-feature relationships
-- SELECT 
--   p.name AS plan_name,
--   f.name AS feature_name,
--   ppf.included,
--   ppf.position
-- FROM `PricingPlanFeature` ppf
-- JOIN `PricingPlan` p ON ppf.plan_id = p.id
-- JOIN `PricingFeature` f ON ppf.feature_id = f.id
-- ORDER BY p.display_order, ppf.position;

-- ============================================
-- END OF SETUP
-- ============================================
