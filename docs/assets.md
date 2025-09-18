# Assets Operations

Complete asset management with CRUD operations, comprehensive filtering, integration support across multiple platforms, and enhanced custom fields support.

## Get Many

Retrieve multiple assets from HaloPSA with extensive filtering and pagination options.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of assets to return (if Return All is false)
- **Filters**: Comprehensive filtering options including:

### Core Filtering
- **Asset Group ID**: Filter by Assets belonging to a particular Asset group
- **Asset Groups**: Filter Assets on asset groups (comma-separated IDs)
- **Asset Statuses**: Filter Assets on asset statuses (comma-separated IDs)
- **Asset Type ID**: Filter by Assets belonging to a particular Asset type
- **Asset Types**: Filter Assets on asset types (comma-separated IDs)
- **Assets**: Filter on specific asset IDs (comma-separated)
- **Client ID**: Filter by Assets belonging to a particular client
- **Site ID**: Filter by Assets belonging to a particular site

### Status & Activity Filters
- **Active/Inactive**: Filter on active/inactive assets
- **Bookmarked**: Include only Assets that are bookmarked
- **Inactive Assets**: Whether to include inactive Assets
- **Active Assets**: Whether to include active Assets

### Integration Filters
- **Integration Type**: Filter on which integration the Asset was imported through:
  - Addigy
  - Atera RMM
  - ConnectWise Automate
  - Datto
  - Domotz
  - Liongard
  - Ninja RMM
  - PassPortal
  - ServiceNow
  - Syncro MSP
- **Integration Tenant IDs**: Filter by integration tenant IDs (comma-separated)

### Business Logic Filters
- **Contract ID**: Filter by Assets assigned to a particular contract
- **Supplier ID**: Filter by Assets belonging to a particular supplier
- **Service ID**: Filter by Assets belonging to a particular service
- **Ticket ID**: Filter by Assets belonging to a particular ticket
- **Inventory Number**: Filter by specific inventory number
- **Search**: Filter response based on the search string

### Advanced Options
- **Include Custom Fields**: Enhanced multi-select interface that dynamically loads asset custom fields (Type ID = 5) from FieldInfo
- **Pagination**: Page Number, Page Size, Paginate options
- **Ordering**: Order fields 1-5 with ascending/descending options
- **Stock Bin Filters**: Filter by stock bin IDs and locations
- **Sales Order Filters**: Filter by sales order ID and line items


## Get by ID

Retrieve a specific asset by its ID with optional detailed information.

**Parameters:**
- **Asset ID**: The ID of the asset to retrieve
- **Additional Options**: Optional settings including:
  - **Asset Type ID**: Specify asset type for additional context
  - **Include Activity**: Whether to include activity details in the response
  - **Include Allowed Status**: Whether to include allowed statuses details
  - **Include Details**: Whether to include extra objects in the response
  - **Include Diagram Details**: Whether to include diagram details
  - **Include Hierarchy**: Whether to include hierarchy details


## Create

Create a new asset with comprehensive configuration options.

**Required Parameters:**
- **Asset Type ID**: The asset type ID for the asset
- **Client ID**: The client ID that owns this asset
- **Site ID**: The site ID where this asset is located

**Optional Parameters:**
- **Business Owner ID**: The business owner user ID
- **Contract ID**: The contract ID associated with this asset
- **Cost Centre ID**: The cost centre ID for the asset
- **Date of Purchase**: Purchase date for the asset
- **Department ID**: The department ID associated with this asset
- **Extra Field Values**: Additional custom field values
- **Fields**: Custom field definitions
- **Inactive**: Whether the asset is inactive
- **Inventory Number**: The inventory number for the asset
- **Linked To ID**: Filter by Assets linked to a particular Asset
- **Location ID**: The location ID where the asset is situated
- **Notes**: Notes about the asset
- **Priority ID**: The priority ID for the asset
- **Serial**: Serial number of the asset
- **Status ID**: The status ID of the asset
- **Supplier ID**: The supplier ID
- **Tag**: Asset tag identifier
- **Technical Owner ID**: The technical owner user ID
- **Warranty End Date**: End date of warranty coverage


## Update

Update an existing asset with any available field modifications.

**Required Parameters:**
- **Asset ID**: The ID of the asset to update

**Update Fields**: All creation fields are available for updates including:
- Asset type, client, and site relationships
- Owner assignments (business and technical)
- Contract and supplier associations
- Status and priority settings
- Inventory tracking information
- Custom field values
- Notes and documentation


## Delete

Remove an asset from the system.

**Required Parameters:**
- **Asset ID**: The ID of the asset to delete


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access asset data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Asset ID does not exist
- **422 Unprocessable Entity**: Invalid field values or business logic violations

### Business Logic Errors
- **Asset Type Mismatch**: Asset type doesn't support requested fields
- **Client/Site Relationship**: Site must belong to the specified client
- **Status Transitions**: Invalid status change based on workflow rules

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify asset IDs exist and are accessible
2. Check asset type compatibility with custom fields
3. Ensure client/site relationships are valid
4. Validate status and priority IDs exist
5. Confirm user IDs for owners are active
6. Check contract and supplier relationships
7. Verify integration tenant IDs for filtered searches

## Response Format

### Get Many Response
Returns a collection of assets with record count and asset details including ID, type information, client/site relationships, inventory data, ownership details, dates, and custom fields.

### Get by ID Response
Returns a single asset object with comprehensive details including basic asset information, relationships to clients/sites/contracts/suppliers, location and department data, custom fields, and audit timestamps.

### Create/Update Response
Returns the created or updated asset object with generated fields including the asset ID, type information, client/site relationships, inventory details, and audit timestamps.

### Delete Response
Returns a success indicator and the ID of the deleted asset.

## Integration Support

The assets system supports comprehensive integration with multiple platforms:

- **RMM Tools**: Atera, ConnectWise Automate, Datto, Ninja RMM, Syncro MSP
- **Monitoring**: Domotz, Liongard
- **Identity Management**: Addigy (Apple device management)
- **Password Management**: PassPortal
- **ITSM**: ServiceNow

Assets imported through these integrations maintain their source context and can be filtered accordingly for reporting and management purposes.