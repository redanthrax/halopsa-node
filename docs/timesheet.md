# Timesheet Operations

## Get Many

Retrieve multiple timesheets from HaloPSA with filtering options.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of timesheets to return (if Return All is false)
- **Filters**: Filtering options including:
  - **Agent ID**: Filter by the specified agent
  - **Date**: Filter by specific date


## Get by ID

Retrieve a specific timesheet by its ID.

**Parameters:**
- **Timesheet ID**: The ID of the timesheet to retrieve
- **Additional Fields**: Optional filtering:
  - **Agent ID**: Filter by the specified agent
  - **Date**: Filter by specific date


## Create

Create a new timesheet in HaloPSA.

**Required Parameters:**
- **Agent ID**: The agent ID for the timesheet
- **Date**: The date for the timesheet

**Optional Parameters (Additional Fields):**
- **Actual Hours**: Actual hours worked
- **Agent Name**: The name of the agent
- **Break Hours**: Break hours taken
- **Colour**: Color code for the timesheet
- **End Time**: End time for the timesheet
- **Start Time**: Start time for the timesheet
- **Target Hours**: Target hours for the timesheet
- **Timesheet Manager**: ID of the timesheet manager
- **Work Hours**: Total work hours
- **Workday ID**: Associated workday ID


## Update

Update an existing timesheet.

**Required Parameters:**
- **Timesheet ID**: The ID of the timesheet to update

**Optional Parameters (Update Fields):**
- **Actual Hours**: Actual hours worked
- **Agent ID**: The agent ID for the timesheet
- **Agent Name**: The name of the agent
- **Break Hours**: Break hours taken
- **Colour**: Color code for the timesheet
- **Date**: The date for the timesheet
- **End Time**: End time for the timesheet
- **Start Time**: Start time for the timesheet
- **Target Hours**: Target hours for the timesheet
- **Timesheet Manager**: ID of the timesheet manager
- **Work Hours**: Total work hours
- **Workday ID**: Associated workday ID


## Delete

Delete a timesheet from HaloPSA.

**Required Parameters:**
- **Timesheet ID**: The ID of the timesheet to delete


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access timesheet data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Timesheet ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that timesheet IDs exist and are accessible
2. Verify agent IDs are valid when creating or filtering timesheets
3. Ensure date formats are ISO 8601 compliant
4. Validate time ranges (start_time should be before end_time)
5. Check that work hours calculations are consistent with start/end times

## Response Format

### Get Many Response
Returns a collection of timesheets with record count and timesheet details including ID, agent information, dates, time tracking data, work hours, and color coding.

### Get by ID Response
Returns a single timesheet object with full details including comprehensive timesheet information, agent relationships, time tracking data, management assignments, and configuration settings.
