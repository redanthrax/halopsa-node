# Field Info Operations

## Get Many

Retrieve multiple field info records from HaloPSA with optional filtering. Field Info contains metadata about custom fields and their configuration.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of field info records to return (if Return All is false)
- **Filters**: Various filtering options including:
  - Access Control Level
  - Domain filter
  - Exclude Ranges, Tables, and Table Self references
  - Extra Type and Field Type filtering
  - Field Type Multiple (comma-separated list)
  - Include options (Categories, Date Fields, Jira Fields, Remote Fields, Values)
  - Input Type filtering
  - Boolean flags (Is Approval Step, Is Config, Is Custom Field Setup)
  - System ID and Type ID filtering
    - Type ID = 1: Ticket custom fields
    - Type ID = 2: Client custom fields  
    - Type ID = 3: Site custom fields
    - Type ID = 5: Asset custom fields

## Get by ID

Retrieve a specific field info record by its ID.

**Required Parameters:**
- **Field Info ID**: The ID of the field info to retrieve

**Optional Parameters:**
- **Additional Options**: Extra data to include in the response:
  - Entity ID filter
  - Get Lookup Values
  - Include Details
  - Live Custom Fields parameter
  - User ID filter

## Create

Create a new field info record in HaloPSA.

**Required Parameters:**
- **Field Info Data**: JSON data for the field info to create

**Supported Properties:**
- Basic information (name, label, hint, type)
- Configuration (custom, usage, readonly, mandatory)
- Display settings (tab configuration, visibility)
- Validation and formatting options
- Database lookup configuration
- Access control settings

## Update

Update an existing field info record.

**Required Parameters:**
- **Field Info Data**: JSON data for the field info to update (must include id field)

**Optional Parameters:**
- All properties available in Create operation can be updated

## Delete

Delete a field info record from HaloPSA.

**Required Parameters:**
- **Field Info ID**: The ID of the field info to delete

## Enhanced Custom Fields Integration

This implementation provides enhanced integration with custom fields across multiple HaloPSA resources:

### Supported Resources
- **Clients** (Type ID = 2)
- **Tickets** (Type ID = 1) 
- **Sites** (Type ID = 3)
- **Assets** (Type ID = 5)

### Features
- **Dynamic Field Loading**: Automatically loads available custom fields based on the selected resource
- **User-Friendly Display**: Shows field labels with descriptions and hints
- **Multi-Select Interface**: Easy selection of multiple custom fields
- **Automatic Conversion**: Converts selections to comma-separated format for API compatibility

### Usage
When using the "Get Many" operation on Clients, Tickets, Sites, or Assets:
1. Navigate to the **Include Custom Fields** parameter
2. Select from the dynamically loaded list of available custom fields
3. The system automatically formats the selection for the API request