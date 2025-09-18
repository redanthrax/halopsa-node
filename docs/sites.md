# Sites Operations

Complete site management with full CRUD operations, extensive configuration options, comprehensive client integration, and enhanced custom fields support.

## Get Many

Retrieve multiple sites from HaloPSA with comprehensive filtering and pagination options.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of sites to return (if Return All is false)
- **Filters**: Extensive filtering options including:
  - **Client ID**: Filter by the specified client
  - **Contract ID**: Filter by contract association
  - **Active/Inactive**: Filter on active/inactive sites
  - **Include Active**: Include sites that are active
  - **Include Inactive**: Include sites that are inactive
  - **Include Address**: Include site address in the response
  - **Include Details**: Whether to include extra objects in the response
  - **Include Notes**: Include site notes in the response
  - **Include Custom Fields**: Enhanced multi-select interface that dynamically loads site custom fields (Type ID = 3) from FieldInfo
  - **Search**: Filter response based on the search string
  - **Azure Sites**: Include only Azure sites
  - **GFI Sites**: Include only GFI sites
  - **Stock Location**: Filter on stock locations
  - **Top Level ID**: Filter by the specified top level
  - **Pagination**: Page Number, Page Size, Paginate options
  - **Ordering**: Order fields 1-5 with ascending/descending options


## Get by ID

Retrieve a specific site by its ID with optional detailed information.

**Parameters:**
- **Site ID**: The ID of the site to retrieve
- **Additional Options**: Optional settings including:
  - **Client Override**: Filter on a given client ID
  - **Domain**: Filter on site permissions
  - **Include Activity**: Whether to include site ticket activity
  - **Include Details**: Whether to include extra objects in the response
  - **Is Setup**: Whether this is a setup context
  - **Ticket Type ID**: Filter by ticket type context


## Create

Create a new site with comprehensive configuration options.

**Required Parameters:**
- **Site Name**: The name of the site
- **Client ID**: The client ID that owns this site

**Optional Parameters:**
- **Accounts Information**: Email addresses (primary, CC, BCC), first name, last name, system ID
- **Contact Details**: Phone number, phone number integer representation
- **Location Settings**: Geographic coordinates (geocoord1, geocoord2), timezone
- **Business Configuration**:
  - Color coding for visual identification
  - Default delivery settings
  - Invoice site designation
  - Stock location configuration
- **System Integration**:
  - LDAP connection string
  - Email domain and subject prefix
  - Message group ID for notifications
- **Management Assignments**:
  - Facilities manager user ID
  - Regional director user ID
  - Delivery contact user ID
- **Operational Settings**:
  - SLA ID assignment
  - Site date format and time offset
  - Seriousness level for incidents
  - Active/inactive status
- **Custom Fields**: Notes, reference numbers, domain redirection


## Update

Update an existing site with any available field modifications.

**Required Parameters:**
- **Site ID**: The ID of the site to update

**Update Fields**: All creation fields are available for updates including:
- Site name and client relationship
- Contact and accounts information
- Location and geographic data
- Business configuration settings
- Management assignments
- System integration settings
- Operational parameters
- Custom field values


## Delete

Remove a site from the system.

**Required Parameters:**
- **Site ID**: The ID of the site to delete


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access site data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Site ID does not exist
- **422 Unprocessable Entity**: Invalid field values or business logic violations

### Business Logic Errors
- **Client Assignment**: Site must be assigned to a valid, active client
- **User References**: Manager and owner IDs must reference active users
- **SLA Conflicts**: SLA assignments must be compatible with client agreements
- **Geographic Data**: Coordinate values must be within valid ranges

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that site IDs exist and are accessible
2. Verify client IDs are valid and active when filtering by client
3. Ensure search parameters are properly formatted
4. Validate pagination parameters (page size max: 100)
5. Check that referenced clients exist and are accessible
6. Verify user IDs for managers and owners are active
7. Confirm SLA IDs exist and are compatible
8. Validate timezone strings are recognized
9. Check geographic coordinate formats and ranges

## Response Format

### Get Many Response
Returns a collection of sites with record count and site details including ID, name, client relationships, active status, address information, contact details, and notes.

### Get by ID Response
Returns a single site object with full details when `includedetails` is true, including comprehensive site information, client relationships, address details, contact information, configuration settings, and audit timestamps.
