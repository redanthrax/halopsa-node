# Ticket Statuses Operations

## Get Many

Retrieve multiple ticket statuses from HaloPSA.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of ticket statuses to return (if Return All is false)

## Get by ID

Retrieve a specific ticket status by its ID.

**Required Parameters:**
- **Ticket Status ID**: The ID of the ticket status to retrieve

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