# Timesheet Event Operations

## Get Many

Retrieve multiple timesheet events from HaloPSA with filtering options.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of timesheet events to return (if Return All is false)
- **Filters**: Filtering options including:
  - **Agent ID**: Filter by the specified agent
  - **Agents**: Filter by multiple agents (comma-separated)
  - **Start Date**: Filter by start date
  - **End Date**: Filter by end date
  - **UTC Offset**: UTC offset for date filtering

**Example:**
```json
{
  "filters": {
    "agent_id": 15,
    "start_date": "2025-01-01",
    "end_date": "2025-01-31",
    "utcoffset": -5
  }
}
```

## Get by ID

Retrieve a specific timesheet event by its ID.

**Parameters:**
- **Timesheet Event ID**: The ID of the timesheet event to retrieve


## Create

Create a new timesheet event in HaloPSA.

**Note:** The specific parameters for creating timesheet events depend on the implementation. Common fields typically include agent information, time ranges, and event details.


## Update

Update an existing timesheet event.

**Parameters:**
- **Timesheet Event ID**: The ID of the timesheet event to update
- **Update Fields**: Fields to be updated (varies based on implementation)


## Delete

Delete a timesheet event from HaloPSA.

**Parameters:**
- **Timesheet Event ID**: The ID of the timesheet event to delete


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access timesheet event data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Timesheet event ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that timesheet event IDs exist and are accessible
2. Verify agent IDs are valid when creating or filtering timesheet events
3. Ensure date formats are ISO 8601 compliant
4. Validate time ranges (start_date should be before end_date)
5. Check UTC offset values are appropriate for your timezone

## Response Format

### Get Many Response
Returns a collection of timesheet events with record count and event details including ID, agent information, time ranges, event types, descriptions, and dates.

### Get by ID Response
Returns a single timesheet event object with full details including comprehensive event information, agent relationships, time tracking data, duration calculations, and billing status.
