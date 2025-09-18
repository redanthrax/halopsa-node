# Clients Operations

## Get Many

Retrieve multiple clients from HaloPSA with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of clients to return (if Return All is false)
- **Filters**: Various filtering options for clients

## Get by ID

Retrieve a specific client by its ID.

**Required Parameters:**
- **Client ID**: The ID of the client to retrieve

**Optional Parameters:**
- **Additional Fields**: Extra data to include in the response

## Create

Create a new client in HaloPSA.

**Required Parameters:**
- **Name**: The client company name

**Optional Parameters:**
- **Additional Fields**: Comprehensive collection of client fields including:
  - Contact information
  - Address details
  - Account settings
  - Custom fields
  - Financial details

## Update

Update an existing client.

**Required Parameters:**
- **Client ID**: The ID of the client to update

**Optional Parameters:**
- **Update Fields**: Collection of fields to update including name, contact details, address, etc.

## Delete

Delete a client from HaloPSA.

**Required Parameters:**
- **Client ID**: The ID of the client to delete