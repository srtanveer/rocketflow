-- schema-rollback.sql
-- Best-effort rollback for `schema-update.sql`.
-- WARNING: Dropping tables will remove all data. Only run after a confirmed backup
-- and when you understand the data-loss implications.

-- Example safe usage:
-- 1) Ensure you have a recent dump (see MIGRATE_PRODUCTION.md)
-- 2) Run this file only if you must remove the schema changes and accept data loss

-- Disable foreign key checks to allow drops
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS=0;

-- Drop Tutorial, Post, User in reverse dependency order
DROP TABLE IF EXISTS `Tutorial`;
DROP TABLE IF EXISTS `Post`;
DROP TABLE IF EXISTS `User`;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

-- End of schema-rollback.sql
