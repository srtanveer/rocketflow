# Applying database schema updates to production

This document explains how to safely apply `server/schema-update.sql` to a production MySQL database and how to rollback with `server/schema-rollback.sql` if necessary. Read it fully before proceeding.

Prerequisites
- SSH access to the server (recommended) or phpMyAdmin access via cPanel.
- `mysql` and `mysqldump` available on the server (common on most hosting environments).
- A recent working backup of the production database (mandatory).

1) Take a full backup (required)

SSH method (recommended):
```bash
# replace values accordingly
mysqldump -h DB_HOST -P DB_PORT -u DB_USER -p DB_NAME \
  --single-transaction --routines --triggers --events > rocketflow-prod-backup-$(date +%F_%T).sql
```

phpMyAdmin / cPanel method: use the Export feature to create a full SQL dump.

2) Test on staging
- Restore the dump to a staging or local DB and run the migration there first:
```bash
mysql -h STAGING_HOST -P STAGING_PORT -u STAGING_USER -p STAGING_DB < rocketflow-prod-backup.sql
mysql -h STAGING_HOST -P STAGING_PORT -u STAGING_USER -p STAGING_DB < server/schema-update.sql
```
- Verify the application starts and queries work.

3) Apply to production (SSH)

Run the migration file using the `mysql` CLI. Replace placeholders with real values.

```bash
mysql -h DB_HOST -P DB_PORT -u DB_USER -p DB_NAME < server/schema-update.sql
```

Notes for cPanel/phpMyAdmin users
- You can import `server/schema-update.sql` via phpMyAdmin's Import UI, but large files may time out. Prefer SSH if available.
- In cPanel's Setup Node.js App, ensure the app has correct DB env vars and restart the Node app after migration.

4) Verify
- Check key endpoints and pages that use `User`, `Post`, and `Tutorial` tables.
- Example quick checks (replace host/port as needed):
  - Ensure app can connect and list posts
  - Run basic SELECTs from phpMyAdmin or `mysql` to confirm tables exist and have expected columns

Note about packages and pricing tables
- The project also uses `Package`, `Feature`, and `PackageFeature` tables for pricing and per-package feature configuration. These tables are included in `server/schema-update.sql` and will be created by the migration if missing.
- The seeding script `server/scripts/seed.js` expects these tables to exist; run the seed after applying the migration if you want default packages/features created.

5) Rollback (ONLY IF NEEDED)
- If you must revert schema changes and have a backup, you can either:
  - Restore the full backup SQL created in step 1 (recommended), or
  - Run `server/schema-rollback.sql` (this will DROP the tables and lose data added since the backup).

Restore example (recommended):
```bash
mysql -h DB_HOST -P DB_PORT -u DB_USER -p DB_NAME < rocketflow-prod-backup-YYYY-MM-DD.sql
```

Rollback file usage (dangerous):
```bash
mysql -h DB_HOST -P DB_PORT -u DB_USER -p DB_NAME < server/schema-rollback.sql
```

6) After any change
- Restart the Node.js application via cPanel App Manager or your process manager.
- Monitor logs and errors for at least 15-30 minutes.

7) Recommendations
- Always test on staging first.
- Prefer restoring from a backup to rolling back schema changes manually when possible.
- If your production environment requires strict migrations with versions, consider adopting a migration tool (e.g., Flyway, Liquibase, or a Node migration library such as `node-migrate`, `knex` migrations, or `umzug` with Sequelize).

If you want, I can:
- Produce a one-shot shell script that performs the backup, applies the migration, verifies table existence, and uploads the log to your home folder.
- Convert `server/schema-update.sql` into a numbered, reversible migration compatible with a migration tool.
