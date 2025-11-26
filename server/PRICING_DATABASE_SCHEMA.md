# Pricing System Database Schema Reference

## 📊 Database Tables

### 1. **Feature Table**
Stores individual features that can be included in pricing plans.

```sql
CREATE TABLE `Feature` (
  `id` VARCHAR(191) PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `default_price` DECIMAL(10,2),
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Columns:**
- `id` - Unique identifier (UUID format)
- `name` - Feature name (e.g., "1,000 SMS/month")
- `description` - Detailed description
- `default_price` - Optional default price for the feature
- `createdAt` - Timestamp when created

**Example:**
```sql
INSERT INTO Feature (id, name, description) VALUES
('feat-sms-1k', '1,000 SMS/month', 'Send up to 1,000 SMS messages per month');
```

---

### 2. **Package Table**
Stores pricing plans/packages.

```sql
CREATE TABLE `Package` (
  `id` VARCHAR(191) PRIMARY KEY,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `monthly_price` DECIMAL(10,2),
  `yearly_price` DECIMAL(10,2),
  `is_popular` TINYINT(1) DEFAULT 0,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Columns:**
- `id` - Unique identifier (UUID format)
- `slug` - URL-friendly identifier (e.g., "starter", "professional")
- `name` - Package name (e.g., "Starter", "Professional")
- `description` - Package description
- `monthly_price` - Monthly subscription price (NULL for custom pricing)
- `yearly_price` - Yearly subscription price (NULL for custom pricing)
- `is_popular` - Boolean flag (1 = show "Most Popular" badge)
- `createdAt` - Timestamp when created

**Example:**
```sql
INSERT INTO Package (id, slug, name, description, monthly_price, yearly_price, is_popular) VALUES
('pkg-starter', 'starter', 'Starter', 'Perfect for small businesses', 29.00, 290.00, 0);
```

---

### 3. **PackageFeature Table** (Join Table)
Links packages to features with inclusion status.

```sql
CREATE TABLE `PackageFeature` (
  `id` VARCHAR(191) PRIMARY KEY,
  `package_id` VARCHAR(191) NOT NULL,
  `feature_id` VARCHAR(191) NOT NULL,
  `included` TINYINT(1) DEFAULT 0,
  `feature_price` DECIMAL(10,2),
  `position` INT,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`package_id`) REFERENCES `Package`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`feature_id`) REFERENCES `Feature`(`id`) ON DELETE CASCADE
);
```

**Columns:**
- `id` - Unique identifier (UUID format)
- `package_id` - Reference to Package table
- `feature_id` - Reference to Feature table
- `included` - Boolean (1 = included, 0 = not included)
- `feature_price` - Optional custom price for this feature in this package
- `position` - Display order (0-based index)
- `createdAt` - Timestamp when created

**Example:**
```sql
INSERT INTO PackageFeature (id, package_id, feature_id, included, position) VALUES
('pf-1', 'pkg-starter', 'feat-sms-1k', 1, 0);
```

---

## 🔗 Relationships

```
Package (1) ──< PackageFeature (Many) >── (1) Feature
```

- One Package can have many Features
- One Feature can belong to many Packages
- PackageFeature is the join table with additional metadata

---

## 📝 Setup Instructions

### Option 1: Run Complete Setup (Recommended)
```bash
mysql -u your_user -p your_database < server/pricing-complete-setup.sql
```

This will:
- Create all tables
- Insert sample features (24 features)
- Insert sample packages (3 packages)
- Link features to packages

### Option 2: Schema Only
```bash
mysql -u your_user -p your_database < server/schema-update.sql
```

Then manually insert data or use the admin panel.

### Option 3: Sample Data Only
If tables already exist:
```bash
mysql -u your_user -p your_database < server/pricing-seed.sql
```

---

## 🔍 Useful Queries

### View All Packages with Prices
```sql
SELECT 
  id,
  name,
  slug,
  monthly_price,
  yearly_price,
  is_popular
FROM Package
ORDER BY monthly_price ASC;
```

### View All Features
```sql
SELECT 
  id,
  name,
  description
FROM Feature
ORDER BY name ASC;
```

### View Package with All Features
```sql
SELECT 
  p.name AS package_name,
  p.monthly_price,
  p.yearly_price,
  f.name AS feature_name,
  pf.included,
  pf.position
FROM Package p
LEFT JOIN PackageFeature pf ON pf.package_id = p.id
LEFT JOIN Feature f ON f.id = pf.feature_id
WHERE p.slug = 'starter'
ORDER BY pf.position ASC;
```

### Count Features per Package
```sql
SELECT 
  p.name,
  COUNT(pf.id) AS total_features,
  SUM(pf.included) AS included_features
FROM Package p
LEFT JOIN PackageFeature pf ON pf.package_id = p.id
GROUP BY p.id, p.name;
```

### Find Packages with Specific Feature
```sql
SELECT 
  p.name AS package_name,
  p.monthly_price,
  pf.included
FROM Package p
JOIN PackageFeature pf ON pf.package_id = p.id
JOIN Feature f ON f.id = pf.feature_id
WHERE f.name LIKE '%SMS%'
ORDER BY p.monthly_price ASC;
```

---

## 🎯 API Endpoints

### Public Endpoint
```
GET /api/pricing
```
Returns all packages with features for public display.

### Admin Endpoints (Requires Auth)
```
GET    /api/admin/pricing/plans      - List all plans
POST   /api/admin/pricing/plans      - Create new plan
PUT    /api/admin/pricing/plans/:id  - Update plan
DELETE /api/admin/pricing/plans/:id  - Delete plan
GET    /api/admin/pricing/features   - List all features
```

---

## 💾 Backup & Restore

### Backup Pricing Data
```bash
mysqldump -u your_user -p your_database Feature Package PackageFeature > pricing_backup.sql
```

### Restore Pricing Data
```bash
mysql -u your_user -p your_database < pricing_backup.sql
```

---

## 🔧 Maintenance

### Clear All Pricing Data
```sql
SET FOREIGN_KEY_CHECKS=0;
TRUNCATE TABLE PackageFeature;
TRUNCATE TABLE Package;
TRUNCATE TABLE Feature;
SET FOREIGN_KEY_CHECKS=1;
```

### Reset Auto-Increment (if using)
```sql
ALTER TABLE Feature AUTO_INCREMENT = 1;
ALTER TABLE Package AUTO_INCREMENT = 1;
ALTER TABLE PackageFeature AUTO_INCREMENT = 1;
```

---

## 📊 Sample Data Summary

### Features (24 total)
- **SMS**: 3 tiers (1K, 10K, Unlimited)
- **AI**: 3 tiers (Basic, Advanced, Premium)
- **Email**: 3 tiers (5K, 50K, Unlimited)
- **Users**: 3 tiers (1, 5, Unlimited)
- **Analytics**: 3 tiers (Basic, Advanced, Custom)
- **Support**: 3 tiers (Email, Priority, VIP)
- **Advanced**: 6 features (AI Features, Integrations, White Label, etc.)

### Packages (3 total)
1. **Starter** - $29/month, $290/year
   - 6 included features, 4 excluded
   
2. **Professional** - $79/month, $790/year (Most Popular)
   - 8 included features, 2 excluded
   
3. **Enterprise** - Custom pricing
   - All 10 features included

---

## 🚀 Next Steps

1. Run the setup SQL file
2. Verify data with verification queries
3. Access admin panel at `/admin/pricing`
4. Customize pricing plans as needed
5. View public pricing at `/pricing`

---

**Version**: 1.0.0  
**Last Updated**: 2025-11-25  
**Database**: MySQL 5.7+
