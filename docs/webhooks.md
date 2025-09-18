# Webhooks Operations

## Get Many

Retrieve multiple webhooks from HaloPSA with filtering options.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of webhooks to return (if Return All is false)
- **Filters**: Filtering options including:
  - **Is Azure Automation**: Filter for Azure Automation webhooks only
  - **Type**: Filter webhooks by type (0: Outbound, 1: Runbook)


## Get by ID

Retrieve a specific webhook by its UUID.

**Parameters:**
- **Webhook ID**: The UUID of the webhook to retrieve
- **Additional Options**: Optional settings including:
  - **Include Details**: Whether to include extra objects in the response (events, steps, flow details, etc.)


## Create

Create a new webhook in HaloPSA.

**Required Parameters:**
- **Name**: The name of the webhook

**Optional Parameters:**
- **Type**: The type of webhook (0: Outbound Webhook, 1: Runbook)
- **URL**: The URL to send webhook payloads to (required for outbound webhooks)
- **Content Type**: Content type for webhook payloads (default: application/json)
- **HTTP Method**: HTTP method to use (0: POST, 1: GET, 2: PUT, 3: DELETE, 4: PATCH)
- **Active**: Whether the webhook is active
- **Authentication Type**: Authentication method (0: None, 1: Basic Auth, 2: Bearer Token, 3: API Key, 4: Certificate)
- **Basic Username**: Username for basic authentication (when using Basic Auth)
- **Basic Password**: Password for basic authentication (when using Basic Auth)
- **Custom Payload**: Whether to use a custom payload format
- **Payload Type**: Type of payload to send (0: Default, 1: Custom JSON, 2: Runbook Variables)
- **Note**: Description or notes for this webhook (max 4000 characters)
- **Log Retention Policy Days**: Number of days to retain webhook execution logs (1-365, default: 30)
- **Batch Method**: How to batch webhook executions (0: None, 1: Time Based, 2: Count Based)
- **Batch Delay Seconds**: Delay in seconds for batch processing
- **Batch Limit**: Maximum number of items per batch (0 = unlimited)
- **Infinite Loop Threshold**: Maximum number of recursive executions to prevent infinite loops
- **Notify on Failure**: Whether to send notifications when the webhook fails
- **Auto Disable Attempts**: Number of consecutive failures before auto-disabling (0 = never auto-disable)


## Update

Update an existing webhook.

**Required Parameters:**
- **Webhook ID**: The UUID of the webhook to update

**Optional Parameters:**
- **Name**: The name of the webhook
- **Type**: The type of webhook (0: Outbound Webhook, 1: Runbook)
- **URL**: The URL to send webhook payloads to
- **Content Type**: Content type for webhook payloads
- **HTTP Method**: HTTP method to use
- **Active**: Whether the webhook is active
- **Authentication Type**: Authentication method for the webhook
- **Basic Username**: Username for basic authentication
- **Basic Password**: Password for basic authentication
- **Custom Payload**: Whether to use a custom payload format
- **Payload Type**: Type of payload to send
- **Note**: Description or notes for this webhook
- **Log Retention Policy Days**: Number of days to retain webhook execution logs
- **Batch Method**: How to batch webhook executions
- **Batch Delay Seconds**: Delay in seconds for batch processing
- **Batch Limit**: Maximum number of items per batch
- **Infinite Loop Threshold**: Maximum number of recursive executions to prevent infinite loops
- **Notify on Failure**: Whether to send notifications when the webhook fails
- **Auto Disable Attempts**: Number of consecutive failures before auto-disabling


## Delete

Delete a webhook from HaloPSA.

**Required Parameters:**
- **Webhook ID**: The UUID of the webhook to delete


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access webhook data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Webhook ID does not exist
- **422 Unprocessable Entity**: Invalid field values or business logic violations

### Business Logic Errors
- **Invalid URL**: URL format is invalid for outbound webhooks
- **Authentication Mismatch**: Authentication credentials don't match the selected type
- **Circular Reference**: Webhook configuration would create an infinite loop

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that webhook IDs exist and are accessible
2. Verify URL format and accessibility for outbound webhooks
3. Ensure authentication credentials are valid
4. Validate payload format and field mappings
5. Check batch processing configuration
6. Verify event trigger conditions
7. Review webhook execution logs

## Response Format

### Get Many Response
Returns a collection of webhooks with webhook details including ID, name, type, URL, authentication settings, active status, and configuration parameters.

### Get by ID Response
Returns a single webhook object with full details when `includedetails` is true, including comprehensive webhook information, event configurations, flow steps, variable mappings, and execution statistics.