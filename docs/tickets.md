# Tickets Operations

## Get Many

Retrieve multiple tickets from HaloPSA with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results (paginates automatically, 1000 per page) or limit
- **Limit**: Maximum number of tickets to return (if Return All is false)
- **Filters**: Various filtering options including:
- **Filters (JSON)**: Overrides the Filters collection from expressions, e.g. `{"client_id": {{ $json.client_id }}}`
  - Agent ID, Client ID, Site ID, User ID
  - Status ID, Priority ID, Team ID, Ticket Type ID
  - Categories 1-4
  - Date range (From/To)
  - Include Details, Open Only
  - **Include Custom Fields**: Enhanced multi-select interface that dynamically loads ticket custom fields (Type ID = 1) from FieldInfo


## Get by ID

Retrieve a specific ticket by its ID.

**Parameters:**
- **Ticket ID**: The ID of the ticket to retrieve
- **Options**: Additional data to include in the response:
  - Include Details, Last Action, Attachments
  - Agent Details, Linked Objects, Auditing
- **Options (JSON)**: Overrides the Options collection from expressions

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
  - Custom fields (1-5) and **Custom Fields** (`customfields` JSON array for ticket-type fields)
  - Financial details
  - Flags and settings
  - Time scheduling
  - Tags and labels
- **Additional Fields (JSON)**: Overrides the collection from expressions (use for `customfields` arrays and other complex values), e.g. `{"customfields": {{ $json.customfields }}}`


## Update

Update an existing ticket.

**Required Parameters:**
- **Ticket ID**: The ID of the ticket to update

**Optional Parameters:**
- **Update Fields**: Collection of fields to update including **Client**, **Site**, **User**, summary, details, status, priority, assignment, categories, **Custom Fields** (`customfields` JSON array), etc.
- **Update Fields (JSON)**: Overrides the Update Fields collection from expressions

## Delete

Delete a ticket from HaloPSA.

**Required Parameters:**
- **Ticket ID**: The ID of the ticket to delete

**Optional Parameters:**
- **Reason**: Optional reason for deletion

## Vote

Submit a vote on a ticket (`POST /Tickets/vote`).

**Required Parameters:**
- **Ticket ID**: The ticket to vote on

**Optional Parameters:**
- **Additional Fields**: JSON body fields merged with the ticket ID

## Record View

Record that a ticket was viewed (`POST /Tickets/View`).

**Required Parameters:**
- **Ticket ID**: The ticket that was viewed

**Optional Parameters:**
- **Additional Fields**: JSON body fields merged with the ticket ID

## Process Children

Process child tickets for a parent (`POST /Tickets/processchildren`).

**Required Parameters:**
- **Ticket ID**: The parent ticket ID

**Optional Parameters:**
- **Additional Fields**: JSON body fields merged with the ticket ID

## Set Billable Project

Apply billable project settings (`POST /Tickets/SetBillableProject`). Optional **Additional Fields** JSON is sent as a single-element array body.

## Get Fault View Log

Returns ticket view log data (`GET /FaultViewLog`). No parameters in OpenAPI.
