# Ticket Statuses Operations

## Get Many

Retrieve multiple ticket statuses from HaloPSA.

**Parameters:**
- **Return All**: Whether to return all results (paginates automatically, 1000 per page) or limit
- **Filters (JSON)**: Overrides the Filters collection from expressions
- **Limit**: Maximum number of ticket statuses to return (if Return All is false)

## Get by ID

Retrieve a specific ticket status by its ID.

**Parameters:**
- **Ticket Status ID**: The ID of the ticket status to retrieve
- **Options**: Optional include-details and related flags
- **Options (JSON)**: Overrides the Options collection from expressions

## Create

Create a new ticket status in HaloPSA.

**Required Parameters:**
- **Name**: The ticket status name

**Optional Parameters:**
- **Additional Fields**: Status configuration options including:
  - Color settings
  - Behavior flags
  - Workflow settings

## Update

Update an existing ticket status.

**Required Parameters:**
- **Ticket Status ID**: The ID of the ticket status to update

**Optional Parameters:**
- **Update Fields**: Fields to update including name and configuration options

## Delete

Delete a ticket status from HaloPSA.

**Required Parameters:**
- **Ticket Status ID**: The ID of the ticket status to delete