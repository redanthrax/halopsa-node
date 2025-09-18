# Agents Operations

## Get Many

Retrieve multiple agents from HaloPSA with extensive filtering options.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of agents to return (if Return All is false)
- **Filters**: Comprehensive filtering options including:
  - Activity status (Active/Inactive, Include Disabled, Include Enabled)
  - Department and team filtering (Department ID, Team ID, Teams, Departments)
  - Permission-based filtering (Can Edit Only, Domain permissions, Reassign capabilities)
  - Integration filtering (Integration Type, Remote Agents, Remote Agent Type)
  - Functional filters (Appointment Screen, Exchange Calendars, API Agents)
  - Search and qualification filtering (Search by name/email/phone, Qualifications)
  - Response customization (Basic Fields Only, Include Roles, Include Status, Include Membership Info)
  - Pagination and ordering (Page Number, Page Size, Order fields 1-5 with ascending/descending)
  - Specialized filters (Line Managed Only, Shift Agents Only, Ticket Type Access)


## Get by ID

Retrieve a specific agent by their ID with additional detail options.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve
- **Additional Options**: Optional settings including:
  - **Include Details**: Whether to include extra objects in the response
  - **Get Holiday Allowance**: Whether to get holiday allowance information
  - **Get HTML Designer Signature**: Whether to get HTML designer signature
  - **Client ID Override**: Override client ID for filtering
  - **Is Agent Config**: Whether this is an agent config request
  - **Load Cache**: Whether to load cache


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access agent data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Agent ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that agent IDs exist and are accessible
2. Verify permissions for agent operations (some filters require admin rights)
3. Ensure department/team IDs are valid when using those filters
4. Validate search parameters are properly formatted
5. Check that integration types and remote agent types are valid options

## Response Format

### Get Many Response
Returns a collection of agents with record count and agent details including ID, name, email, phone, department, team, status, role information, and online status.

### Get by ID Response
Returns a single agent object with full details when `includedetails` is true, including comprehensive agent information, department and team relationships, role details, management hierarchy, holiday allowances, and signature data.
