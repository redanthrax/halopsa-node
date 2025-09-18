# Invoices Operations

## Get Many

Retrieve multiple invoices from HaloPSA with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of invoices to return (if Return All is false)
- **Filters**: Various filtering options including:
  - Advanced Search, Asset ID, Client ID, Site ID
  - Contract ID, Currency Code, Billing Date
  - Payment Statuses, Posted Only, Ready for Invoicing
  - Date range filtering (Start/End Date with Date Search Field)
  - Order by fields (1-5) with ascending/descending options
  - Pagination options (Page Number, Page Size)
  - Third party integrations (Xero ID, QuickBooks ID)
  - Search functionality and status filtering
  
**Note:** The main **Limit** parameter controls the number of results returned. There is no separate count filter to avoid redundancy.


## Get by ID

Retrieve a specific invoice by its ID.

**Parameters:**
- **Invoice ID**: The ID of the invoice to retrieve
- **Include Details**: Whether to include extra objects in the response (invoice lines, client details, etc.)


## Create

Create a new invoice in HaloPSA.

**Required Parameters:**
- **Client ID**: The client ID for the invoice

**Optional Parameters:**
- **Site Number**: The site number for the invoice
- **Invoice Date**: The invoice date
- **Schedule Date**: The scheduled date for the invoice
- **Due Date**: The due date for payment
- **Contract ID**: The contract ID associated with the invoice
- **Currency**: The currency symbol (default: "$")
- **Currency Code**: The currency code ID (default: 1)
- **Payment Terms**: Payment terms in days
- **Ticket ID**: Associated ticket ID
- **Invoice Type**: The invoice type ID
- **Notes 1-3**: Additional notes for the invoice
- **Order Number**: Purchase order number
- **Customer Order Number**: Customer order number
- **Reference**: Invoice reference
- **Hide Invoice**: Whether to hide the invoice
- **Third Party Invoice Number**: Third party invoice number


## Update

Update an existing invoice.

**Required Parameters:**
- **Invoice ID**: The ID of the invoice to update

**Optional Parameters:**
- **Client ID**: The client ID for the invoice
- **Site Number**: The site number for the invoice
- **Invoice Date**: The invoice date
- **Due Date**: The due date for payment
- **Notes 1**: Additional notes for the invoice
- **Reference**: Invoice reference
- **Posted**: Whether the invoice is posted


## Delete

Delete an invoice from HaloPSA.

**Required Parameters:**
- **Invoice ID**: The ID of the invoice to delete

**Optional Parameters:**
- **Bypass Accounts Sync**: Whether to bypass accounts sync during deletion


## Update Lines

Update invoice lines for an existing invoice.

**Required Parameters:**
- **Invoice Lines**: Array of invoice line objects to update (JSON format)


## Void

Void an existing invoice.

**Required Parameters:**
- **Invoice ID**: The ID of the invoice to void


## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Invoice ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that invoice IDs exist and are accessible
2. Verify client permissions for invoice operations
3. Ensure date formats are ISO 8601 compliant
4. Validate JSON format for invoice lines in updateLines operation
5. Check that referenced entities (clients, contracts, tickets) exist

## Response Format

### Get Many Response
Returns a collection of invoices with pagination information and invoice details including ID, client relationships, financial data, payment status, and dates.

### Get by ID Response
Returns a single invoice object with full details including invoice lines when `includedetails` is true, containing comprehensive invoice information, client relationships, line item details, and financial calculations.
