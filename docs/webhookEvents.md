# WebhookEvents Operations

## Get Many

Retrieve multiple webhook events from HaloPSA with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of webhook events to return (if Return All is false)
- **Filters**: Various filtering options including:
  - Automation ID, Integration Method ID, Webhook ID
  - Order by fields (1-5) with ascending/descending options
  - Pagination options (Page Number, Page Size, Paginate)
  - ID Only filtering
  
**Note:** The main **Limit** parameter controls the number of results returned. There is no separate count filter to avoid redundancy.


## Get by ID

Retrieve a specific webhook event by its ID.

**Parameters:**
- **Webhook Event ID**: The UUID of the webhook event to retrieve
- **Include Details**: Whether to include extra objects in the response


## Create

Create a new webhook event in HaloPSA.

**Required Parameters:**
- **Event Name**: The name of the webhook event to create

**Optional Parameters:**
- **Description**: Description for the webhook event
- **Active**: Whether the webhook event is active (default: true)
- **Category**: Category for the webhook event
- **Event Type**: Type of the webhook event


## Update

Update an existing webhook event.

**Required Parameters:**
- **Webhook Event ID**: The UUID of the webhook event to update

**Optional Parameters:**
- **Update Fields**: Collection of fields to update including:
  - Event Name, Description, Active status
  - Category, Event Type


## Delete

Delete a webhook event from HaloPSA.

**Required Parameters:**
- **Webhook Event ID**: The UUID of the webhook event to delete


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Webhook Event ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that webhook event IDs exist and are accessible
2. Verify permissions for webhook event operations
3. Ensure event names are unique when creating
4. Validate that webhook IDs exist when filtering
5. Check that referenced entities (automations, integration methods) exist

## Response Format

### Get Many Response
Returns a collection of webhook events with pagination information and event details including ID, name, description, category, event type, and active status.

### Get by ID Response
Returns a single webhook event object with full details when `includedetails` is true, containing comprehensive event information and related configurations.