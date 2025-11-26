-- Pricing System Setup SQL
-- Run this script to initialize the pricing system with sample data

-- First, ensure the tables exist (from schema-update.sql)

-- Insert sample features
INSERT INTO `Feature` (id, name, description, default_price) VALUES
('feat-sms-1k', '1,000 SMS/month', 'Send up to 1,000 SMS messages per month', NULL),
('feat-sms-10k', '10,000 SMS/month', 'Send up to 10,000 SMS messages per month', NULL),
('feat-sms-unlimited', 'Unlimited SMS', 'Send unlimited SMS messages', NULL),
('feat-ai-basic', 'Basic AI Chat Assistant', '24/7 basic AI-powered customer support', NULL),
('feat-ai-advanced', 'Advanced AI Chat Assistant', 'Advanced AI with custom training', NULL),
('feat-ai-premium', 'Premium AI Chat Assistant', 'Premium AI with full customization', NULL),
('feat-email-5k', 'Email Marketing (5,000/month)', 'Send up to 5,000 marketing emails per month', NULL),
('feat-email-50k', 'Email Marketing (50,000/month)', 'Send up to 50,000 marketing emails per month', NULL),
('feat-email-unlimited', 'Unlimited Email Marketing', 'Send unlimited marketing emails', NULL),
('feat-users-1', '1 User Account', 'Single user access', NULL),
('feat-users-5', '5 User Accounts', 'Up to 5 team members', NULL),
('feat-users-unlimited', 'Unlimited Users', 'Unlimited team members', NULL),
('feat-analytics-basic', 'Basic Analytics', 'Essential business metrics and reports', NULL),
('feat-analytics-advanced', 'Advanced Analytics Dashboard', 'Comprehensive analytics with custom reports', NULL),
('feat-analytics-custom', 'Custom Analytics & Reporting', 'Fully customizable analytics and reporting', NULL),
('feat-support-email', '24/7 Email Support', 'Round-the-clock email support', NULL),
('feat-support-priority', '24/7 Priority Support', 'Priority email and chat support', NULL),
('feat-support-vip', '24/7 VIP Support', 'Dedicated support team with phone access', NULL),
('feat-ai-features', 'Advanced AI Features', 'Access to all advanced AI capabilities', NULL),
('feat-integrations', 'Custom Integrations', 'Custom API integrations and webhooks', NULL),
('feat-integrations-api', 'Custom Integrations & API', 'Full API access with custom integrations', NULL),
('feat-whitelabel-basic', 'White Label Options', 'Basic white labeling capabilities', NULL),
('feat-whitelabel-full', 'Full White Label', 'Complete white label solution', NULL),
('feat-account-manager', 'Dedicated Account Manager', 'Personal account manager for your business', NULL)
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Insert sample pricing plans
INSERT INTO `Package` (id, slug, name, description, monthly_price, yearly_price, is_popular) VALUES
('pkg-starter', 'starter', 'Starter', 'Perfect for small businesses getting started', 29.00, 290.00, 0),
('pkg-professional', 'professional', 'Professional', 'For growing businesses that need more power', 79.00, 790.00, 1),
('pkg-enterprise', 'enterprise', 'Enterprise', 'Custom solutions for large organizations', NULL, NULL, 0)
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Starter Plan Features
INSERT INTO `PackageFeature` (id, package_id, feature_id, included, feature_price, position) VALUES
('pf-starter-1', 'pkg-starter', 'feat-sms-1k', 1, NULL, 0),
('pf-starter-2', 'pkg-starter', 'feat-ai-basic', 1, NULL, 1),
('pf-starter-3', 'pkg-starter', 'feat-email-5k', 1, NULL, 2),
('pf-starter-4', 'pkg-starter', 'feat-users-1', 1, NULL, 3),
('pf-starter-5', 'pkg-starter', 'feat-analytics-basic', 1, NULL, 4),
('pf-starter-6', 'pkg-starter', 'feat-support-email', 1, NULL, 5),
('pf-starter-7', 'pkg-starter', 'feat-ai-features', 0, NULL, 6),
('pf-starter-8', 'pkg-starter', 'feat-integrations', 0, NULL, 7),
('pf-starter-9', 'pkg-starter', 'feat-support-priority', 0, NULL, 8),
('pf-starter-10', 'pkg-starter', 'feat-account-manager', 0, NULL, 9)
ON DUPLICATE KEY UPDATE included=VALUES(included);

-- Professional Plan Features
INSERT INTO `PackageFeature` (id, package_id, feature_id, included, feature_price, position) VALUES
('pf-pro-1', 'pkg-professional', 'feat-sms-10k', 1, NULL, 0),
('pf-pro-2', 'pkg-professional', 'feat-ai-advanced', 1, NULL, 1),
('pf-pro-3', 'pkg-professional', 'feat-email-50k', 1, NULL, 2),
('pf-pro-4', 'pkg-professional', 'feat-users-5', 1, NULL, 3),
('pf-pro-5', 'pkg-professional', 'feat-analytics-advanced', 1, NULL, 4),
('pf-pro-6', 'pkg-professional', 'feat-support-priority', 1, NULL, 5),
('pf-pro-7', 'pkg-professional', 'feat-ai-features', 1, NULL, 6),
('pf-pro-8', 'pkg-professional', 'feat-integrations', 1, NULL, 7),
('pf-pro-9', 'pkg-professional', 'feat-whitelabel-basic', 0, NULL, 8),
('pf-pro-10', 'pkg-professional', 'feat-account-manager', 0, NULL, 9)
ON DUPLICATE KEY UPDATE included=VALUES(included);

-- Enterprise Plan Features
INSERT INTO `PackageFeature` (id, package_id, feature_id, included, feature_price, position) VALUES
('pf-ent-1', 'pkg-enterprise', 'feat-sms-unlimited', 1, NULL, 0),
('pf-ent-2', 'pkg-enterprise', 'feat-ai-premium', 1, NULL, 1),
('pf-ent-3', 'pkg-enterprise', 'feat-email-unlimited', 1, NULL, 2),
('pf-ent-4', 'pkg-enterprise', 'feat-users-unlimited', 1, NULL, 3),
('pf-ent-5', 'pkg-enterprise', 'feat-analytics-custom', 1, NULL, 4),
('pf-ent-6', 'pkg-enterprise', 'feat-support-vip', 1, NULL, 5),
('pf-ent-7', 'pkg-enterprise', 'feat-ai-features', 1, NULL, 6),
('pf-ent-8', 'pkg-enterprise', 'feat-integrations-api', 1, NULL, 7),
('pf-ent-9', 'pkg-enterprise', 'feat-whitelabel-full', 1, NULL, 8),
('pf-ent-10', 'pkg-enterprise', 'feat-account-manager', 1, NULL, 9)
ON DUPLICATE KEY UPDATE included=VALUES(included);
