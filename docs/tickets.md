# Tickets Operations

## Get Many

Retrieve multiple tickets from HaloPSA with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of tickets to return (if Return All is false)
- **Filters**: Various filtering options including:
  - Agent ID, Client ID, Site ID, User ID
  - Status ID, Priority ID, Team ID, Ticket Type ID
  - Categories 1-4
  - Date range (From/To)
  - Include Details, Open Only


## Get by ID

Retrieve a specific ticket by its ID.

**Parameters:**
- **Ticket ID**: The ID of the ticket to retrieve
- **Options**: Additional data to include in the response:
  - Include Details, Last Action, Attachments
  - Agent Details, Linked Objects, Auditing

## Create

Create a new ticket in HaloPSA.

**Required Parameters:**
- **Summary**: The ticket subject/title

**Optional Parameters:**
- **Details**: Ticket description
- **Client ID**, **Site ID**, **User ID**
- **Additional Fields**: Comprehensive collection including:
  - Assignment (Agent ID, Team ID)
  - Status and Priority settings
  - Categories, Time estimation
  - Contact information
  - Impact and urgency levels
  - Custom fields (1-5)
  - Financial details
  - Flags and settings
  - Time scheduling
  - Tags and labels


## Update

Update an existing ticket.

**Required Parameters:**
- **Ticket ID**: The ID of the ticket to update

**Optional Parameters:**
- **Update Fields**: Collection of fields to update including summary, details, status, priority, assignment, categories, etc.

## Delete

Delete a ticket from HaloPSA.

**Required Parameters:**
- **Ticket ID**: The ID of the ticket to delete

**Optional Parameters:**
- **Reason**: Optional reason for deletion