# Users Operations

## Get Many

Retrieve multiple users from HaloPSA with extensive filtering options.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of users to return (if Return All is false)
- **Filters**: Comprehensive filtering options (use **Filters (JSON)** for dynamic expressions, e.g. `{"client_id": 70}`)
- **Return All**: When enabled, all pages are fetched automatically
- **Filter fields** include:
  - Activity status (Active Inactive, Include Activity, Include Details)
  - Client and site filtering (Client ID, Site ID, Sites)
  - Search and identification (Search by name/email, Advanced Search, UserName, Login)
  - Response customization (Count, Domain, Fields, Order with ascending/descending)
  - Pagination and ordering (Page Number, Page Size, Order fields 1-5 with ascending/descending)
  - Access and permission filtering (Access Control Template ID, Role, Security Role)
  - Integration and external system filtering (ADFS Linked, Agent ID mapping)
  - Specialized filters (Top Level ID, Custom Field filtering, My Users Only)
  - Advanced options (Include Billing Rates, Include Custom Fields, Include Hierarchy)

## Get by ID

Retrieve a specific user by their ID with additional detail options.

**Parameters:**
- **User ID**: The ID of the user to retrieve
- **Options**: Optional query parameters (use **Options (JSON)** for dynamic expressions)
- **Option fields** include:
  - **Client ID**: Filter by client ID for access control
  - **Domain**: Specify domain context (reqs, prjs, opps)
  - **Include Activity**: Whether to include activity information
  - **Include Details**: Whether to include extra objects in the response
  - **Advanced Options**: Include Order, Order 2-5 fields, Order Desc options
  - **Pagination Options**: Page Number, Page Size, Pageinate settings
  - **Search Context**: Search, Sites, Top Level ID parameters

## Create

Create a new user in HaloPSA with comprehensive configuration options.

**Parameters:**
- **Required Fields**:
  - **Name**: Full name of the user
  - **Email Address**: Primary email address
  - **Site ID**: Associated site identifier
- **Personal Information**: 
  - **First Name**, **Surname**: Name components
  - **Job Title**: User's position
  - **Phone Numbers**: Work Phone, Home Phone, Mobile Phone
- **Contact Details**:
  - **Address Lines 1-4**: Complete address information
  - **Town**, **County**, **Postcode**: Location details
- **System Configuration**:
  - **Login Username**: System login identifier
  - **Password**: Account password
  - **Security Role**: Access level and permissions
- **Organizational Settings**:
  - **Department ID**: Department association
  - **Manager ID**: Reporting structure
  - **Cost Center**: Billing/cost allocation
- **Communication Preferences**:
  - **Preferred Contact Method**: Phone, email, etc.
  - **Language Code**: Localization settings
- **Custom Fields**: Extensible custom field support
- **Advanced Options**: 
  - **Access Control Template ID**: Permission templates
  - **ADFS Linked**: Active Directory integration
  - **Multiple site associations**: Multi-location access
  - **Notification preferences**: Alert and communication settings

## Update

Update an existing user with partial or complete data changes.

**Parameters:**
- **User ID**: The ID of the user to update
- **Update Fields**: Same field options as Create operation
- **Merge Options**: How to handle existing data vs new data
- **Validation Options**: Field validation and constraint checking

## Delete

Remove a user from HaloPSA with proper cleanup handling.

**Parameters:**
- **User ID**: The ID of the user to delete
- **Cleanup Options**: How to handle associated records and references
- **Force Delete**: Override safety constraints (admin only)

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access user data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: User ID does not exist
- **409 Conflict**: Email address already in use or username conflicts

### Data Integrity Errors
- **422 Unprocessable Entity**: Invalid site ID, department ID, or security role
- **400 Bad Request**: Invalid email format or phone number format

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that user IDs exist and are accessible with current permissions
2. Verify site IDs and department IDs are valid when creating/updating users
3. Ensure email addresses are unique and properly formatted
4. Validate security role and access control template IDs exist
5. Check for proper client association when filtering users
6. Verify ADFS integration settings if using Active Directory
7. Ensure required fields (name, email, site_id) are provided for create operations

## Response Format

### Get Many Response
Returns a collection of users with record count and user details including ID, name, email, phone numbers, site association, department, security role, login information, and activity status.

### Get by ID Response
Returns a single user object with full details when `includedetails` is true, including comprehensive user information, site and department relationships, custom fields, hierarchy information, billing rates, and contact preferences.

### Create/Update Response
Returns the created or updated user object with generated ID and system-assigned fields like creation timestamps and system identifiers.

### Delete Response
Returns confirmation of deletion with any cleanup actions performed.