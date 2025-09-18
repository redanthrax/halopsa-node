# Ticket Types Operations

## Get Many

Retrieve multiple ticket types from HaloPSA.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of ticket types to return (if Return All is false)

## Get by ID

Retrieve a specific ticket type by its ID.

**Required Parameters:**
- **Ticket Type ID**: The ID of the ticket type to retrieve

## Create

Create a new ticket type in HaloPSA.

**Required Parameters:**
- **Name**: The ticket type name

**Optional Parameters:**
- **Additional Fields**: Ticket type configuration options

## Update

Update an existing ticket type.

**Required Parameters:**
- **Ticket Type ID**: The ID of the ticket type to update

**Optional Parameters:**
- **Update Fields**: Fields to update including name and configuration options

## Delete

Delete a ticket type from HaloPSA.

**Required Parameters:**
- **Ticket Type ID**: The ID of the ticket type to delete