# Pricing Management System

## Overview
The pricing management system allows administrators to create, update, and delete pricing plans through a user-friendly interface. The system is fully integrated with the backend API and supports dynamic pricing display on the public pricing page.

## Features

### Admin Features
- ✅ Create new pricing plans
- ✅ Edit existing pricing plans
- ✅ Delete pricing plans
- ✅ Manage plan features (include/exclude)
- ✅ Set monthly and yearly pricing
- ✅ Mark plans as "Most Popular"
- ✅ Real-time updates

### Public Features
- ✅ Dynamic pricing display from database
- ✅ Loading states
- ✅ Error handling with fallback data
- ✅ Responsive design
- ✅ Smooth animations

## API Endpoints

### Public Endpoints
```
GET /api/pricing
```
Returns all pricing plans with features for public display.

### Admin Endpoints (Requires Authentication)
```
GET    /api/admin/pricing/plans      - Get all pricing plans (admin view)
POST   /api/admin/pricing/plans      - Create new pricing plan
PUT    /api/admin/pricing/plans/:id  - Update pricing plan
DELETE /api/admin/pricing/plans/:id  - Delete pricing plan
GET    /api/admin/pricing/features   - Get all available features
```

## Database Schema

### Package Table
- `id` - Unique identifier
- `name` - Plan name (e.g., "Starter", "Professional")
- `slug` - URL-friendly identifier
- `description` - Plan description
- `monthly_price` - Monthly price (decimal)
- `yearly_price` - Yearly price (decimal)
- `is_popular` - Boolean flag for "Most Popular" badge
- `createdAt` - Timestamp

### Feature Table
- `id` - Unique identifier
- `name` - Feature name
- `description` - Feature description
- `default_price` - Default price for the feature
- `createdAt` - Timestamp

### PackageFeature Table (Join Table)
- `id` - Unique identifier
- `package_id` - Foreign key to Package
- `feature_id` - Foreign key to Feature
- `included` - Boolean (whether feature is included)
- `feature_price` - Override price for this package
- `position` - Display order
- `createdAt` - Timestamp

## Usage

### Accessing Admin Panel
1. Navigate to `/admin/pricing`
2. Login with admin credentials (redirects if not authenticated)
3. Manage pricing plans through the interface

### Creating a New Plan
1. Click "Add New Plan" button
2. Fill in the form:
   - **Plan Name**: Display name (e.g., "Professional")
   - **Slug**: URL-friendly identifier (auto-generated from name)
   - **Description**: Brief description of the plan
   - **Monthly Price**: Price per month in USD
   - **Yearly Price**: Price per year in USD
   - **Most Popular**: Check to add "Most Popular" badge
   - **Features**: Select features and mark as included/excluded
3. Click "Create Plan"

### Editing a Plan
1. Click the pencil icon on any pricing card
2. Modify the fields as needed
3. Click "Update Plan"

### Deleting a Plan
1. Click the trash icon on any pricing card
2. Confirm deletion in the popup
3. Plan and associated features are removed

## Frontend Components

### Public Pricing Page
**Location**: `/client/app/pricing/page.jsx`

**Features**:
- Fetches pricing from `/api/pricing`
- Displays loading spinner while fetching
- Shows error message if fetch fails
- Falls back to default pricing data
- Supports monthly/yearly toggle
- Responsive grid layout

### Admin Pricing Management
**Location**: `/client/app/admin/pricing/page.jsx`

**Features**:
- Full CRUD operations
- Modal-based forms
- Feature selection with checkboxes
- Real-time validation
- Responsive design
- Authentication required

## Backend Controllers

### Public Pricing Controller
**Location**: `/server/src/controllers/pricingController.js`

**Functions**:
- `getPricing()` - Returns all pricing plans with features

### Admin Pricing Controller
**Location**: `/server/src/controllers/adminPricingController.js`

**Functions**:
- `getAllPricingPlans()` - Get all plans (admin view with full details)
- `createPricingPlan()` - Create new plan with features
- `updatePricingPlan()` - Update existing plan
- `deletePricingPlan()` - Delete plan (cascades to features)
- `getAllFeatures()` - Get all available features for selection

## Authentication

All admin endpoints require:
1. Valid JWT token in Authorization header
2. Admin role in token payload

**Header Format**:
```
Authorization: Bearer <jwt_token>
```

## Environment Variables

### Client
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Server
```env
JWT_SECRET=your_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=rocketflow
```

## Error Handling

### Client-Side
- Network errors show error message
- Falls back to default pricing data
- Authentication errors redirect to login
- Form validation before submission

### Server-Side
- Validates required fields
- Checks for duplicate slugs
- Returns appropriate HTTP status codes
- Logs errors to console

## Testing

### Manual Testing Checklist
- [ ] Create a new pricing plan
- [ ] Edit an existing plan
- [ ] Delete a plan
- [ ] Toggle features on/off
- [ ] Mark plan as popular
- [ ] View public pricing page
- [ ] Test monthly/yearly toggle
- [ ] Test without authentication (should redirect)
- [ ] Test API error handling

### API Testing with cURL

**Create Plan**:
```bash
curl -X POST http://localhost:4000/api/admin/pricing/plans \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Starter",
    "slug": "starter",
    "description": "Perfect for small businesses",
    "monthly_price": 29,
    "yearly_price": 290,
    "is_popular": false,
    "features": [
      {"feature_id": "feature-id-1", "included": true},
      {"feature_id": "feature-id-2", "included": false}
    ]
  }'
```

**Update Plan**:
```bash
curl -X PUT http://localhost:4000/api/admin/pricing/plans/PLAN_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Starter Plus",
    "slug": "starter-plus",
    "monthly_price": 39,
    "yearly_price": 390,
    "is_popular": true,
    "features": [...]
  }'
```

**Delete Plan**:
```bash
curl -X DELETE http://localhost:4000/api/admin/pricing/plans/PLAN_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Future Enhancements

- [ ] Bulk import/export pricing plans
- [ ] Plan comparison view
- [ ] Usage analytics per plan
- [ ] A/B testing for pricing
- [ ] Discount codes and promotions
- [ ] Trial period configuration
- [ ] Custom feature pricing per plan
- [ ] Plan ordering/sorting
- [ ] Archive plans instead of delete
- [ ] Plan version history

## Troubleshooting

### Issue: Pricing not loading on public page
**Solution**: Check API URL in environment variables and ensure backend is running

### Issue: Cannot create/edit plans
**Solution**: Verify JWT token is valid and user has admin role

### Issue: Features not showing in modal
**Solution**: Ensure features exist in database and API endpoint is accessible

### Issue: Duplicate slug error
**Solution**: Use a unique slug for each plan

## Support

For issues or questions, please contact the development team or create an issue in the repository.
